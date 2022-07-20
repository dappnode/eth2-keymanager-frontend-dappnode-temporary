/**
 * Returns the network: mainnet | gnosis | prater
 */
export const getNetwork = (): string => {
  const network = process.env.REACT_APP_NETWORK;
  if (network === "mainnet") return "mainnet";
  if (network === "gnosis") return "gnosis";
  if (network === "prater") return "prater";
  if (network === "ropsten") return "ropsten";
  return "unknown";
};
