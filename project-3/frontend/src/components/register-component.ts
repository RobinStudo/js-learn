import { User } from "../interfaces/user";
import { apiService } from "../services/api-service";

export class RegisterComponent {
    private apiService = apiService;
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

    private async finish() {
        const payload = new FormData(this.elements.form);

        const data = await this.apiService.fetch('/picture', {
            method: 'POST',
            body: payload,
        });

        const user = {
            username: payload.get("username").toString(),
            picture: data.picture,
        };

        this.elements.container.close();
        this.promiseResovle(user);
    }
}

interface RegisterComponentElements {
    container: HTMLDialogElement;
    form: HTMLFormElement;
}
