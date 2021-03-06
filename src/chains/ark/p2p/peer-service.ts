import { P2P } from "../interfaces";

export class PeerService implements P2P.IPeerService {
    private readonly communicator: P2P.IPeerCommunicator;
    private readonly connector: P2P.IPeerConnector;
    private readonly monitor: P2P.INetworkMonitor;
    private readonly processor: P2P.IPeerProcessor;
    private readonly storage: P2P.IPeerStorage;

    public constructor({
        communicator,
        connector,
        monitor,
        processor,
        storage,
    }: {
        communicator: P2P.IPeerCommunicator;
        connector: P2P.IPeerConnector;
        monitor: P2P.INetworkMonitor;
        processor: P2P.IPeerProcessor;
        storage: P2P.IPeerStorage;
    }) {
        this.communicator = communicator;
        this.connector = connector;
        this.monitor = monitor;
        this.processor = processor;
        this.storage = storage;
    }

    public getStorage(): P2P.IPeerStorage {
        return this.storage;
    }

    public getProcessor(): P2P.IPeerProcessor {
        return this.processor;
    }

    public getConnector(): P2P.IPeerConnector {
        return this.connector;
    }

    public getCommunicator(): P2P.IPeerCommunicator {
        return this.communicator;
    }

    public getMonitor(): P2P.INetworkMonitor {
        return this.monitor;
    }
}
