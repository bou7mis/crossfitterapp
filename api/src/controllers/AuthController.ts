import {GET, Path} from "typescript-rest";

@Path("/auth")
export class AuthController {
    @Path("/login*")
    @GET
    public login(): any {
        return {message: "Hello handsome"};
    }
}
