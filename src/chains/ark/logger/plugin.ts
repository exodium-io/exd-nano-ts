import { Container, Logger } from "../interfaces";
import { defaults } from "./defaults";

class LoggerService implements Logger.ILogger {
    make(): Logger.ILogger {
        return this;
    }
    log(level: string, message: any): boolean {
        console.log(`[${level}]: ${message}`);

        return true;
    }
    error(message: any): boolean {
        return this.log("ERROR", message);
    }
    warn(message: any): boolean {
        return this.log("WARN", message);
    }
    info(message: any): boolean {
        return this.log("INFO", message);
    }
    debug(message: any): boolean {
        return this.log("DEBUG", message);
    }
    verbose(message: any): boolean {
        return this.log("VERBOSE", message);
    }
    suppressConsoleOutput(suppress?: boolean): void {
        
    }
}

export const plugin: Container.IPluginDescriptor = {
    pkg: "plugin.json",
    defaults,
    required: true,
    alias: "logger",
    async register(container: Container.IContainer, options) {
        return new LoggerService();
    },
};
