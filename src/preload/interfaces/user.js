import db from "../db";
import { UsersTable } from "../../db/schema";
import {randomUUID} from "crypto";
import fs from "fs";
import { eq } from "drizzle-orm";


export async function insert(fname, lname, img) {
    const fileUUID = randomUUID();
    
    const data = { name: fname + " " + lname, img };
    try {
        if (!fs.existsSync("users")) { fs.mkdirSync("users"); }
        fs.writeFileSync(`users/${fileUUID}.json`, JSON.stringify(data));
        await db.insert(UsersTable).values({
            first_name: fname,
            last_name: lname,
            imgsUUID: fileUUID, 
            school: "ESI",
            uuid: fname[0] + lname[0],
        });
    } catch (e) {
        console.error("[DB-ERROR]: failed to insert user", e);
    }
}


export async function update(id, imgsUUID, fname, lname, img) {
    const data = { name: fname + " " + lname, img };
    try {
        if (!fs.existsSync("users")) { fs.mkdirSync("users"); }
        fs.writeFileSync(`users/${imgsUUID}.json`, JSON.stringify(data));

        await db.update(UsersTable)
            .set({
                first_name: fname,
                last_name: lname,
                uuid: fname[0] + lname[0],
            })
            .where(eq(UsersTable.id, id))
            .run();
    } catch (e) {
        console.error("[DB-ERROR]: failed to update admin", e);
    }
}


export async function drop() {
    await db.delete(UsersTable);
}

export async function getAll() {
    return await db.select().from(UsersTable);
}

export async function remove(id) {
    await db.delete(UsersTable).where(eq(UsersTable.id, id));
}
