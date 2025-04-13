import wallet from "../wba-wallet.json"
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults"
import { createGenericFile, createSignerFromKeypair, signerIdentity } from "@metaplex-foundation/umi"
import { irysUploader } from "@metaplex-foundation/umi-uploader-irys"
import { readFile } from "fs/promises"

// Create a devnet connection
const umi = createUmi('https://api.devnet.solana.com');

let keypair = umi.eddsa.createKeypairFromSecretKey(new Uint8Array(wallet));
const signer = createSignerFromKeypair(umi, keypair);

umi.use(irysUploader());
umi.use(signerIdentity(signer));

(async () => {
    try {
        //1. Load image
        //2. Convert image to generic file.
        //3. Upload image
        // http://devnet.irys.xyz/5zWdHc6cMmYfVoHyUVgtmuNp6EJtKaBvcGvsZUu6tqot
        // https://arweave.net/5zWdHc6cMmYfVoHyUVgtmuNp6EJtKaBvcGvsZUu6tqot
        // https://arweave.net/CHt3jyL9jQMe4GL8cnJpBhBxjz9EFY7DtnszwPhHLuqV
        //http://devnet.irys.xyz/CHt3jyL9jQMe4GL8cnJpBhBxjz9EFY7DtnszwPhHLuqV
        //https://arweave.net/2iynCVUgKtQAron52FJe4xbLSL8n3nsQJNURptfb4Gnv
        //http://devnet.irys.xyz/E44jTRgwawq5shP3etDamyki22npW2fM4XdW7AtHDZN

        // const image = await readFile("./cluster1/assets/jeff.png")
        // const genericFile = await createGenericFile(image, "jeff.png", {contentType: "image/png"});

        //for me
        //https://arweave.net/CLvumUnFyPHm6KXx5rHf38PAk2gt764Rhge98MKf4TYG
         // http://devnet.irys.xyz/CLvumUnFyPHm6KXx5rHf38PAk2gt764Rhge98MKf4TYG
         //metadata
        //  https://arweave.net/HbYgdamn1ErH37XRXF2nMgyTuSJMNzDpptUtJAB3fykV
        // http://devnet.irys.xyz/HbYgdamn1ErH37XRXF2nMgyTuSJMNzDpptUtJAB3fykV
        const image = await readFile("./cluster1/assets/me.png")
        const genericFile = await createGenericFile(image, "me.png", {contentType: "image/png"});


        const [myUri] = await umi.uploader.upload([genericFile]);
        console.log("Your image URI: ", myUri);
    }
    catch(error) {
        console.log("Oops.. Something went wrong", error);
    }
})();
