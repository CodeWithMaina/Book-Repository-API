CREATE TABLE "bookTable" (
	"bookId" serial PRIMARY KEY NOT NULL,
	"bookTittle" text,
	"bookAuthorName" varchar,
	"publishedYear" integer,
	"bookGenre" text
);
