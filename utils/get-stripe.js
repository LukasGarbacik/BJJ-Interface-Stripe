import { loadStripe } from '@stripe/stripe-js';

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    const apiKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
    if (!apiKey) {
      throw new Error("NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not defined in the environment variables.");
    }
    stripePromise = loadStripe(apiKey);
  }
  return stripePromise;
};

export default getStripe;