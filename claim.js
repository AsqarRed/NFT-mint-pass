import { contract } from "./contract.js";
import { getWalletAddress } from "./wallet.js";

const claimMintPass = async () => {
    const wallet = await getWalletAddress();
    const tx = contract.methods.claim(1);
    const txData = {
        from: wallet
    }
    const estimatedGas = await tx.estimateGas(txData);
    console.log(estimatedGas)
    await tx.send({...txData, gasLimit: estimatedGas + 5000}).then((r) => {
        console.log(r);
    })
};

export const insertClaimLink = () => {
    const claimButton = document.querySelector("#claim-mint-pass");
    if (claimButton) {
        claimButton.onclick = () => {
            claimMintPass();
        }
    }
}
