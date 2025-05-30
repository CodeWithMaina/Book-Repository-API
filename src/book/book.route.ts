import { Router } from "express";
import { createABookController, deletingABookController, getABookByIdController, getAllBooksController, updateABookController } from "./book.controller";


//Create an instance of express route
export const bookRouter = Router();


//Getting books routes
bookRouter.get('/books', getAllBooksController);

//Getting a book route
bookRouter.get('/book/:id', getABookByIdController);

//Creating a book
bookRouter.post('/book', createABookController);

//Updating a book
bookRouter.put('/book/:id', updateABookController);

//Deleting a book
bookRouter.delete('/book/:id', deletingABookController);