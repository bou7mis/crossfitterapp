import {RequestHandler, Router} from "express";

export type ControllerRoutes = { path: string, handler: RequestHandler }[];

export interface ControllerInterface {
    routes: ControllerRoutes,

    initRoutes()
}

export abstract class Controller implements ControllerInterface {

    router: Router;
    routes: ControllerRoutes = [];

    constructor() {
        this.initRoutes();

        if (!this.routes.length) {
            throw Error('Routes must be initialized in ' + this.constructor.name);
        }

        this.router = Router();
        this.routes.forEach((route) => this.router.get(route.path, route.handler))
    }

    public initRoutes() {
    }
}
