/* eslint-disable react/jsx-props-no-spreading */
import { AppProps } from "next/dist/next-server/lib/router/router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { UserContextProvider } from "../context/UserContext";

import "../styles/global.scss";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <UserContextProvider>
            <Header />
            <Component {...pageProps} />
            <Footer />
        </UserContextProvider>
    );
};

export default MyApp;
