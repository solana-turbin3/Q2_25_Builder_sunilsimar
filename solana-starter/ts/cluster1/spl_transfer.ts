import { Commitment, Connection, Keypair, LAMPORTS_PER_SOL, PublicKey, SystemProgram } from "@solana/web3.js"
import wallet from "../wba-wallet.json"
import { getAccount, getOrCreateAssociatedTokenAccount, TOKEN_PROGRAM_ID, transfer } from "@solana/spl-token";
import { signerIdentity } from "@metaplex-foundation/umi";

// We're going to import our keypair from the wallet file
const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));

//Create a Solana devnet connection
const commitment: Commitment = "confirmed";
const connection = new Connection("https://api.devnet.solana.com", commitment);

// Mint address
const mint = new PublicKey("Ewo9NV6mQkS6qzU7e25LL2oNKYEooiP4XdphYfEnxjci");

// Recipient address
const to = new PublicKey("2LwAL5mpQEV3w5VstH1f9AwDyXpHeTDn2uGHwbtZDKA6");

(async () => {
    try {
        // Get the token account of the fromWallet address, and if it does not exist, create it
        const fromToken = await getOrCreateAssociatedTokenAccount(
            connection,
            keypair,
            mint,
           keypair.publicKey,
        )

        // Get the token account of the toWallet address, and if it does not exist, create it
        const toToken = await getOrCreateAssociatedTokenAccount(
            connection,
            keypair,
            mint,
            to,
        )

        
        // Check the balance before transfer
        const balance = await getAccount(connection, fromToken.address);
        console.log(`Current balance: ${balance.amount}`);

        // Transfer the new token to the "toTokenAccount" we just created
        const tx = await transfer(
            connection,
            keypair,
            fromToken.address,
            toToken.address,
            keypair,
            2n,
        )
    } catch(e) {
        console.error(`Oops, something went wrong: ${e}`)
    }
})();