import Axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { Order, Product, Products } from "./interfaces";

class APIClient {
    public axios: AxiosInstance;

    constructor(axiosConfig: AxiosRequestConfig) {
        this.axios = Axios.create(axiosConfig);
    }

    public fetchProducts(): Promise<AxiosResponse<Products>> {
        return this.axios({
            method: "GET",
            url: "/membership-light/products",
        });
    }

    public fetchProduct(slug: string): Promise<AxiosResponse<Products>> {
        return this.axios({
            method: "GET",
            url: `/membership-light/products/?slug=${slug}`,
        });
    }

    public fetchProductWithToken(
        slug: string,
        authToken: string,
    ): Promise<AxiosResponse<Products>> {
        return this.axios({
            method: "GET",
            url: `/membership-light/products?slug=${slug}`,
            headers: { authorization: `Bearer ${authToken}` },
        });
    }

    public fetchMyOrders(authToken: string): Promise<AxiosResponse<Order[]>> {
        return this.axios({
            method: "GET",
            url: "/orders",
            headers: { authorization: `Bearer ${authToken}` },
        });
    }

    /**
     * Retrieve the checkout token to pay for a given product
     * @param product
     * @param authToken
     */
    public fetchCheckoutToken(
        product: Product,
        authToken: string,
    ): Promise<AxiosResponse<{ id: string }>> {
        return this.axios({
            method: "POST",
            url: "/orders",
            headers: { authorization: `Bearer ${authToken}` },
            data: {
                product,
            },
        });
    }

    /**
     * Retrieve the checkout token to pay for a given product
     * @param product
     * @param authToken
     */
    public unlockProduct(
        checkoutSession: string,
        authToken: string,
    ): Promise<AxiosResponse<Order>> {
        return this.axios({
            method: "POST",
            url: "/orders/confirm",
            headers: { authorization: `Bearer ${authToken}` },
            data: {
                checkoutSession,
            },
        });
    }
}

export default APIClient;
