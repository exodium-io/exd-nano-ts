import { app } from "./chains/ark/container";
import fs from "fs";

console.log(fs.readFileSync("art.txt", "utf8"));

const version: string = "2.4.14";
app.setUp(
    version, 
    { 
        chain: "ark",
        network: "mainnet",
        plugins: {
            "@arkecosystem/core-p2p": 4001,
            "@arkecosystem/core-api": 4003
        }
    },
    {
        options: {
            "ark-state": {
                storage: {
                    maxLastBlocks: 100,
                }
            }
        }
    });

