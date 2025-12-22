export interface Product {
    id: string;
    name: string;
    price: number;
    oldPrice?: number;
    image?: string;
    description?: string;
    vendor?: string;
    categoryId?: string;
    url?: string;
    vendorCode?: string;
}
