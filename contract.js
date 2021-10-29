import {
    getAllowedNetworks,
    AMEEGOS_NFT_CONTRACT,
    AMEEGOS_PASS_CONTRACT
} from './contracts/ameegos.js';
import {getCurrentNetwork, switchNetwork, web3} from './wallet.js';

export let NFTContract;
export let passContract;

const initContract = async (contract) => {
    if (!contract.allowedURLs.some(v => window.location.href.includes(v))) {
        return undefined;
    }
    let currentNetwork = await getCurrentNetwork();
    if (!getAllowedNetworks(contract).includes(currentNetwork)) {
        await switchNetwork(getAllowedNetworks(contract)[0])
        currentNetwork = await getCurrentNetwork();
    }
    const address = contract.address[currentNetwork];
    const abi = contract.abi;
    return new web3.eth.Contract(abi, address);
}

export const setContracts = async () => {
    NFTContract = await initContract(AMEEGOS_NFT_CONTRACT);
    passContract = await initContract(AMEEGOS_PASS_CONTRACT);
    window.passContract = passContract;
    window.NFTContract = NFTContract;
}
