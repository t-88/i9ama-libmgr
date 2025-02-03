import { BooksTable } from "../../db/schema";
import db from "../db";
import * as TagsTableInterface from "./tags";
import * as BookTagsTableInterface from "./books_tags";
import { eq } from "drizzle-orm";


export async function insert(title, author, publish_year, tags) {
    const tags_ids = await TagsTableInterface.insertMany(tags);
    const book_id = (await db.insert(BooksTable).values({author, title, publish_year}).returning({book_id : BooksTable.id}))[0].book_id;
    await BookTagsTableInterface.insert(book_id, tags_ids);
}

export async function update(id, title, author, publish_year, tags, date) {
    if (date) {
        console.log("[UNIMPLMENETED] when date changes change borrow books");
        // BorrowBooksDB.updateDate(id, date);
    }
    await BookTagsTableInterface.update(id,tags);
    await db.update(BooksTable).set({author, title, publish_year,}).run();
}

export async function remove(id) {
    await db.delete(BooksTable).where(eq(BooksTable.id,id));
}

export async function drop() {
    await db.delete(BooksTable);
}

export async function getAll() {
    return await db.select().from(BooksTable);
}

export async function filter(title, author, year, tags) {
    console.log("[UNIMPLMENETED] filter");
    // const tagsFilter = BookTagsDB.filter(tags);
    // let stmt = "";
    // if (tagsFilter.length !== 0) {
    //     const placeholders = tags.map(_ => "?").join(",");
    //     stmt = db.prepare(`
    //         SELECT * FROM books
    //         WHERE
    //             title LIKE ? AND 
    //             author LIKE ? AND
    //             publish_year LIKE ? AND
    //             id NOT IN (${placeholders})
    //     `);
    //     return [
    //         ...stmt.all([`%${title}%`, `%${author}%`, `%${year}%`, tagsFilter.map(tag => tag.id).join()]),
    //         ...tagsFilter
    //     ];
    // } else {
    //     stmt = db.prepare(`
    //         SELECT * FROM books
    //         WHERE
    //             title LIKE ? AND 
    //             author LIKE ? AND
    //             publish_year LIKE ?
    //     `);
    //     return stmt.all([`%${title}%`, `%${author}%`, `%${year}%`]);
    // }
}
