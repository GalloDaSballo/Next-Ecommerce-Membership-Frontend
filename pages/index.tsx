import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import APIServerClient from "../api/APIServerClient";
import { Product, Products } from "../api/interfaces";
import styles from "../styles/Index.module.scss";
import { fromImageToUrl } from "../utils/networks";

export const HomePage: React.FC<{ products: Products }> = ({ products }) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Entreprenerd Store</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h2>Purchase Products here</h2>
            {products.map((product: Product) => (
                <Link href={`/product/${product.slug}`}>
                    <a>
                        <h2 key={product.name}>
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
    const { data: products } = await APIServerClient.fetchProducts();
    return {
        props: {
            products,
        },
    };
};
