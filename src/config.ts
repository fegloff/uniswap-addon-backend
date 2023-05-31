export const config = {
  port: parseInt(process.env.PORT || "3001", 10),
  uniswap: {
    url: "https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3",
  },
};
