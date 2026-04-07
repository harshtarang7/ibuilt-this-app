import { db } from "@/db";
import { productsTable } from "@/db/schema";

export default async function getFeaturedProducts() {
    const products = await db.select().
        from(productsTable);

    return products;
}
