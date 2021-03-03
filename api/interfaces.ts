export interface Image {
    url: string;
    alternativeTitle: string;
}

export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    download: string;
    slug: string;
    image: Image;
}

export type Products = Product[];

export interface Order {
    id: string;
    status: string;
    product: Product;
}
