import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import APIServerClient from "../api/APIServerClient";
import { Product, Products } from "../api/interfaces";
import styles from "../styles/Index.module.scss";
import { fromImageToUrl } from "../utils/urls";

export const HomePage: React.FC<{ products: Products }> = ({ products }) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Entreprenerd Store</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h2>Purchase Products here</h2>
            {products.map((product: Product) => (
                <Link href={`/product/${product.slug}`} key={product.name}>
                    <a>
                        <h2>
                            <Image
                                layout="responsive"
                                width={500}
                                height={283}
                                src={fromImageToUrl(product.image)}
                            />
                            {product.name}
                        </h2>
                    </a>
                </Link>
            ))}

            <p>Else show buy (Stripe Checkout flow)</p>
            <p>
                Orders page should show list of products the user has purchased
            </p>
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
