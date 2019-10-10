import Hapi from "@hapi/hapi";
import { Controller } from "../shared/controller";

export class DelegatesController extends Controller {
    public async index(request: Hapi.Request, h: Hapi.ResponseToolkit) {
        // @ts-ignore
        const data = await request.server.methods.v2.delegates.index(request);

        return super.respondWithCache(data, h);
    }

    public async show(request: Hapi.Request, h: Hapi.ResponseToolkit) {
        // @ts-ignore
        const data = await request.server.methods.v2.delegates.show(request);

        return super.respondWithCache(data, h);
    }

    public async search(request: Hapi.Request, h: Hapi.ResponseToolkit) {
        // @ts-ignore
        const data = await request.server.methods.v2.delegates.search(request);

        return super.respondWithCache(data, h);
    }

    public async blocks(request: Hapi.Request, h: Hapi.ResponseToolkit) {
        // @ts-ignore
        const data = await request.server.methods.v2.delegates.blocks(request);

        return super.respondWithCache(data, h);
    }

    public async voters(request: Hapi.Request, h: Hapi.ResponseToolkit) {
        // @ts-ignore
        const data = await request.server.methods.v2.delegates.voters(request);

        return super.respondWithCache(data, h);
    }
}
