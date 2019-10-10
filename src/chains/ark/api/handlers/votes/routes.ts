import Hapi from "@hapi/hapi";
import { VotesController } from "./controller";
import { httpProxyConfig } from "../../../nano-utils";
import * as Schema from "./schema";

export const registerRoutes = (server: Hapi.Server): void => {
    const controller = new VotesController();
    server.bind(controller);

    server.route({
        method: "GET",
        path: "/votes",
        handler: httpProxyConfig(),//controller.index,
        options: {
            //validate: Schema.index,
        },
    });

    server.route({
        method: "GET",
        path: "/votes/{id}",
        handler: httpProxyConfig(),//controller.show,
        options: {
            //validate: Schema.show,
        },
    });
};
