import { LoggerManager } from "./manager";

export const plugin = {
    pkg: "plugin.json",
    alias: "log-manager",
    async register() {
        return new LoggerManager();
    },
};
