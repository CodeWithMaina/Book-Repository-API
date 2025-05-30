import { Request, Response } from "express";
import {
  creatingABookService,
  deletingABookByIdService,
  getABookByIdService,
  getAllBooksService,
  updatingABookService,
} from "./book.service";
import { BookValidator } from "../validation/book.validation";

//Getting all books controller
export const getAllBooksController = async (req: Request, res: Response) => {
  try {
    const allBooks = await getAllBooksService();
    if (allBooks == null) {
      res.status(404).json({ message: "No Books Found" });
    } else {
      res.status(200).json(allBooks);
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message || "Error Fetching Books" });
  }
};

//Getting a book via an ID
export const getABookByIdController = async (req: Request, res: Response) => {
  try {
    const bookId = parseInt(req.params.id);
    const book = await getABookByIdService(bookId);
    if (book == null) {
      res.status(404).json({ message: "Your Books Does Not Exist" });
    } else {
      res.status(200).json({ message: book });
    }
  } catch (error: any) {
    res
      .status(500)
      .json({ error: error.message || "Error Fetching Your Book" });
  }
};

//Creating a book
export const createABookController = async (req: Request, res: Response) => {
  try {
    const validatedbook = BookValidator.safeParse(req.body); //return a true or false
    if (!validatedbook.success) {
      res.status(400).json({ error: validatedbook.error.issues });
      return;
    }
    const book = validatedbook.data;
    const newBook = await creatingABookService(book);
    if (newBook == null) {
      res.status(500).json({ message: "There is no book found" });
    } else {
      res.status(200).json({ message: newBook });
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message || "Failed to create a book" });
  }
};

//Updating a book
export const updateABookController = async (req: Request, res: Response) => {
  const bookId = parseInt(req.params.id);
  if (isNaN(bookId)) {
    res.status(400).json({ error: "Invalid Book ID" });
    return;
  }
  try {
    const validatedbook = BookValidator.safeParse(req.body);
    if (!validatedbook.success) {
      res.status(400).json({ error: validatedbook.error.issues });
      return;
    }
    const book = validatedbook.data;
    const updatedBook = updatingABookService(bookId, book);
    if (updatedBook == null) {
      res.status(404).json({ message: "Book not found or failed to update" });
    } else {
      res.status(200).json({ message: "Book updated successfully" });
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message || "Failed to update a book" });
  }
};

//Deleting A Book
export const deletingABookController = async (req: Request, res: Response) => {
  const bookId = parseInt(req.params.id);
  if (isNaN(bookId)) {
    res.status(404).json({ message: "Invalid Book ID" });
    return;
  }
  try {
    const deletedBook = await deletingABookByIdService(bookId); //returns true or false
    if (deletedBook) {
      res.status(200).json({ message: "Book deleted successfully" });
    } else {
      res.status(404).json({ message: "Book not found" });
    }
  } catch (error: any) {
    res
      .status(500)
      .json({ error: error.message || "Failed to delete the book" });
  }
};
