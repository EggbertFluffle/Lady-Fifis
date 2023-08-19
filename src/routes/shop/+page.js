/** @type {import('./$types').PageLoad} */
import products from "$lib/products.json";

export async function load() {
    return products;
};