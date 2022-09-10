import locatioController from "../controllers/locationController.js";
import validate from "../middleware/json-validator.js";
import locationSchema from "../schemas/location.schema.js";
import {  ValidationError  } from "express-json-validator-middleware";

export default class Router {
    
    constructor(app) {
     this.controller = new locatioController();
        this.app = app;
        this.setRoutes();
    }

    setRoutes = () => {

        this.app.post("/location", validate({ body: locationSchema }),this.controller.addLocation);

        this.app.get("/locations",this.controller.getLocations);
        
        this.app.delete("/location/:id")

        this.app.use((error, request, response, next) => {
            if (error instanceof ValidationError) {
              response.status(400).send(error.validationErrors);
              next();
            } else {
              next(error);
            }
          });
    }
}