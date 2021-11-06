import {AMEEGOS_NFT_CONTRACT, AMEEGOS_PASS_CONTRACT} from "./ameegos.js";
import {METOSHI_PASS_CONTRACT} from "./meetoshi.js";

export const CONTRACTS = {
    'ameegos.io': {
        nft: AMEEGOS_NFT_CONTRACT,
        pass: AMEEGOS_PASS_CONTRACT,
    },
    'metoshi.com': {
        pass: METOSHI_PASS_CONTRACT,
    }
}
