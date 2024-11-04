import { ethers } from "hardhat";
import dotenv from "dotenv";
dotenv.config();

async function main() {
  const contractAddress = process.env.CONTRACT_ADDRESS;
  const voterAddress = process.env.VOTER_ADDRESS;

  if (!contractAddress || !voterAddress) {
    console.error("Please set CONTRACT_ADDRESS and VOTER_ADDRESS environment variables.");
    process.exit(1);
  }

  const ballotContract = await ethers.getContractAt("Ballot", contractAddress);

  const tx = await ballotContract.giveRightToVote(voterAddress);
  const receipt = await tx.wait();

  console.log("Voting rights granted with transaction hash:", receipt.transactionHash);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
