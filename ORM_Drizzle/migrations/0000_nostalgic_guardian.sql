CREATE TABLE "courses_table" (
	"course_id" serial PRIMARY KEY NOT NULL,
	"course_name" text NOT NULL,
	"semester" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "users_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"age" integer NOT NULL,
	"email" text NOT NULL,
	CONSTRAINT "users_table_email_unique" UNIQUE("email")
);
