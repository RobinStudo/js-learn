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
    }
}

interface RoomComponentElements {
    container: HTMLElement;
    feed: HTMLElement;
    form: HTMLFormElement;
}
