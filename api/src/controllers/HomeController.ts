import {GET, Path} from "typescript-rest";

@Path("/")
export class HomeController {
    @Path("/")
    @GET
    public home(): any {
        return {message: "welcome to crossfitapp api"};
    }
}
