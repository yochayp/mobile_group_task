import ElasticAccess from "../elasticAccess/ElasticAccess.js";
import JsonAccess from "../jsonAccess/JsonAccess.js";

export default class LocationService{
    
    constructor(){
        this.dbAccess = new JsonAccess();
        this.esAccess = new ElasticAccess();
    }

    createLocation = async (data) => {
        const [res] = await Promise.all([ this.dbAccess.create(data), this.esAccess.addDoc('locations',data)]);
        return res;
    }

    getAllLocations = async () => {
        const [res] = await Promise.all([ this.dbAccess.getAll(), this.esAccess.getIndex('locations')]);
        return res;
    }
}