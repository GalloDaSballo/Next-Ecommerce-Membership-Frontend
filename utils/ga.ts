/** Credits: https://github.com/vercel/next.js/blob/canary/examples/with-react-ga/utils/analytics.js */
import ReactGA from "react-ga";

export const initGA = () => {
    ReactGA.initialize(process.env.NEXT_PUBLIC_GA);
};

export const logPageView = () => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
};
