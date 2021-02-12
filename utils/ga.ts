/** Credits: https://github.com/vercel/next.js/blob/canary/examples/with-react-ga/utils/analytics.js */
import ReactGA from "react-ga";
import { getConsent } from "./cookieConsent";

export const handleConsent = () => {
    window[`ga-disable-${process.env.NEXT_PUBLIC_GA}`] = true;
    if (getConsent()) {
        window[`ga-disable-${process.env.NEXT_PUBLIC_GA}`] = false;
    }
};

export const initGA = (): void => {
    ReactGA.initialize(process.env.NEXT_PUBLIC_GA);
};

export const logPageView = (): void => {
    handleConsent();
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
};
