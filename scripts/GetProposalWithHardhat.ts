import { ethers } from "hardhat";
import { hexToString } from "viem";
import dotenv from "dotenv";
dotenv.config();

async function main() {
  const contractAddress = process.env.CONTRACT_ADDRESS;
  const proposalIndex = process.env.PROPOSAL_INDEX;

  if (!contractAddress || proposalIndex === undefined) {
    console.error("Please set CONTRACT_ADDRESS and PROPOSAL_INDEX environment variables.");
    process.exit(1);
  }

  const ballotContract = await ethers.getContractAt("Ballot", contractAddress);

  const proposal = await ballotContract.proposals(BigInt(proposalIndex));
  const name = hexToString(proposal.name);
  console.log(`Proposal #${proposalIndex} - Name: ${name}, Vote Count: ${proposal.voteCount}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
