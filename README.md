# Hardhat Project Ballot

This project demonstrates a basic Hardhat in ballot use case.

Try to install th following modules:

```shell
npm install @nomicfoundation/hardhat-toolbox-viem@3.0.0
npm install @nomiclabs/hardhat-ethers@2.2.3
npm install dotenv@16.4.5
npm install hardhat@2.22.15
```
<br>
<br>

To run vote:
nb: you should declare environement variabl on .env before run each step.

```shell
npx hardhat run scripts/DeployWithHardhat.ts --network sepolia
npx hardhat run scripts/CastVoteWithHardhat.ts --network sepolia
npx hardhat run scripts/DelegateVoteWithHardhat.ts --network sepolia
npx hardhat run scripts/GiveRightToVoteWithHardhat.ts --network sepolia
```
