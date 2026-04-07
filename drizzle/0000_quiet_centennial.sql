CREATE TYPE "public"."product_status" AS ENUM('pending', 'approved', 'rejected');--> statement-breakpoint
CREATE TABLE "products" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"slug" varchar(255) NOT NULL,
	"tagline" varchar(255),
	"description" text,
	"website_url" varchar(500),
	"tags" text[] NOT NULL,
	"vote_count" integer DEFAULT 0,
	"status" "product_status" DEFAULT 'pending',
	"submitted_by" varchar(255) DEFAULT 'anonymous',
	"user_id" integer NOT NULL,
	"organized_id" integer,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	"approved_at" timestamp,
	CONSTRAINT "products_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"age" integer NOT NULL,
	"email" varchar(255) NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
ALTER TABLE "products" ADD CONSTRAINT "products_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "slug_idx" ON "products" USING btree ("slug");--> statement-breakpoint
CREATE INDEX "user_idx" ON "products" USING btree ("user_id");