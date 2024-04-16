import { Server } from "socket.io";

const io = new Server(3001, {
    cors: {
        origin: "*"
    }
});

io.on("connection", socket => {
    socket.on("incomingMessage", payload => {
        socket.broadcast.emit("forwardMessage", payload);
    });
});
