import { eq } from "drizzle-orm";
import { BooksTable, ReservationsTable, UsersTable } from "../../db/schema";
import db from "../db";

export async function insert(book_id, user_id, admin_id, return_date) {
    await db.update(UsersTable).set({reserved_book: book_id,}).where(eq(UsersTable.id,user_id)).run();
    await db.update(BooksTable).set({reserved_user: user_id, available : 0}).where(eq(BooksTable.id,book_id)).run();
    await db.insert(ReservationsTable).values({
        user_id : user_id,
        book_id : book_id,
        admin_id : admin_id,
        return_date : return_date,        
    }).run();
}

export async function getAll() {
    return await db.select().from(ReservationsTable);
}

export async function returnBook(book_id) {
    const reservation = (await db.select().from(ReservationsTable).where(eq(ReservationsTable.book_id,book_id)))[0];
    console.log(reservation,book_id);
    try {
        await db.update(UsersTable).set({reserved_book: null,}).where(eq(UsersTable.id,reservation.user_id)).run();
        await db.update(BooksTable).set({reserved_user: null, available : 1}).where(eq(BooksTable.id,reservation.book_id)).run();
        await db.delete(ReservationsTable).where(eq(ReservationsTable.id,reservation.id)).run();
    } catch(e) {
        console.log("[Failed] ReservationsTable returnBook",e);
    }
}

export async function queryAdmin(admin_id) {
    const reservation_data = await db.query.ReservationsTable.findMany({
            where: (table,{eq}) => eq(table.admin_id,admin_id),
            with: {
                book: true,
            }
        });
        
    return reservation_data.map(data => data.book);
}

export async function updateDate(id, date) {
    // TODO: Update the return date for a particular borrowbook entry
    // console.log(db.prepare("UPDATE borrowbooks SET return_date = ? WHERE borrowbooks.book_id = ?").run([date, id]));
    console.log("updateDate function executed: Not implemented");
}


export async function drop() {
    await db.delete(ReservationsTable);
}
