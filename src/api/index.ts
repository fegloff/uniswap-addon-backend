import axios from "axios";
import { config } from "../config";

export async function getPairPrice(pairAddress: string) {
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
    const response = await axios.post(config.uniswap.url, {
      query: query,
    });
    console.log(response.data);
    return response.data;
  } catch (error: any) {
    console.error("Error:", error.message);
    return null;
  }
}

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
