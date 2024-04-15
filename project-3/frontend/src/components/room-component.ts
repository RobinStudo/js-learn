import { Message } from "../interfaces/message";
import { userProvider } from "../services/user-provider";

export class RoomComponent {
    private userProvider = userProvider;
    private elements: RoomComponentElements;

    constructor(container: HTMLElement) {
        this.buildElements(container);
        this.bindEvents();
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
        })
    }

    private sendMessage() {
        const data = new FormData(this.elements.form);
        const message = {
            user: this.userProvider.getUser(),
            content: data.get("content").toString(),
            date: new Date(),
        };

        // TODO - Add message in feed & send to backend
        this.displayMessage(message);
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
