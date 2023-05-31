"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPairPrice = void 0;
const axios_1 = __importDefault(require("axios"));
const config_1 = require("../config");
async function getPairPrice(pairAddress) {
    const query = `
  {
    pool(id: "${pairAddress}") {
      tick
      token0 {
        symbol
        id
        decimals
      }
      token1 {
        symbol
        id
        decimals
      }
      feeTier
      sqrtPrice
      liquidity
    }
  }
  `;
    try {
        // Make the API request
        // const response = await fetch(config.uniswap.url, {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify({
        //     query: query,
        //   }),
        // });
        const response = await axios_1.default.post(config_1.config.uniswap.url, {
            query: query,
        });
        console.log(response.data);
        return response.data;
    }
    catch (error) {
        console.error("Error:", error.message);
        return null;
    }
}
exports.getPairPrice = getPairPrice;
// const response = await axios.post(config.uniswap.url, {
//   query: query,
// });
// {
//   factory(id: "0x1F98431c8aD98523631AE4a59f267346ea31F984" ) {
//     poolCount
//     txCount
//     totalVolumeUSD
//     totalVolumeETH
//   }
// }
// {
//     pair(id: "${pairAddress.toLowerCase()}") {
//       token0 {
//         symbol
//       }
//       token1 {
//         symbol
//       }
//       token0Price
//       token1Price
//     }
//   }
