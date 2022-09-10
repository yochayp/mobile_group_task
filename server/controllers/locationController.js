import LocationService from "../services/LocationService.js";

export default class Controller {

    constructor() {
        this.service = new LocationService();
    }

    addLocation = async (req,res) =>
    {
        const {body} = req;
        try {
            const result = await this.service.createLocation(body);
            res.status(200).json(result);
        } catch (error) {
            res.status(400).send(error.message);
        }
    }
    
    getLocations = async (req,res) =>
    {
        try {
            const result = await this.service.getAllLocations();
            res.status(200).json(result);
        } catch (error) {
            res.status(400).send(error.message);
        }
    } 
}

