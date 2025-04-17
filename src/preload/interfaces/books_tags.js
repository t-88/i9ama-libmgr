import { BooksRelations, BookTagsTable } from "../../db/schema";
import db from "../db";
import * as TagsTableInterface from "../interfaces/tags";

export async function insert(book_id, tags_ids) {
    for (let tag_id of tags_ids) {
        await db.insert(BookTagsTable).values({
            book_id: book_id,
            tag_id: tag_id,
        });
    }
}

export async function getAll() {
    return await db.select().from(BookTagsTable);
}

export async function getTagsOfBook(book_id) {
    const tags = await db.query.BookTagsTable.findMany({
        where: (table, { eq }) => eq(table.book_id, book_id),
        with: { tag: { columns: { name: true }, } }
    });

    return tags.map(tagEntry => tagEntry.tag.name);
}

export async function update(id, tags) {
    await db.delete(BookTagsTable).where(eq(BookTagsTable.id, id));
    let tags_ids = TagsTableInterface.insertMany(tags);
    insert(id, tags_ids);
}

export async function filter(tags) {
    console.log("IMPLEMENT");
    // let tagsStmt = TagsDB.getByNames(tags);
    // let placeholders = tagsStmt.map(() => '?').join(', ');
    // let stmt = db.prepare(`SELECT * 
    //    FROM book_tags bt JOIN books b 
    //    ON bt.tag_id = b.id 
    //    WHERE bt.tag_id in (${placeholders})`);
    // return stmt.all(tagsStmt.map(tag => tag.id));
    return [];
}