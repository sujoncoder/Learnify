import "server-only";

import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2023-10-16",
  appInfo: {
    name: "Learnify",
  },
});

export { stripe };
