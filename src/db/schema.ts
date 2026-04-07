import { integer, pgTable, varchar, serial, text, timestamp, pgEnum, index, boolean } from "drizzle-orm/pg-core";

export interface Product {
    id: number;
    name: string | null;
    slug: string | null;
    tagline?: string | null;
    description?: string | null;
    websiteUrl?: string | null;
    tags: string[] | null;
    voteCount: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    approvedAt?: Date | null;
    status: "pending" | "approved" | "rejected" | null;
    submittedBy: string | null;
    userId: number | null;
    organizedId?: number | null;
    isFeatured: boolean | null;
}

export const productStatusEnum = pgEnum("product_status", [
    "pending",
    "approved",
    "rejected",
]);

export const usersTable = pgTable("users", {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 255 }).notNull(),
    age: integer("age").notNull(),
    email: varchar("email", { length: 255 }).notNull().unique(),
});


export const productsTable = pgTable("products", {
    id: serial("id").primaryKey(),

    name: varchar("name", { length: 255 }).notNull(),
    slug: varchar("slug", { length: 255 }).notNull().unique(),

    tagline: varchar("tagline", { length: 255 }),
    description: text("description"),

    websiteUrl: varchar("website_url", { length: 500 }),

    tags: text("tags").array().notNull(), // Postgres array

    voteCount: integer("vote_count").default(0),

    status: productStatusEnum("status").default("pending"),

    submittedBy: varchar("submitted_by", { length: 255 }).default('anonymous'),

    userId: integer("user_id")
        .notNull()
        .references(() => usersTable.id),

    organizedId: integer("organized_id"),

    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at").defaultNow(),

    approvedAt: timestamp("approved_at"),
    isFeatured: boolean("is_featured").default(false),
},

    (table) => ({
        slugIdx: index("slug_idx").on(table.slug),
        userIdx: index("user_idx").on(table.userId),
    }));
