import * as bodyParser from "body-parser";
import * as express from "express";
import * as http from "http";
import * as path from "path";
import {Server} from "typescript-rest";
import controllers from "./controllers";

export class ApiServer {

    public PORT: number = +process.env.PORT || 4000;
    private readonly app: express.Application;
    private server: http.Server = null;

    constructor() {
        this.app = express();
        this.config();

        Server.useIoC();
        Server.buildServices(this.app, ...controllers);
        if (process.env.NODE_ENV === "production") {
            Server.swagger(this.app, "./dist/swagger.json", "/doc", "localhost:4000", ["http"]);
        }
    }

    /**
     * Start the server
     * @returns {Promise<any>}
     */
    public start(): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            this.server = this.app.listen(this.PORT, (err: any) => {
                if (err) {
                    return reject(err);
                }

                console.log(`Listening to port : ${this.PORT}`);
                return resolve();
            });
        });

    }

    /**
     * Stop the server (if running).
     * @returns {Promise<boolean>}
     */
    public stop(): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            if (this.server) {
                this.server.close(() => {
                    return resolve(true);
                });
            } else {
                return resolve(true);
            }
        });
    }

    /**
     * Configure the express app.
     */
    private config(): void {
        // Native Express configuration
        this.app.use(bodyParser.urlencoded({extended: false}));
        this.app.use(bodyParser.json({limit: "1mb"}));
        this.app.use(express.static(path.join(__dirname, "public"), {maxAge: 31557600000}));
    }

}
