import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import APIServerClient from "../api/APIServerClient";
import { Product, Products } from "../api/interfaces";
import styles from "../styles/Index.module.scss";
import { fromImageToUrl } from "../utils/urls";
import formatPrice from "../utils/formatPrice";

export const HomePage: React.FC<{ products: Products }> = ({ products }) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Entreprenerd Store</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles.grid}>
                {products.map((product: Product) => (
                    <Link href={`/product/${product.slug}`} key={product.name}>
                        <a>
                            <div className={styles.product}>
                                <Image
                                    layout="responsive"
                                    width={500}
                                    height={283}
                                    src={fromImageToUrl(product.image)}
                                />
                                <div className={styles.productContent}>
                                    <h2>{product.name}</h2>
                                    <p>{formatPrice(product.price)}</p>
                                    <button>More Info</button>
                                </div>
                            </div>
                        </a>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default HomePage;

export const getStaticProps: GetStaticProps = async () => {
    const { data: products } = await APIServerClient.fetchProducts();
    return {
        props: {
            products,
        },
    };
};
