import Axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { Products } from "./interfaces";

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

    public fetchMyProducts(
        authToken: string,
    ): Promise<AxiosResponse<Products>> {
        return this.axios({
            method: "GET",
            url: "/membership-light/products",
            headers: { authorization: `Bearer ${authToken}` },
        });
    }
}

export default APIClient;
