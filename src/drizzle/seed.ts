import db from "./db";
import { bookTable } from "./schema";


async function seed(){
    console.log("=====Seeding Starting====");
    const [book1] = await db.insert(bookTable).values({
        bookTittle: "The Hobbit",
        bookAuthorName: "Peneloppe",
        publishedYear: 2001,
        bookGenre: "Adventure"
    }).returning();

    const [book2] = await db.insert(bookTable).values({
        bookTittle: "The Gambler",
        bookAuthorName: "DevinKrap",
        publishedYear: 1996,
        bookGenre: "Finance"
    }).returning();
    console.log("=====Seeding Starting====");
    process.exit(0);
};

seed().catch((e)=>{
    console.log("Error Seeding: ",e);
    process.exit(1);
})