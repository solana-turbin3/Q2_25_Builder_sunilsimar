# Turbin3 Solana Prerequisites Completion (TypeScript)

This repository contains scripts for completing the Turbin3 Solana Prerequisites coursework using TypeScript. Below is a summary of the completed sections and relevant transaction information for Prerequisite 1 on the Solana Devnet.

## Completed Sections

### ✅ Section 1: Create a New Keypair
- Successfully created a new Solana wallet using the keygen script.
- Wallet address: `J7tv79zyCc5SoNWnT38cb6Yh316kCNNuR8ZkEFs2sLXE`
- [View on Solana Explorer](https://explorer.solana.com/address/J7tv79zyCc5SoNWnT38cb6Yh316kCNNuR8ZkEFs2sLXE?cluster=devnet)

### ✅ Section 2: Claim Token Airdrop
- Successfully received 2 SOL from the Solana Devnet faucet.
- Airdrop transaction: [37r1msm7Y2ZrhZKqTUJ3hTJL7ZNVeUMTMRpYxbVyKxdKJhneDN7ntWbhZxRkXXHyD2iCBJBDKAsDuYmDsFseyWYV]
- [View on Solana Explorer](https://explorer.solana.com/tx/37r1msm7Y2ZrhZKqTUJ3hTJL7ZNVeUMTMRpYxbVyKxdKJhneDN7ntWbhZxRkXXHyD2iCBJBDKAsDuYmDsFseyWYV?cluster=devnet)

### ✅ Section 3: Transfer Tokens to Turbin3 Address
- Successfully sent 0.01 SOL to the Turbin3 address.
- Turbin3 address: `8ReQ161Yuog9ZYyBmbi81ZpcVoVbeeyoKU3AiphC1t7R`
- Transfer transaction: `[66ChyV2xmpo22R4FpCSUJPMDMryRmZZLmxKDsDH6VthcTUDhGzg7Y1HUvoQtn8T1M3WbwEspZMb8mxBR5ce4ZJod]`
- [View on Solana Explorer](https://explorer.solana.com/tx/66ChyV2xmpo22R4FpCSUJPMDMryRmZZLmxKDsDH6VthcTUDhGzg7Y1HUvoQtn8T1M3WbwEspZMb8mxBR5ce4ZJod?cluster=devnet)

### ✅ Section 4: Empty devnet wallet into Turbin3 wallet
- Provided Turbin3 wallet - `GLtaTaYiTQrgz411iPJD79rsoee59HhEy18rtRdrhEUJ`
- Successfully transferred all remaining SOL (1.97999 SOL) to the Turbin3 address(Provided One)
- Empty wallet transaction: [umP19V3NPoFCFRhrsx1aGijtSHe36PRgiQyTpBUrDMoFnxzuRfgoeZ3bpVc8dg8C4WPPC1DGoYqBq94ctQMFnxt](https://explorer.solana.com/tx/umP19V3NPoFCFRhrsx1aGijtSHe36PRgiQyTpBUrDMoFnxzuRfgoeZ3bpVc8dg8C4WPPC1DGoYqBq94ctQMFnxt?cluster=devnet)


### ✅ Section 5: Submit Enrollment to Turbin3 Prerequisites Program
- Successfully submitted GitHub username to the Turbin3 prerequisites program.
- GitHub username: `sunilsimar`
- Enrollment transaction: `[3QQdusBYyTHQibAmzoScSZo1pvwgPMHizAJVtrQpmxnMRPigjTpfhf8h7j6PksmJ2Xik6hGp9Z1dJqEAGKsEZZa4]`
- [View on Solana Explorer](https://explorer.solana.com/tx/3QQdusBYyTHQibAmzoScSZo1pvwgPMHizAJVtrQpmxnMRPigjTpfhf8h7j6PksmJ2Xik6hGp9Z1dJqEAGKsEZZa4?cluster=devnet)

## Scripts Overview

This project includes the following scripts located in the `prereq-assignment/turbin3-ts-assignment/airdrop` directory:

1. `keygen.ts` - Generate a new Solana keypair and save it to a wallet file.
2. `airdrop.ts` - Request SOL tokens from the Devnet faucet.
3. `transfer.ts` - Transfer a small amount of SOL to the Turbin3 address.
4. `enroll.ts` - Submit GitHub username to the Turbin3 prerequisites program.

Each script can be run using the corresponding npm script in `package.json`.


