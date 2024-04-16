import { Server } from "socket.io";
import { createServer } from "http";
import express from "express";
import cors from "cors";

const messages = [];

const app = express();
const server = createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*"
    }
});

io.on("connection", socket => {
    socket.on("incomingMessage", payload => {
        messages.push(payload);
        socket.broadcast.emit("forwardMessage", payload);
    });
});

app.use(cors());

app.get("/messages", (req, res) => {
    res.json({
        messages: messages,
    });
});

server.listen(3001);
