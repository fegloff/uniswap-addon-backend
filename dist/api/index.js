"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPairPrice = void 0;
const axios_1 = __importDefault(require("axios"));
const config_1 = require("../config");
function getPairPrice(pairAddress) {
    return __awaiter(this, void 0, void 0, function* () {
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
            const response = yield axios_1.default.post(config_1.config.uniswap.url, {
                query: query,
            });
            console.log(response.data);
            return response.data;
        }
        catch (error) {
            console.error("Error:", error.message);
            return null;
        }
    });
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
