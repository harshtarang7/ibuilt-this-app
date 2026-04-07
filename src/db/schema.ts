import { integer, pgTable, varchar, serial, text, timestamp, pgEnum, index } from "drizzle-orm/pg-core";

export interface Product {
    id: number;
    name: string;
    slug: string;
    tagline?: string;
    description?: string;
    websiteUrl?: string;
    tags: string[];
    voteCount: number;
    createdAt: Date;
    updatedAt: Date;
    approvedAt?: Date;
    status: "pending" | "approved" | "rejected";
    submittedBy: string;
    userId: number;
    organizedId?: number;
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
},

    (table) => ({
        slugIdx: index("slug_idx").on(table.slug),
        userIdx: index("user_idx").on(table.userId),
    }));
