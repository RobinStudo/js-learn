import { Subject } from "rxjs";
import { io, Socket } from "socket.io-client";

class SocketService {
    private socket: Socket;

    constructor() {
        this.init();
    }

    init() {
        this.socket = io('ws://localhost:3001');
    }

    emit(channel: string, payload: any) {
        this.socket.emit(channel, payload);
    }

    on(channel: string) {
        const subject = new Subject();

        this.socket.on(channel, payload => {
            subject.next(payload);
        });

        return subject.asObservable();
    }
}

export const socketService = new SocketService();
