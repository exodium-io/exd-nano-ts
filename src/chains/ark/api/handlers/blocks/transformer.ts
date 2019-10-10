import { app } from "../../../container";
//import { Blockchain, Database, State } from "@arkecosystem/core-interfaces";
import { Blockchain, State } from "../../../interfaces";
import { formatTimestamp } from "../../..//core-utils";
import { Utils } from "@arkecosystem/crypto";

export const transformBlock = (model, transform) => {
    if (!transform) {
        model.reward = Utils.BigNumber.make(model.reward).toFixed();
        model.totalFee = Utils.BigNumber.make(model.totalFee).toFixed();
        model.totalAmount = Utils.BigNumber.make(model.totalAmount).toFixed();

        return model;
    }
//todo: proxy everything here
    //const databaseService: Database.IDatabaseService = app.resolvePlugin<Database.IDatabaseService>("database");
    //const generator: State.IWallet = databaseService.walletManager.findByPublicKey(model.generatorPublicKey);
    const lastBlock = app.resolvePlugin<Blockchain.IBlockchain>("blockchain").getLastBlock();

    model.reward = Utils.BigNumber.make(model.reward);
    model.totalFee = Utils.BigNumber.make(model.totalFee);

    return {
        id: model.id,
        version: +model.version,
        height: +model.height,
        previous: model.previousBlock,
        forged: {
            reward: model.reward.toFixed(),
            fee: model.totalFee.toFixed(),
            total: model.reward.plus(model.totalFee).toFixed(),
            amount: Utils.BigNumber.make(model.totalAmount).toFixed(),
        },
        payload: {
            hash: model.payloadHash,
            length: model.payloadLength,
        },
        generator: {
            //username: generator.username,
            //address: generator.address,
            //publicKey: generator.publicKey,
        },
        signature: model.blockSignature,
        confirmations: lastBlock ? lastBlock.data.height - model.height : 0,
        transactions: model.numberOfTransactions,
        timestamp: formatTimestamp(model.timestamp),
    };
};
