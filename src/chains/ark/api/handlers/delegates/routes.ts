import Hapi from "@hapi/hapi";
import { DelegatesController } from "./controller";
import { httpProxyConfig } from "../../../nano-utils";
import * as Schema from "./schema";

export const registerRoutes = (server: Hapi.Server): void => {
    const controller = new DelegatesController();
    server.bind(controller);

    server.route({
        method: "GET",
        path: "/delegates",
        handler: httpProxyConfig(), //controller.index,
        options: {
            //validate: Schema.index,
        },
    });

    server.route({
        method: "GET",
        path: "/delegates/{id}",
        handler: httpProxyConfig(),//controller.show,
        options: {
            //validate: Schema.show,
        },
    });

    server.route({
        method: "GET",
        path: "/delegates/{id}/blocks",
        handler: httpProxyConfig(), //controller.blocks,
        options: {
            //validate: Schema.blocks,
        },
    });

    server.route({
        method: "GET",
        path: "/delegates/{id}/voters",
        handler: httpProxyConfig(),//controller.voters,
        options: {
            //validate: Schema.voters,
        },
    });

    server.route({
        method: "POST",
        path: "/delegates/search",
        handler: httpProxyConfig(),//controller.search,
        options: {
            //validate: Schema.search,
        },
    });
};
