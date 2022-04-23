const { ethers, upgrades } = require("hardhat");

const Proxy = "0xab9F3a713d7154D89C5AD4DfE7D122aB9f348041";

async function main() {
  const BoxV2 = await ethers.getContractFactory("BoxV2");
  console.log("Deploying Box...");
  await upgrades.upgradeProxy(Proxy, BoxV2);

  console.log("Box upgraded");
}

main();
