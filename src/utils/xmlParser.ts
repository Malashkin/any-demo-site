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

            // Build description from params
            const params = offer.querySelectorAll('param');
            const paramTexts: string[] = [];
            params.forEach(param => {
                const name = param.getAttribute('name');
                const value = param.textContent;
                if (name && value) {
                    paramTexts.push(`${name}: ${value}`);
                }
            });
            const description = paramTexts.join(', ');

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
                    vendorCode
                });
            }
        });

        return products;
    } catch (error) {
        console.error('Error parsing XML feed:', error);
        return [];
    }
}
