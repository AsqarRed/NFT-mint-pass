import { passContract, NFTContract } from "./contract.js";
import { getWalletAddress } from "./wallet.js";

const claimMintPass = async (button) => {
    const previousBtnText = button.textContent;
    button.textContent = "Loading...";
    const wallet = await getWalletAddress();
    let quantity = Number(document.querySelector("#select-quantity")?.value ?? 1);
    quantity = quantity === 0 ? 1 : quantity;
    const tx = passContract.methods.claim(quantity);
    const txData = {
        from: wallet
    }
    const estimatedGas = await tx.estimateGas(txData).catch((e) => {
        button.textContent = previousBtnText;
        const message = e.message.split("{")[0].trim();
        alert(`Error ${message}. Please try refreshing page, check your MetaMask connection or contact us to resolve`);
        console.log(e);
    });
    if (estimatedGas === undefined) {
        return
    }
    console.log(estimatedGas)
    tx.send({...txData, gasLimit: estimatedGas + 5000})
      .catch((e) => {
          button.textContent = previousBtnText;
          if (e.code !== 4001) {
            const message = e.message.split("{")[0].trim();
            alert(`Error ${message}. Please try refreshing page, checking your MetaMask connection or contact us to resolve`);
            console.log(e);
          }
      })
      .then((r) => {
          button.textContent = previousBtnText;
          console.log(r);
      })

};

const redeemMintPass = async (button) => {
    const previousBtnText = button.textContent;
    button.textContent = "Loading...";
    const wallet = await getWalletAddress();
    let quantity = Number(document.querySelector("#select-quantity")?.value ?? 1);
    quantity = quantity === 0 ? 1 : quantity;
    const tx = passContract.methods.redeem(quantity);
    const price = await (NFTContract.methods.getPrice ?? NFTContract.methods.cost)().call()
    const txData = {
        from: wallet,
        value: String(Number(price) * quantity)
    }
    console.log(txData)
    const estimatedGas = await tx.estimateGas(txData).catch((e) => {
        // Default to 300k in case of insufficient funds
        if (e.code === -32000) {
            return 300000;
        }
        button.textContent = previousBtnText;
        const message = e.message.split("{")[0].trim();
        alert(`Error ${message}. Please try refreshing page, check your MetaMask connection or contact us to resolve`);
        console.log(e);
    });
    if (estimatedGas === undefined) {
        return
    }
    console.log(estimatedGas)
    tx.send({...txData, gasLimit: estimatedGas + 5000})
        .catch((e) => {
            button.textContent = previousBtnText;
            if (e.code !== 4001) {
                const message = e.message.split("{")[0].trim();
                alert(`Error ${message}. Please try refreshing page, checking your MetaMask connection or contact us to resolve`);
                console.log(e);
            }
        })
        .then((r) => {
            button.textContent = previousBtnText;
            console.log(r);
        })
};

export const insertClaimLink = () => {
    const claimButton = document.querySelector("#claim-mint-pass");
    if (claimButton) {
        claimButton.onclick = async () => {
            await claimMintPass(claimButton);
        }
    }
    const redeemButton = document.querySelector("#redeem-mint-pass");
    if (redeemButton) {
        redeemButton.onclick = async () => {
            await redeemMintPass(redeemButton);
        }
    }
}
