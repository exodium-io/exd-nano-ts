import { Container } from "../interfaces";
import { defaults } from "./defaults";
import { StateService } from "./service";
import { BlockStore } from "./stores/blocks";
import { StateStore } from "./stores/state";
//import { TransactionStore } from "./stores/transactions";

export const plugin: Container.IPluginDescriptor = {
    pkg: "plugin.json",
    defaults,
    required: true,
    alias: "state",
    async register() {
        return new StateService({
            blocks: new BlockStore(1000),
            //transactions: new TransactionStore(1000),
            storage: new StateStore(),
        });
    },
};