
export interface Product {
    id:          string;
    title:       string;
    price:       number;
    description: string;
    slug:        string;
    stock:       number;
    sizes:       Size[];
    gender:      Gender[];
    tags:        Tag[];
    images:      string[];
}

export enum Gender {
    Kid = 'Kid',
    Men = 'Men',
    Women = 'Women',
    Unisex = 'Unisex',
}

export enum Size {
    L = "L",
    M = "M",
    S = "S",
    Xl = "XL",
    Xs = "XS",
    Xxl = "XXL",
}

export enum Tag {
    Hoodie = "hoodie",
    Jacket = "jacket",
    Shirt = "shirt",
}