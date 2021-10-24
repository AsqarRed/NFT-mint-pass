export const web3 = new Web3(ethereum);

const isMetaMaskConnected = async () => {
    let accounts = await web3.eth.getAccounts();
    const isConnected = ethereum.selectedAddress !== undefined || accounts.length > 0;
    if (isDebugMode()) {
        alert(`CHECKED IS_CONNECTED: ${isConnected}`)
    }
    return isConnected
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

const isDebugMode = () => {
    return window.location.href.includes("mint-pass-debug")
}

export const updateMetaMaskStatus = () => {
    isMetaMaskConnected().then((connected) => {
        if (isDebugMode()) {
            alert(`METAMASK STATUS: CONNECTED ${connected}`)
        }
        let button = document.querySelector('#connect');
        if (connected) {
            button.textContent = "MetaMask connected";
        }
    });
}

export const connectMetaMask = async () => {
    if (isDebugMode()) {
        alert(`CALLED CONNECT METAMASK`)
    }
    if (await isMetaMaskConnected() === false) {
        await ethereum.enable();
        if (isDebugMode()) {
            alert(`ENABLED ETH OBJECT`)
        }
        await updateMetaMaskStatus();
    }
}

updateMetaMaskStatus();
document.querySelector(window.buttonID ?? '#connect').addEventListener('click', connectMetaMask);
