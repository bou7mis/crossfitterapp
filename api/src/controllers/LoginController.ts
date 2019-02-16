import {NextFunction, Request, Response} from "express";
import {Controller, ControllerInterface} from "../lib/Controller";

class LoginController extends Controller implements ControllerInterface {

    /**
     * Initialize routes
     */
    public initRoutes() {
        this.routes = [
            {path: '/', handler: this.login},
            {path: '/:id', handler: this.logout}
        ];
    }

    /**
     * Login
     */
    public logout(req: Request, res: Response, next: NextFunction) {
        res.status(200)
            .send({
                message: 'Logout successful',
                status: res.status,
                response: {}
            });
    }

    /**
     * Logout
     */
    public login(req: Request, res: Response, next: NextFunction) {
        res.status(200)
            .send({
                message: 'Login successful',
                status: res.status,
                response: {}
            });
    }
}

const loginController = new LoginController();
export default loginController.router;
