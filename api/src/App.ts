import * as express from 'express';
import {Router} from 'express';
import * as bodyParser from 'body-parser';
import LoginRouter from "./controllers/LoginController";

class App {

    public express: express.Application;

    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
    }

    // Configure Express middleware.
    private middleware(): void {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({extended: false}));
    }

    // Configure API endpoints.
    private routes(): void {
        const router = express.Router();
        // placeholder route handler
        router.get('/', (req, res) => {
            res.json({
                message: 'Welcome to crossfit app api'
            });
        });

        const routes: { path: string, router: Router }[] = [
            {path: '/', router},
            {path: '/login', router: LoginRouter}
        ];

        routes.forEach((route) => this.express.use(route.path, route.router));
    }

}

export default new App().express;
