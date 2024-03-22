import { RoomComponent } from "./components/room-component";
import { userProvider } from "./services/user-provider";

export class Manager {
    private userProvider = userProvider;
    private mainRoomComponent = new RoomComponent(document.getElementById("main-room"));

    constructor() {
        this.start();
    }

    private start(): void {
        if (!this.userProvider.isAuthenticated()) {
            this.userProvider.register();
        }
    }
}
