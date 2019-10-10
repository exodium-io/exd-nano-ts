import Hapi from "@hapi/hapi";
import { RoundsController } from "./controller";
import { httpProxyConfig } from "../../../nano-utils";
import * as Schema from "./schema";

export const registerRoutes = (server: Hapi.Server): void => {
    const controller = new RoundsController();
    server.bind(controller);

    server.route({
        method: "GET",
        path: "/rounds/{id}/delegates",
        handler: httpProxyConfig(),//controller.delegates,
        options: {
            validate: Schema.delegates,
        },
    });
};
