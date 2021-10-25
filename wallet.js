export const web3 = new Web3(ethereum);

const isMetamaskConnected = () => {
    return ethereum.selectedAddress !== null;
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

export const updateMetamaskStatus = () => {
    const connected = isMetamaskConnected()
    if (connected) {
        const button = document.querySelector(window.buttonID ?? '#connect');
        button.textContent = "Metamask connected";
    }
}

export const connectMetamask = async () => {
    const isMobile = /Mobi/i.test(window.navigator.userAgent)
    alert(`isMobile: ${isMobile}`)
    if (window.ethereum) {
        await ethereum.request({ method: 'eth_requestAccounts' });
        updateMetamaskStatus();
    } else if (isMobile) {
        alert("Please use MetaMask app")
        window.open(`https://metamask.app.link/dapp/${window.location.href.replace("https://", "")}`)
    }
}

updateMetamaskStatus();
document.querySelector(window.buttonID ?? '#connect').addEventListener('click', connectMetamask);
