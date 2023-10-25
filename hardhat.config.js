/** @type import('hardhat/config').HardhatUserConfig */
require("@nomicfoundation/hardhat-toolbox");

const ALCHEMY_API_KEY="s4MzbcoilvzcxhFxxGBMH1Ua4stA5RXD";
const SEPOLIA_PRIVATE_KEY ="e9255ca14b8b4d1fb05e1b6ed6ad6f8f1d9b25f3f65c179946e1c743369c7330";
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
