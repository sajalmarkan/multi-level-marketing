async function main(){
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    const MultiLevelMarketing = await ethers.deployContract("multiLevelMarkeing");

    console.log("mlm address:", await MultiLevelMarketing.getAddress());

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });