import { z } from "zod/v4";

export const BookValidator = z.object({
  bookId: z.number().optional(),
  bookTittle: z.string().min(5).max(100).trim(),
  bookAuthorName: z.string().min(5).max(100).trim(),
  publishedYear: z.number(),
  bookGenre: z.string().min(5).max(100).trim(),
});
