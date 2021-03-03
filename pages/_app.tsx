/* eslint-disable react/jsx-props-no-spreading */
import { AppProps } from "next/dist/next-server/lib/router/router";
import { useEffect } from "react";
import { useRouter } from "next/router";
import CookieConsent from "react-cookie-consent";
import { initGA, logPageView } from "../utils/ga";
import * as fbq from "../utils/fb";

import { UserContextProvider } from "../context/UserContext";

import "../styles/global.scss";
import { COOKIE_CONSENT } from "../utils/cookieConsent";
import Layout from "../components/Layout";
/**
 * All tracking stuff on page change
 */
const handleRouteChange = () => {
    fbq.pageview();
    logPageView();
};

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    const router = useRouter();

    const initTracking = () => {
        initGA();
        // `routeChangeComplete` won't run for the first page load unless the query string is
        // hydrated later on, so here we log a page view if this is the first render and
        // there's no query string
        if (!router.asPath.includes("?")) {
            logPageView();
        }
        // First Pixel Ping
        fbq.pageview();
    };

    /** Credits: https://github.com/vercel/next.js/blob/canary/examples/with-react-ga/utils/analytics.js */
    /** Also credits: https://github.com/vercel/next.js/blob/canary/examples/with-facebook-pixel/components/FacebookPixel.js */
    useEffect(() => {
        initTracking();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        // Listen for page changes after a navigation or when the query changes
        router.events.on("routeChangeComplete", handleRouteChange);
        return () => {
            router.events.off("routeChangeComplete", handleRouteChange);
        };
    }, [router.events]);

    return (
        <UserContextProvider>
            <Layout>
                {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                <Component {...pageProps} />
                <CookieConsent
                    cookieName={COOKIE_CONSENT}
                    onAccept={initTracking}
                >
                    This website uses cookies to enhance the user experience.
                </CookieConsent>
            </Layout>
        </UserContextProvider>
    );
};

export default MyApp;
