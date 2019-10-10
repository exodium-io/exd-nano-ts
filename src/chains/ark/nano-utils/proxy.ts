import { app } from "../container";
import { P2P, Logger } from "../interfaces";
import shuffle from "lodash.shuffle";

const CORE_API_PLUGIN = "@arkecosystem/core-api";
const logger: Logger.ILogger = app.resolvePlugin<Logger.ILogger>("logger");
const peerStorage: P2P.IPeerStorage = app.resolvePlugin<P2P.IPeerService>("p2p").getStorage();

const httpProxyConfig = () => {
    const getProxyConfig = (ip: string, port: number) => {
        return {
            proxy: {
                host: ip,
                port: port,
                protocol: "http",
                passThrough: true
            }
        }
    }
    const nanoConfig: any = app.getConfig().get("nano");
    const useAnchor: boolean = nanoConfig.useAnchor;
    if(useAnchor)
    {
        const anchorPeer = peerStorage.getAnchor();
        return getProxyConfig(anchorPeer.ip, anchorPeer.ports[CORE_API_PLUGIN]);
    }
    else
    {
        const peersWithApi: P2P.IPeer[] = peerStorage.getPeers().filter(peer => peer.ports[CORE_API_PLUGIN] !== null);
        let peer;
        if(peersWithApi.length > 0)
            peer = shuffle(peersWithApi)[0];
        else
        {
            logger.warn("PROXY: No peers with api in peers list. Falling back to anchor.");
            peer = peerStorage.getAnchor();
        }
        return getProxyConfig(peer.ip, peer.ports[CORE_API_PLUGIN]);
    }
}

const proxyWs = () => {

}

export {
    httpProxyConfig,
    proxyWs
};
