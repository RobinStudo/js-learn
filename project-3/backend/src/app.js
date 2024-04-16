import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";
import { dbService } from "./services/db-service.js";

export class App {
    constructor() {
        this.db = dbService;
        this.collectionName = 'messages';

        this.db.connect().then(() => {
            this.init();
            this.bind();
            this.start();
        });
    }

    init() {
        this.app = express();
        this.app.use(cors());

        this.server = createServer(this.app);
        this.io = new Server(this.server, {
            cors: {
                origin: "*"
            }
        });

        this.messagesCollection = this.db.getCollection(this.collectionName);
    }

    bind() {
        this.io.on("connection", socket => {
            socket.on("incomingMessage", payload => {
                socket.broadcast.emit("forwardMessage", payload);
                this.messagesCollection.insertOne(payload);
            });
        });

        this.app.get("/messages", async (req, res) => {
            res.json({
                messages: await this.messagesCollection.find().toArray(),
            });
        });
    }

    start() {
        this.server.listen(3001);
    }
}
