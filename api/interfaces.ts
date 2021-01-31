/* eslint-disable camelcase */
export interface Product {
    name: string;
    description: string;
    price: number;
    download: string;
    image: {
        url: string;
        alternativeTitle: string;
    };
}

export type Products = Product[];
