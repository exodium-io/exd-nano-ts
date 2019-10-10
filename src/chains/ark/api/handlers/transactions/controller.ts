import { app } from "../../../container";
//import { P2P, TransactionPool } from "@arkecosystem/core-interfaces";
import { P2P } from "../../../interfaces";
import { Enums, Interfaces } from "@arkecosystem/crypto";
import Boom from "@hapi/boom";
import Hapi from "@hapi/hapi";
import { Controller } from "../shared/controller";

export class TransactionsController extends Controller {
    //private readonly transactionPool = app.resolvePlugin<TransactionPool.IConnection>("transaction-pool");

    public async index(request: Hapi.Request, h: Hapi.ResponseToolkit) {
        // @ts-ignore
        const data = await request.server.methods.v2.transactions.index(request);

        return super.respondWithCache(data, h);
    }

    public async store(request: Hapi.Request, h: Hapi.ResponseToolkit) {
        //todo: implement frontrun here?
        /*
        const processor: TransactionPool.IProcessor = this.transactionPool.makeProcessor();
        const result = await processor.validate((request.payload as any).transactions);

        if (result.broadcast.length > 0) {
            app.resolvePlugin<P2P.IPeerService>("p2p")
                .getMonitor()
                .broadcastTransactions(processor.getBroadcastTransactions());
        }

        return {
            data: {
                accept: result.accept,
                broadcast: result.broadcast,
                excess: result.excess,
                invalid: result.invalid,
            },
            errors: result.errors,
        };
        */
    }

    public async show(request: Hapi.Request, h: Hapi.ResponseToolkit) {
        // @ts-ignore
        const data = await request.server.methods.v2.transactions.show(request);

        return super.respondWithCache(data, h);
    }

    public async unconfirmed(request: Hapi.Request, h: Hapi.ResponseToolkit) {
        /*
        const pagination = super.paginate(request);

        const data = (await this.transactionPool.getTransactions(pagination.offset, pagination.limit)).map(
            transaction => ({
                serialized: transaction.toString("hex"),
            }),
        );

        return super.toPagination(
            {
                count: this.transactionPool.getPoolSize(),
                rows: data,
            },
            "transaction",
            (request.query.transform as unknown) as boolean,
        );
        */
       return {};
    }

    public async showUnconfirmed(request: Hapi.Request, h: Hapi.ResponseToolkit) {
        /*
        const transaction: Interfaces.ITransaction = this.transactionPool.getTransaction(request.params.id);

        if (!transaction) {
            return Boom.notFound("Transaction not found");
        }

        const data = { id: transaction.id, serialized: transaction.serialized.toString("hex") };

        return super.respondWithResource(data, "transaction", (request.query.transform as unknown) as boolean);
        */
       return {};
    }

    public async search(request: Hapi.Request, h: Hapi.ResponseToolkit) {
        // @ts-ignore
        const data = await request.server.methods.v2.transactions.search(request);

        return super.respondWithCache(data, h);
    }

    public async types(request: Hapi.Request, h: Hapi.ResponseToolkit) {
        // Remove reverse mapping from TransactionTypes enum.
        const { TransactionTypes } = Enums;
        const data = Object.assign({}, TransactionTypes);

        // tslint:disable-next-line: ban
        Object.values(TransactionTypes)
            .filter(value => typeof value === "string")
            .map((type: string) => data[type])
            .forEach((key: string) => delete data[key]);

        return { data };
    }

    public async fees(request: Hapi.Request, h: Hapi.ResponseToolkit) {
        return {
            data: this.config.getMilestone(this.blockchain.getLastHeight()).fees.staticFees,
        };
    }
}
