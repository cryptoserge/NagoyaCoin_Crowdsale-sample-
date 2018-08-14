const NagoyaCoinCrowdsale = artifacts.require("./NagoyaCoinCrowdsale.sol");
const NagoyaCoin = artifacts.require("./NagoyaCoin.sol");

module.exports = function(deployer, network, accounts) {
  const openingTime = web3.eth.getBlock(web3.eth.blockNumber).timestamp + 120; // 120 seconds in the future
  const closingTime = openingTime + 86400 * 20; // 20 days
  const rate = new web3.BigNumber(1000);
  const wallet = accounts[0];

  return deployer
        .then(() => {
            return deployer.deploy(NagoyaCoin);
        })
        .then(() => {
            return deployer.deploy(
                NagoyaCoinCrowdsale,
                openingTime,
                closingTime,
                rate,
                wallet,
                NagoyaCoin.address
            );

	});
};
