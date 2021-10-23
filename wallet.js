export const web3 = new Web3(ethereum);

const isMetaMaskConnected = async () => {
    let accounts = await web3.eth.getAccounts();
    return accounts.length > 0;
}

export const getWalletAddress = async () => {
    const currentAddress = async () => (
        ethereum.selectedAddress ?? await web3.eth.getAccounts()[0]
    );
    if (!await currentAddress()) {
        await connectMetaMask();
    }
    return await currentAddress();
}

export const getCurrentNetwork = async () => {
    return Number(await ethereum.request({ method: 'net_version' }));
}

export const updateMetaMaskStatus = () => {
    isMetaMaskConnected().then((connected) => {
        let button = document.querySelector('#connect');
        if (connected) {
            button.textContent = "MetaMask connected";
        }
    });
}

export const connectMetaMask = async () => {
    if (await isMetaMaskConnected() === false) {
        await ethereum.enable();
        await updateMetaMaskStatus();
    }
}

updateMetaMaskStatus();
document.querySelector(window.buttonID ?? '#connect').addEventListener('click', connectMetaMask);
