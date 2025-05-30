import { text } from "drizzle-orm/pg-core";
import { integer } from "drizzle-orm/pg-core";
import { varchar } from "drizzle-orm/pg-core";
import { serial } from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core";


export const bookTable = pgTable("bookTable", {
    bookId: serial().primaryKey().notNull(),
    bookTittle: text(),
    bookAuthorName: varchar(),
    publishedYear: integer(),
    bookGenre: text()
})

export type TBookInsert = typeof bookTable.$inferInsert;
export type TBookSelect =  typeof bookTable.$inferSelect;