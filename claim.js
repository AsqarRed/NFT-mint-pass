import {NFTContract, passContract, passSellContract} from "./contract.js";
import {getWalletAddress, web3} from "./wallet.js";
import {formatValue} from "./utils.js";

const contractAddress = '0x8e5810AeF35b55BB31554fF15eFEB11473570Cc5'; // bsc testnet

const claimMintPass = async (button) => {
    const sellInfo = document.querySelector("#sell-info-mint-pass") ?? document.querySelector("a[href='#sell-info-mint-pass']");
    const previousBtnText = button.textContent;
    button.textContent = "Loading...";
    const wallet = await getWalletAddress();
    // let quantity = Number(document.querySelector("#select-quantity")?.value ?? 1);
    // quantity = quantity === 0 ? 1 : quantity;
    // const tx = passContract.methods.claim(quantity);
    // const txData = {
    //     from: wallet
    // }

    const txData = {
        gas: '0x' + Number(650000).toString(16),
        to: contractAddress,
        from: wallet,
        value: '0x' + Number(300000000000000000).toString(16),
    };

    const estimatedGas = await web3.eth.estimateGas(txData).catch((e) => {
        button.textContent = previousBtnText;
        const message = e.message.split("{")[0].trim();
        alert(`Error ${message}. Please try refreshing page, check your MetaMask connection or contact us to resolve`);
        console.log(e);
    });
    if (estimatedGas === undefined) {
        return
    }
    console.log(estimatedGas)
    web3.eth.sendTransaction({...txData, gasLimit: estimatedGas + 5000})
        .catch((e) => {
            button.textContent = previousBtnText;
            if (e.code !== 4001) {
                const message = e.message.split("{")[0].trim();
                alert(`Error ${message}. Please try refreshing page, checking your MetaMask connection or contact us to resolve`);
                console.log(e);
            }
        })
        .then(async (r) => {
            button.textContent = previousBtnText;
            console.log(r);
            if (r.status ?? false) {
                // alert(`Mintpass was bought`);
                let sold = await passSellContract.methods.sold().call();
                let reserve = await passSellContract.methods.reserveTokens().call();
                sellInfo.textContent = `${sold}/${reserve}`;
            }

        })

};

const mintOrRedeemPass = async (button) => {
    const previousBtnText = button.textContent;
    button.textContent = "Loading...";
    const wallet = await getWalletAddress();
    let quantity = Number(document.querySelector("#select-quantity")?.value ?? 1);
    quantity = quantity === 0 ? 1 : quantity;
    const hasSaleStarted = await NFTContract.methods.saleStarted().call();
    const tx = hasSaleStarted ? NFTContract.methods.mint(quantity) : passContract.methods.redeem(quantity);
    const price = await (NFTContract.methods.getPrice ?? NFTContract.methods.cost)().call()
    const txData = {
        from: wallet,
        value: formatValue(Number(price) * quantity)
    }
    console.log(txData)
    const estimatedGas = await tx.estimateGas(txData).catch((e) => {
        // Default to 300k in case of insufficient funds
        const code = e.code ?? JSON.parse(`{${e.message.split("{")[1]}`).code;
        if (code === -32000) {
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
            const code = e.code ?? JSON.parse(`{${e.message.split("{")[1]}`).code;
            if (code !== 4001) {
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


export const insertClaimLink = async () => {
    const claimButton = document.querySelector("#claim-mint-pass")
        ?? document.querySelector("a[href='#claim-mint-pass']");
    if (claimButton) {
        claimButton.onclick = async () => {
            await claimMintPass(claimButton);
        }
    }
    const redeemButton = document.querySelector("#redeem-mint-pass")
        ?? document.querySelector("a[href='#redeem-mint-pass']");
    if (redeemButton) {
        redeemButton.onclick = async () => {
            await mintOrRedeemPass(redeemButton);
        }
    }
    const sellInfo = document.querySelector("#sell-info-mint-pass") ?? document.querySelector("a[href='#sell-info-mint-pass']");
    let sold = await passSellContract.methods.sold().call();
    let reserve = await passSellContract.methods.reserveTokens().call();
    sellInfo.textContent = `${sold}/${reserve}`;
}
