import Hapi from "@hapi/hapi";
import { BlocksController } from "./controller";
import { httpProxyConfig } from "../../../nano-utils";
import * as Schema from "./schema";

export const registerRoutes = (server: Hapi.Server): void => {
    const controller = new BlocksController();
    server.bind(controller);

    server.route({
        method: "GET",
        path: "/blocks", 
        handler: httpProxyConfig(), //controller.index,
        options: {
            //validate: Schema.index, <-- disable validation when proxying due to "route payload must be set to 'parse' when payload validation enabled"
        },
    });

    server.route({
        method: "GET",
        path: "/blocks/first",
        handler: httpProxyConfig(),//controller.first,
        options: {
            //validate: Schema.first,
        },
    });

    server.route({
        method: "GET",
        path: "/blocks/last",
        handler: httpProxyConfig(),//controller.last,
        options: {
            //validate: Schema.last,
        },
    });

    server.route({
        method: "GET",
        path: "/blocks/{id}",
        handler: httpProxyConfig(),//controller.show,
        options: {
            //validate: Schema.show,
        },
    });

    server.route({
        method: "GET",
        path: "/blocks/{id}/transactions",
        handler: httpProxyConfig(),//controller.transactions,
        options: {
            //validate: Schema.transactions,
        },
    });

    server.route({
        method: "POST",
        path: "/blocks/search",
        handler: httpProxyConfig(),//controller.search,
        options: {
            //validate: Schema.search,
        },
    });
};
