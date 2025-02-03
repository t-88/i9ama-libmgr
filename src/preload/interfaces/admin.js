import db from "../db";
import { AdminsTable } from "../../db/schema";
import {randomUUID} from "crypto";
import fs from "fs";
import { eq } from "drizzle-orm";

// Update insert
export async function insert(fname, lname, img) {
    const fileUUID = randomUUID();
    
    const data = { name: fname + " " + lname, img };
    try {
        if (!fs.existsSync("admins")) { fs.mkdirSync("admins"); }
        let { id } = (await db.insert(AdminsTable).values({
            first_name: fname,
            last_name: lname,
            imgsUUID: fileUUID, 
            uuid: fname[0] + lname[0],
        }).returning({id : AdminsTable.id}))[0];
        fs.writeFileSync(`admins/${id}.json`, JSON.stringify(data));
    } catch (e) {
        console.error("[DB-ERROR]: failed to insert admin", e);
    }
}
  
// Update admin
export async function update(id, imgsUUID, fname, lname, img) {
    const data = { name: fname + " " + lname, img };
    try {
        if (!fs.existsSync("admins")) { fs.mkdirSync("admins"); }
        fs.writeFileSync(`admins/${imgsUUID}.json`, JSON.stringify(data));

        await db.update(AdminsTable)
            .set({
                first_name: fname,
                last_name: lname,
                uuid: fname[0] + lname[0],
            })
            .where(eq(AdminsTable.id, id))
            .run();
    } catch (e) {
        console.error("[DB-ERROR]: failed to update admin", e);
    }
}

// Drop all admins
export async function drop() {
    await db.delete(AdminsTable);
}

// Get all admins
export async function getAll() {
    const data = await db.select().from(AdminsTable);
    return data;
}

// Remove admin by id
export async function remove(id) {
    await db.delete(AdminsTable).where(eq(AdminsTable.id, id));
}
