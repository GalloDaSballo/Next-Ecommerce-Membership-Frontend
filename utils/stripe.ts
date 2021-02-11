import { loadStripe } from "@stripe/stripe-js";
import APIWebClient from "../api/APIWebClient";
import { Product } from "../api/interfaces";
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_KEY ||
        "pk_test_51DJKn0AqlDYtGQmnlB5SRojLsEHeGuDOj2YHnHTHPERGKFO9ArtOkc23kDRPc2Wc98okHJhvXYaoBcuv7RNVrx7900HxaAvs3V",
);

export const handleStripePurchase = async (
    product: Product,
    authToken: string,
) => {
    // Get Stripe.js instance
    const stripe = await stripePromise;

    // Call your backend to create the Checkout Session
    const { data } = await APIWebClient.fetchCheckoutToken(product, authToken);

    // When the customer clicks on the button, redirect them to Checkout.
    const result = await stripe.redirectToCheckout({
        sessionId: data.id,
    });

    return result;
};
