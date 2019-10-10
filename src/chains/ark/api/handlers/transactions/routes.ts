import Hapi from "@hapi/hapi";
import { TransactionsController } from "./controller";
import { httpProxyConfig } from "../../../nano-utils";
import * as Schema from "./schema";

export const registerRoutes = (server: Hapi.Server): void => {
    const controller = new TransactionsController();
    server.bind(controller);

    server.route({
        method: "GET",
        path: "/transactions",
        handler: httpProxyConfig(),//controller.index,
        options: {
            //validate: Schema.index,
        },
    });

    server.route({
        method: "POST",
        path: "/transactions",
        handler: httpProxyConfig(),//controller.store,
        options: {
            /*
            plugins: {
                pagination: {
                    enabled: false,
                },
                "hapi-ajv": {
                    payloadSchema: Schema.store,
                },
            },
            */
        },
    });

    server.route({
        method: "GET",
        path: "/transactions/{id}",
        handler: httpProxyConfig(),//controller.show,
        options: {
            //validate: Schema.show,
        },
    });

    server.route({
        method: "GET",
        path: "/transactions/unconfirmed",
        handler: httpProxyConfig(),//controller.unconfirmed,
        options: {
            //validate: Schema.unconfirmed,
        },
    });

    server.route({
        method: "GET",
        path: "/transactions/unconfirmed/{id}",
        handler: httpProxyConfig(),//controller.showUnconfirmed,
        options: {
            //validate: Schema.showUnconfirmed,
        },
    });

    server.route({
        method: "POST",
        path: "/transactions/search",
        handler: httpProxyConfig(),//controller.search,
        options: {
            //validate: Schema.search,
        },
    });

    server.route({
        method: "GET",
        path: "/transactions/types",
        handler: controller.types,
    });

    server.route({
        method: "GET",
        path: "/transactions/fees",
        handler: controller.fees,
    });
};
