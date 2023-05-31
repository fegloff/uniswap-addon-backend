export const PairsContracts = {
  ETH_USDC: "0x8ad599c3a0ff1de082011efddc58f1908eb6e6d8",
};

export const getPairId = (pair: string) => {
  try {
    const index = Object.keys(PairsContracts).indexOf(pair);
    return Object.values(PairsContracts)[index];
  } catch (e) {
    console.log("getPairId Error", e);
    return null;
  }
};
