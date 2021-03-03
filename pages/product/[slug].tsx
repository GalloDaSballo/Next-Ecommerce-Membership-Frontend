import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import Image from "next/image";
import MarkdownRenderer from "react-markdown-renderer";
import APIServerClient from "../../api/APIServerClient";
import styles from "../../styles/SingleProductPage.module.scss";
import ProductButton from "../../components/ProductButton";

import { Product } from "../../api/interfaces";
import { fromImageToUrl } from "../../utils/urls";
import formatPrice from "../../utils/formatPrice";

export const SingleProductPage: React.FC<{
    product: Product;
}> = ({ product }) => (
    <div className={styles.container}>
        <Head>
            <title>Entreprenerd Store</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={styles.top}>
            <div className={styles.left}>
                <Image
                    layout="responsive"
                    width={500}
                    height={283}
                    src={fromImageToUrl(product.image)}
                />
            </div>
            <div className={styles.right}>
                <h3>{product.name}</h3>
                <p className={styles.price}>{formatPrice(product.price)}</p>
                <ProductButton product={product} />
            </div>
        </div>
        <div className={styles.content}>
            <MarkdownRenderer markdown={product.description} />
        </div>
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
