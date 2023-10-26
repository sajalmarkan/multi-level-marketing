/** @type import('hardhat/config').HardhatUserConfig */
require("@nomicfoundation/hardhat-toolbox");

const ALCHEMY_API_KEY="D";
const SEPOLIA_PRIVATE_KEY ="";
module.exports = {
  solidity: "0.8.19",

  networks:{
    sepolia:{
      url:`https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts:[`${SEPOLIA_PRIVATE_KEY}`],
    },
  },

    etherscan: {
      apiKey: "7NQQNV1D2X4EINY474SN6F3QDP6JQ47R79",
    },
};
