import { getCurrentNetwork, switchNetwork, web3 } from './wallet.js';
import { CONTRACTS } from "./contracts/index.js";

export let NFTContract;
export let passContract;

const initContract = async (contract) => {
    if (!contract.allowedURLs.some(v => window.location.href.includes(v))) {
        return undefined;
    }
    let currentNetwork = await getCurrentNetwork();
    if (!contract.allowedNetworks.includes(currentNetwork)) {
        await switchNetwork(contract.allowedNetworks[0])
        currentNetwork = await getCurrentNetwork();
    }
    const address = contract.address[currentNetwork];
    const abi = contract.abi;
    return new web3.eth.Contract(abi, address);
}

export const setContracts = async () => {
    const hostname = window.location.hostname.replace('www.', '');
    NFTContract = await initContract(CONTRACTS[hostname].nft);
    passContract = await initContract(CONTRACTS[hostname].pass);
    window.passContract = passContract;
    window.NFTContract = NFTContract;
}

