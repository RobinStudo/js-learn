import { RoomComponent } from "./components/room-component";
import { userProvider } from "./services/user-provider";

export class Manager {
    private userProvider = userProvider;

    constructor() {
        this.start();
        new RoomComponent(document.getElementById("main-room"));
    }

    private start(): void {
        if (!this.userProvider.isAuthenticated()) {
            this.userProvider.register();
        }
    }
}
