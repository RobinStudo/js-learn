import { Message } from "../interfaces/message";
import { apiService } from "../services/api-service";
import { socketService } from "../services/socket-service";
import { userProvider } from "../services/user-provider";

export class RoomComponent {
    private apiService = apiService;
    private socketService = socketService;
    private userProvider = userProvider;
    private elements: RoomComponentElements;

    constructor(container: HTMLElement) {
        this.buildElements(container);
        this.bindEvents();
        this.loadPreviousMessages();
    }

    private buildElements(container: HTMLElement): void {
        this.elements = {
            container: container,
            form: container.querySelector('form'),
            feed: container.querySelector('section'),
            messageTemplate: document.getElementById('template-message') as HTMLTemplateElement,
        }
    }

    private bindEvents() {
        this.elements.form.addEventListener("submit", e => {
            e.preventDefault();
            this.sendMessage();
        });

        this.socketService.on("forwardMessage").subscribe((message: Message) => {
            message.date = new Date(message.date);
            this.displayMessage(message, true)
        });
    }

    private loadPreviousMessages() {
        this.apiService.fetch("/messages").then(data => {
            for (const message of data.messages) {
                message.date = new Date(message.date);
                this.displayMessage(message, this.userProvider.getUser().username !== message.user.username);
            }
        });
    }

    private sendMessage() {
        const data = new FormData(this.elements.form);
        const message = {
            user: this.userProvider.getUser(),
            content: data.get("content").toString(),
            date: new Date(),
        };

        this.socketService.emit("incomingMessage", message);
        this.displayMessage(message);
        this.elements.form.reset();
    }

    private displayMessage(message: Message, external = false) {
        const fragment = document.importNode(this.elements.messageTemplate.content, true);
        const element = fragment.querySelector('article');

        element.classList.add(external ? 'ext' : 'me');
        element.querySelector('.user').textContent = message.user.username;
        element.querySelector('.message').textContent = message.content;
        element.querySelector('.date').textContent = message.date.toLocaleString('fr-FR');

        this.elements.feed.appendChild(element);
    }
}

interface RoomComponentElements {
    container: HTMLElement;
    feed: HTMLElement;
    form: HTMLFormElement;
    messageTemplate: HTMLTemplateElement;
}
