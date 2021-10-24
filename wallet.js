export const web3 = new Web3(ethereum);

const isMetamaskConnected = () => {
    const isConnected = ethereum.selectedAddress !== null;
    if (isDebugMode()) {
        alert(`CHECKED IS_CONNECTED: ${isConnected}`)
    }
    return isConnected;
}

export const getWalletAddress = async () => {
    const currentAddress = async () => (
        ethereum.selectedAddress ?? await ethereum.request({ method: 'eth_requestAccounts' })[0]
    );
    if (!await currentAddress()) {
        await connectMetamask();
    }
    return await currentAddress();
}

export const getCurrentNetwork = async () => {
    return Number(await ethereum.request({ method: 'net_version' }));
}

const isDebugMode = () => {
    return window.location.href.includes("mint-pass-debug")
}

export const updateMetamaskStatus = () => {
    const connected = isMetamaskConnected()
    if (isDebugMode()) {
        alert(`METAMASK STATUS: CONNECTED ${connected}`)
    }
    if (connected) {
        const button = document.querySelector('#connect');
        button.textContent = "MetaMask connected";
    }
}

export const connectMetamask = async () => {
    if (isDebugMode()) {
        alert(`CALLED CONNECT METAMASK`)
    }
    await ethereum.request({ method: 'eth_requestAccounts' });
    updateMetamaskStatus();
}

updateMetamaskStatus();
document.querySelector(window.buttonID ?? '#connect').addEventListener('click', connectMetamask);
