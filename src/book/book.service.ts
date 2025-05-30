import { TBookInsert } from './../drizzle/schema';


//Querying the databse

import { eq } from "drizzle-orm";
import db from "../drizzle/db"
import { bookTable } from "../drizzle/schema";

//Getting all books
export const getAllBooksService = async() => {
    return await db.query.bookTable.findMany();
};

//Getting a book by ID
export const getABookByIdService = async (bookId: number) => {
    return await db.query.bookTable.findFirst({
        where: eq(bookTable.bookId, bookId),
    });
};

//Creating a book
export const creatingABookService = async (book: TBookInsert): Promise<string> => {
    await db.insert(bookTable).values(book).returning();
    return "Book Created Succesfully";
}

//Updating a book
export const updatingABookService = async (bookId: number, book:TBookInsert): Promise<string> => {
    await db.update(bookTable).set(book).where(eq(bookTable.bookId, bookId));
    return "Book Updated Succesfully";
}

//Deleting a book
export const deletingABookByIdService = async (bookId: number) => {
  await db.delete(bookTable).where(eq(bookTable.bookId, bookId));
  return "Book Deleted Successfuly";
};
