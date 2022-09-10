import { JsonDB, Config } from 'node-json-db';

export default class JsonAccess {

    constructor() {
        this.db = new JsonDB(new Config(process.env.JSON_DB_PATH, true, true));
    }

    create = async (location) => {
        await this.db.push("/locations[]", location);
    };

    getAll = async() => {
        const res = await this.db.getData("/locations");
        return res;
    }
}