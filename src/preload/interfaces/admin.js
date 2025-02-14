import db from "../db";
import { AdminsTable } from "../../db/schema";
import {randomUUID} from "crypto";
import fs from "fs";
import { eq } from "drizzle-orm";
import * as helpers from '../helpers'

// Update insert
// export async function insert(fname, lname, img) {
export async function insert(info) {
    try {
        if (!fs.existsSync("admins")) { fs.mkdirSync("admins"); }
        const {id} = (await db.insert(AdminsTable).values({
            first_name: info.first_name,
            last_name: info.last_name,
        }).returning({ id: AdminsTable.id }))[0]
        helpers.saveBase64Image(info.img_personal[0],`admins/${id}_img_personal.png`);
    } catch (e) {
        console.error("[DB-ERROR]: failed to insert admin", e);
    }
}
  
// Update admin
export async function update(id, info) {
    try {
        if (!fs.existsSync("admins")) { fs.mkdirSync("admins"); }
        await db.update(AdminsTable)
            .set({
                first_name: info.first_name,
                last_name: info.last_name,
            })
            .where(eq(AdminsTable.id, id))
            .run();

            helpers.saveBase64Image(info.img_personal[0],`admins/${id}_img_personal.png`);

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
