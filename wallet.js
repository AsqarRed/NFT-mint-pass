export const web3 = new Web3(ethereum);

const isMetamaskConnected = () => {
    return ethereum.selectedAddress !== null;
}

export const getWalletAddress = async () => {
    return ethereum.selectedAddress ?? await ethereum.request({ method: 'eth_requestAccounts' })[0];
}

export const getCurrentNetwork = async () => {
    return Number(await ethereum.request({ method: 'net_version' }));
}

export const updateMetamaskStatus = () => {
    const connected = isMetamaskConnected()
    if (connected) {
        const button = document.querySelector(window.buttonID ?? '#connect');
        button.textContent = "Metamask connected";
    }
}

export const connectMetamask = async () => {
    await ethereum.request({ method: 'eth_requestAccounts' });
    updateMetamaskStatus();
}

updateMetamaskStatus();
document.querySelector(window.buttonID ?? '#connect').addEventListener('click', connectMetamask);
