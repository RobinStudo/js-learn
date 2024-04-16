import { MongoClient } from "mongodb";

class DbService {
    constructor() {}

    async connect() {
        this.client = new MongoClient('mongodb://mongo');
        await this.client.connect();
        this.db = this.client.db('messenger');
    }

    getCollection(collection) {
        return this.db.collection(collection);
    }
}

export const dbService = new DbService();
