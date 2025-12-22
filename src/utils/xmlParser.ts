import type { Product } from '../types/Product';

export async function parseXMLFeed(xmlUrl: string): Promise<Product[]> {
    try {
        const response = await fetch(xmlUrl);
        const xmlText = await response.text();

        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, 'text/xml');

        const offers = xmlDoc.querySelectorAll('offer');
        const products: Product[] = [];

        offers.forEach((offer) => {
            const id = offer.getAttribute('id') || '';
            const name = offer.querySelector('name')?.textContent || '';
            const price = parseFloat(offer.querySelector('price')?.textContent || '0');
            const oldPrice = offer.querySelector('oldprice')?.textContent
                ? parseFloat(offer.querySelector('oldprice')!.textContent!)
                : undefined;
            const image = offer.querySelector('picture')?.textContent || undefined;
            const vendor = offer.querySelector('vendor')?.textContent || undefined;
            const categoryId = offer.querySelector('categoryId')?.textContent || undefined;
            const url = offer.querySelector('url')?.textContent || undefined;
            const vendorCode = offer.querySelector('vendorCode')?.textContent || undefined;

            // Extract params as separate items
            const paramElements = offer.querySelectorAll('param');
            const params: { name: string; value: string }[] = [];
            paramElements.forEach(param => {
                const name = param.getAttribute('name');
                const value = param.textContent;
                if (name && value) {
                    params.push({ name, value });
                }
            });

            // Description can be empty or from a specific field if exists
            const description = offer.querySelector('description')?.textContent || undefined;

            if (id && name) {
                products.push({
                    id,
                    name,
                    price,
                    oldPrice,
                    image,
                    description,
                    vendor,
                    categoryId,
                    url,
                    vendorCode,
                    params: params.length > 0 ? params : undefined
                });
            }
        });

        return products;
    } catch (error) {
        console.error('Error parsing XML feed:', error);
        return [];
    }
}
