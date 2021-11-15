import {AMEEGOS_NFT_CONTRACT, AMEEGOS_PASS_CONTRACT} from "./ameegos.js";
import {METOSHI_PASS_CONTRACT} from "./meetoshi.js";
import {METOSHI_PASS_CONTRACT_V2} from "./meetoshiV2.js";

export const CONTRACTS = {
    'ameegos.io': {
        nft: AMEEGOS_NFT_CONTRACT,
        pass: AMEEGOS_PASS_CONTRACT,
    },
    'metoshi.com': {
        pass: METOSHI_PASS_CONTRACT,
        passV2: METOSHI_PASS_CONTRACT_V2,
    }
}
