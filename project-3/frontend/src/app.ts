import { io } from "socket.io-client";
import { Manager } from "./manager";
import "../scss/app.scss";

new Manager();

io('ws://localhost:3001');
