"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPairId = exports.PairsContracts = void 0;
exports.PairsContracts = {
    ETH_USDC: "0x8ad599c3a0ff1de082011efddc58f1908eb6e6d8",
};
const getPairId = (pair) => {
    try {
        const index = Object.keys(exports.PairsContracts).indexOf(pair);
        return Object.values(exports.PairsContracts)[index];
    }
    catch (e) {
        console.log("getPairId Error", e);
        return null;
    }
};
exports.getPairId = getPairId;
