/* eslint-disable camelcase */
export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    download: string;
    slug: string;
    image: {
        url: string;
        alternativeTitle: string;
    };
}

export type Products = Product[];
