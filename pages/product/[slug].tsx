import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import Image from "next/image";
import APIServerClient from "../../api/APIServerClient";
import styles from "../../styles/SingleProductPage.module.scss";
import ProductButton from "../../components/ProductButton";

import { Product } from "../../api/interfaces";

export const SingleProductPage: React.FC<{
    product: Product;
}> = ({ product }) => (
    <div className={styles.container}>
        <Head>
            <title>Entreprenerd Store</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <h3>{product.name}</h3>
        <ProductButton product={product} />
    </div>
);

export const getStaticProps: GetStaticProps = async ({
    params,
}: {
    params: { slug: string };
}) => {
    return APIServerClient.fetchProduct(params.slug).then(({ data }) => ({
        props: { product: data[0] },
    }));
};

export const getStaticPaths: GetStaticPaths = async () => {
    return APIServerClient.fetchProducts().then(({ data }) => ({
        paths: data.map((product) => ({
            params: { slug: product.slug },
        })),
        fallback: false,
    }));
};

export default SingleProductPage;
