Sentry.init({
    dsn: "https://bc944dd29060483e8e84a40fe22fffad@o1050370.ingest.sentry.io/6031616",
    integrations: [],

    // We recommend adjusting this value in production, or using tracesSampler
    // for finer control
    tracesSampleRate: 1.0,
});

import { insertClaimLink } from "./claim.js";

insertClaimLink();
