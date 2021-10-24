Sentry.init({
    dsn: "https://bc944dd29060483e8e84a40fe22fffad@o1050370.ingest.sentry.io/6031616",
    integrations: [new Integrations.BrowserTracing()],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
});

import { insertClaimLink } from "./claim.js";

insertClaimLink();
