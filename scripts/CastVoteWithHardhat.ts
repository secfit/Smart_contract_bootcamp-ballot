import { ethers } from "hardhat";  // Use ethers from Hardhat runtime

async function main() {
  const contractAddress = process.env.CONTRACT_ADDRESS;
  const proposalIndex = process.env.PROPOSAL_INDEX;

  if (!contractAddress || !proposalIndex) {
    console.error("Please set CONTRACT_ADDRESS and PROPOSAL_INDEX environment variables.");
    process.exit(1);
  }

  // Use ethers from Hardhat runtime to get contract instance
  const ballotContract = await ethers.getContractAt("Ballot", contractAddress);

  // Cast a vote for the specified proposal index
  const tx = await ballotContract.vote(BigInt(proposalIndex));
  const receipt = await tx.wait();

  console.log("Vote cast with transaction hash:", receipt.transactionHash);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
