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
    tx.send({...txData, gasLimit: estimatedGas + 5000})
      .catch((e) => {
            if (e.code !== 4001) {
                alert(`Error ${e.message}. Please try refreshing page, check your MetaMask connection or contact us to resolve`);
                console.log(e);
            }
      })
      .then((r) => {
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
