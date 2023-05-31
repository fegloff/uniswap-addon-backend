"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    port: parseInt(process.env.PORT || "3001", 10),
    uniswap: {
        url: "https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3",
    },
};
