import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import Router from "./router/Router.js";
import * as dotenv from 'dotenv' 
dotenv.config()

export default class Server {
    constructor(){
        this.port = process.env.PORT || 3000;
        this.app = express();
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));        
        this.app.use(cors())
        this.router = new Router(this.app); 
        this.app.listen(this.port,()=>{
            console.log('server is running on port '+this.port);
        });
    }
}




