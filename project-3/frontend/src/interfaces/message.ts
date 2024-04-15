import { User } from "./user";

export interface Message {
    user: User;
    content: string;
    date: Date;
}
