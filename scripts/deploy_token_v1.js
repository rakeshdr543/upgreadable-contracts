const { ethers, upgrades } = require("hardhat");

async function main() {
  const MyTokenUpgreadable = await ethers.getContractFactory(
    "MyTokenUpgreadable"
  );
  console.log("Deploying Token...");
  const token = await upgrades.deployProxy(MyTokenUpgreadable, [], {
    initializer: "initialize",
  });
  await token.deployed();
  console.log("Token deployed to:", token.address);
}

main();
