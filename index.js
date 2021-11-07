import { insertClaimLink } from "./claim.js";
import {updateConnectButton, updateMetamaskStatus} from "./wallet.js";
import { setContracts } from "./contract.js";

const init = async () => {
    updateConnectButton()
    await updateMetamaskStatus();
    await setContracts();
    insertClaimLink();

    try {
        Sentry.init({
            dsn: "https://bc944dd29060483e8e84a40fe22fffad@o1050370.ingest.sentry.io/6031616",
            integrations: [],

            // We recommend adjusting this value in production, or using tracesSampler
            // for finer control
            tracesSampleRate: 1.0,
        });
    } catch (e) {
        console.log(e)
    }
}

init()
