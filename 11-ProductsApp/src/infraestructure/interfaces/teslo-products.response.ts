
export interface TesloProduct {
    id:          string;
    title:       string;
    price:       number;
    description: string;
    slug:        string;
    stock:       number;
    sizes:       Size[];
    gender:      string;
    tags:        Tag[];
    images:      string[];
    user:        TesloUser;
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

export interface TesloUser {
    id:       string;
    email:    string;
    fullName: string;
    isActive: boolean;
    roles:    string[];
}
