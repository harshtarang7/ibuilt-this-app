import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { productsTable, usersTable } from "./schema";
import { allProducts } from "@/lib/allProducts";

const db = drizzle(process.env.DATABASE_URL!);

async function main() {
    console.log(" Seeding DB...");

    await db.delete(productsTable);
    await db.delete(usersTable);

    const [user] = await db
        .insert(usersTable)
        .values({
            name: "Tarang",
            age: 25,
            email: "tarang@example.com",
        })
        .returning();

    await db.insert(productsTable).values(
        allProducts.map((product) => ({
            ...product,
            userId: user.id,
            createdAt: product.createdAt ?? new Date(),
            updatedAt: new Date(),
        }))
    );

    console.log(" Products seeded");
}

main().catch(console.error);