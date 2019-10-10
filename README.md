# exd-nano-ts
Newest version of Exodium nano software. Please note that the current code is functioning but NOT production ready.

## Compiling

Make sure TypeScript is updated to at least version 3.6.3. 

```
bash moveConfig.sh
npm install
npm run build
```

## Running

Configure `src/chains/ark/config/mainnet/nano.json` with your node's IP address.

```
node dist/index.js
```