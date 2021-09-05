const NFT = artifacts.require("NFT");

module.exports = async () => {
  const [account] = await web3.eth.getAccounts();

  const nft = await NFT.deployed();

  const value = web3.utils.toWei("0.01");
  console.log(value);

  // await nft
  //   .mint(account, "Big Unicorn", "http://localhost:3000/two.png", {
  //     from: account,
  //     value: value,
  //   })
  //   .then((receipt) => {
  //     console.log(receipt);
  //   });

  // let balance = await token1.balanceOf(account);
  // console.log(`balance of this account: ${balance}`);
};
