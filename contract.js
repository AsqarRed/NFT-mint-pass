import { ALLOWED_NETWORKS, AMEEGOS_PASS_CONTRACT } from './contracts/ameegos.js';
import { getCurrentNetwork, web3 } from './wallet.js';

const currentNetwork = await getCurrentNetwork();
if (!ALLOWED_NETWORKS.includes(currentNetwork)) {
    alert("You're on the wrong network. Please try switching to mainnet or Rinkeby, and refresh the page")
}

export let address;
export let abi;

if (window?.passContract?.websiteURL?.includes(window.location.hostname)) {
    address = window.passContract.address;
    abi = window.passContract.abi;
} else if (window.location.hostname.includes('ameegos.io')) {
    address = AMEEGOS_PASS_CONTRACT[currentNetwork].address;
    abi = AMEEGOS_PASS_CONTRACT[currentNetwork].abi;
}

export const contract = new web3.eth.Contract(abi, address);
window.contract = contract;
