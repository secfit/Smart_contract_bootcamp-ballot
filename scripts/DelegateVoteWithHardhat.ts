import { ethers } from "hardhat";
import dotenv from "dotenv";
dotenv.config();

async function main() {
  const contractAddress = process.env.CONTRACT_ADDRESS;
  const delegateTo = process.env.DELEGATE_TO;

  if (!contractAddress || !delegateTo) {
    console.error("Please set CONTRACT_ADDRESS and DELEGATE_TO environment variables.");
    process.exit(1);
  }

  const ballotContract = await ethers.getContractAt("Ballot", contractAddress);

  const tx = await ballotContract.delegate(delegateTo);
  const receipt = await tx.wait();

  console.log("Vote delegated with transaction hash:", receipt.transactionHash);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
