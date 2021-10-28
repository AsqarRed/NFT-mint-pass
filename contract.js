import {
    ALLOWED_NETWORKS,
    AMEEGOS_NFT_CONTRACT,
    AMEEGOS_PASS_CONTRACT
} from './contracts/ameegos.js';
import { getCurrentNetwork, web3 } from './wallet.js';

export let NFTContract;
export let passContract;

const initContract = async (contract) => {
    const currentNetwork = await getCurrentNetwork();
    if (!ALLOWED_NETWORKS.includes(currentNetwork)) {
        alert("You're on the wrong network. Please try switching to mainnet or Rinkeby, and refresh the page")
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
