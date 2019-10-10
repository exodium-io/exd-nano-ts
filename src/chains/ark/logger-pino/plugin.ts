import { Container } from "../interfaces";
import { LoggerManager } from "../log-manager";
import { defaults } from "./defaults";
import { PinoLogger } from "./driver";

export const plugin: Container.IPluginDescriptor = {
    pkg: "plugin.json",
    defaults,
    required: true,
    alias: "logger",
    async register(container: Container.IContainer, options) {
        return container.resolvePlugin<LoggerManager>("log-manager").createDriver(new PinoLogger(options));
    },
};
