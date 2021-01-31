import { GetStaticProps } from "next";
import Head from "next/head";
import APIServerClient from "../api/APIServerClient";
import { Product, Products } from "../api/interfaces";
import styles from "../styles/Index.module.scss";

export const HomePage = ({ products }: { products: Products }): JSX.Element => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Entreprenerd Store</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h2>Purchase Products here</h2>
            {products.map((product: Product) => (
                <h2 key={product.name}>{product.name}</h2>
            ))}
            <p>Do single product page (static)</p>
            <p>In page, have button with authenticated request</p>
            <p>
                If product is available it will show download, then show
                download
            </p>
            <p>Else show buy (Stripe Checkout flow)</p>
            <p>
                Orders page should show list of products the user can purchase
            </p>
        </div>
    );
};

export default HomePage;

export const getStaticProps: GetStaticProps = async () => {
    return APIServerClient.fetchProducts().then(({ data }) => ({
        props: {
            products: data,
        },
    }));
};
