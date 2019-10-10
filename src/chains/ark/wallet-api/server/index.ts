import { app } from "../../container";
import { createServer, mountServer, plugins } from "../../core-http-utils";
//import h2o2 from "@hapi/h2o2";
import * as handlers from "./handlers";

export const startServer = async config => {
    const server = await createServer({
        host: config.host,
        port: config.port,
    });

    // @ts-ignore
    //await server.register(h2o2); <-- h2o2 proxy registered in api plugin

    await server.register({
        plugin: plugins.corsHeaders,
    });

    server.route({
        method: "GET",
        path: "/",
        handler() {
            return { data: "Hello World!" };
        },
    });

    server.route([{ method: "GET", path: "/config", ...handlers.config }]);

    if (app.has("api")) {
        await server.register({
            plugin: require("hapi-rate-limit"),
            options: app.resolveOptions("api").rateLimit,
        });

        await server.register({
            plugin: plugins.whitelist,
            options: {
                whitelist: app.resolveOptions("api").whitelist,
            },
        });

        server.route({
            method: "*",
            path: "/{path*}",
            handler: {
                proxy: {
                    protocol: "http",
                    host: app.resolveOptions("api").host,
                    port: app.resolveOptions("api").port,
                    passThrough: true,
                },
            },
        });
    }

    return mountServer("Wallet API", server);
};
