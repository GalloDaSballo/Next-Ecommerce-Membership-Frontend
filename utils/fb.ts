/** Credits: https://github.com/vercel/next.js/blob/canary/examples/with-facebook-pixel/lib/fpixel.js */
import { getConsent } from "./cookieConsent";

export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB;

export const handleConsent = (): void => {
    window.fbq("consent", "revoke");
    if (getConsent()) {
        window.fbq("consent", "grant");
    }
};

export const pageview = (): void => {
    handleConsent();
    window.fbq("track", "PageView");
};

// https://developers.facebook.com/docs/facebook-pixel/advanced/
export const event = (name: string, options: any = {}): void => {
    handleConsent();
    window.fbq("track", name, options);
};
