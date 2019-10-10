import Hapi from "@hapi/hapi";
import { WalletsController } from "./controller";
import { httpProxyConfig } from "../../../nano-utils";
import * as Schema from "./schema";

export const registerRoutes = (server: Hapi.Server): void => {
    const controller = new WalletsController();
    server.bind(controller);

    server.route({
        method: "GET",
        path: "/wallets",
        handler: httpProxyConfig(),//controller.index,
        options: {
            //validate: Schema.index,
        },
    });

    server.route({
        method: "GET",
        path: "/wallets/top",
        handler: httpProxyConfig(),//controller.top,
        options: {
            //validate: Schema.index,
        },
    });

    server.route({
        method: "GET",
        path: "/wallets/{id}",
        handler: httpProxyConfig(),//controller.show,
        options: {
            //validate: Schema.show,
        },
    });

    server.route({
        method: "GET",
        path: "/wallets/{id}/transactions",
        handler: httpProxyConfig(),//controller.transactions,
        options: {
            //validate: Schema.transactions,
        },
    });

    server.route({
        method: "GET",
        path: "/wallets/{id}/transactions/sent",
        handler: httpProxyConfig(),//controller.transactionsSent,
        options: {
            //validate: Schema.transactionsSent,
        },
    });

    server.route({
        method: "GET",
        path: "/wallets/{id}/transactions/received",
        handler: httpProxyConfig(),//controller.transactionsReceived,
        options: {
            //validate: Schema.transactionsReceived,
        },
    });

    server.route({
        method: "GET",
        path: "/wallets/{id}/votes",
        handler: httpProxyConfig(),//controller.votes,
        options: {
            //validate: Schema.votes,
        },
    });

    server.route({
        method: "POST",
        path: "/wallets/search",
        handler: httpProxyConfig(),//controller.search,
        options: {
            //validate: Schema.search,
        },
    });
};
