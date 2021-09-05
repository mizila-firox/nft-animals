const NFT = artifacts.require("NFT");

module.exports = async (deployer, network, account) => {
  const nft = await deployer.deploy(NFT);
  console.log("deployed");
};
