import { RegisterComponent } from "../components/register-component";
import { User } from "../interfaces/user";

class UserProvider {
    private static readonly storageKey = "user";
    private user?: User;
    private registerComponent = new RegisterComponent(document.getElementById("register-modal") as HTMLDialogElement);

    constructor() {
        this.loadFromStorage();
    }

    isAuthenticated(): boolean {
        return !!this.user;
    }

    register(): void {
        this.registerComponent.runRegister().then(user => {
            this.save(user);
        });
    }

    getUser(): User {
        return this.user;
    }

    private loadFromStorage(): void {
        this.user = JSON.parse(localStorage.getItem(UserProvider.storageKey));
    }

    private save(user: User): void {
        this.user = user;
        localStorage.setItem(UserProvider.storageKey, JSON.stringify(user));
    }
}

export const userProvider = new UserProvider();
