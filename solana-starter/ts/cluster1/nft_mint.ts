import { createUmi } from "@metaplex-foundation/umi-bundle-defaults"
import { createSignerFromKeypair, signerIdentity, generateSigner, percentAmount } from "@metaplex-foundation/umi"
import { createNft, mplTokenMetadata } from "@metaplex-foundation/mpl-token-metadata";

import wallet from "../wba-wallet.json"
import base58 from "bs58";

const RPC_ENDPOINT = "https://api.devnet.solana.com";
const umi = createUmi(RPC_ENDPOINT);

let keypair = umi.eddsa.createKeypairFromSecretKey(new Uint8Array(wallet));
const myKeypairSigner = createSignerFromKeypair(umi, keypair);
umi.use(signerIdentity(myKeypairSigner));
umi.use(mplTokenMetadata())

const mint = generateSigner(umi);

(async () => {
    // let tx = await createNft(umi, {
    //     mint,
    //     sellerFeeBasisPoints: percentAmount(5.5),
    //     name: "Shock Jeff",
    //     symbol: "SJ",
    //     uri: 'https://devnet.irys.xyz/E44jTRgwawq5shP3etDamyki22npW2fM4XdW7AtHDZN'
    // })

        let tx = await createNft(umi, {
        mint,
        sellerFeeBasisPoints: percentAmount(5.5),
        name: "Sunil",
        symbol: "SS",
        uri: 'https://devnet.irys.xyz/HbYgdamn1ErH37XRXF2nMgyTuSJMNzDpptUtJAB3fykV'
    })
    
    let result = await tx.sendAndConfirm(umi);
    const signature = base58.encode(result.signature);
    
    console.log(`Succesfully Minted! Check out your TX here:\nhttps://explorer.solana.com/tx/${signature}?cluster=devnet`)
    //https://explorer.solana.com/address/dBiaPUmTnBMeWYdBmfZ1KKw3G3zxWr4PjXj5QQjUDG6?cluster=devnet

    console.log("Mint Address: ", mint.publicKey);
})();