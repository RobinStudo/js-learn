import { User } from "../interfaces/user";

export class RegisterComponent {
    private elements: RegisterComponentElements;
    private promiseResovle: (value: (PromiseLike<User> | User)) => void;

    constructor(container: HTMLDialogElement) {
        this.buildElements(container);
        this.bindEvents();
    }

    runRegister(): Promise<User> {
        return new Promise((resolve) => {
            this.promiseResovle = resolve;
            this.elements.container.showModal();
        });
    }

    private buildElements(container: HTMLDialogElement): void {
        this.elements = {
            container: container,
            form: container.querySelector('form'),
        };
    }

    private bindEvents() {
        this.elements.form.addEventListener("submit", e => {
            e.preventDefault();
            this.finish();
        });
    }

    private finish() {
        const data = new FormData(this.elements.form);
        const user = {
            username: data.get("username").toString(),
        };

        this.elements.container.close();
        this.promiseResovle(user);
    }
}

interface RegisterComponentElements {
    container: HTMLDialogElement;
    form: HTMLFormElement;
}
