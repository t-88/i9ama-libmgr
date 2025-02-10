import db from "../db";
import { UsersTable } from "../../db/schema";
import { randomUUID } from "crypto";
import fs from "fs";
import { cosineDistance, eq } from "drizzle-orm";
import { uuid } from "drizzle-orm/pg-core";
import * as helpers from '../helpers'


export async function insert(info) { 

    try {
        if (!fs.existsSync("users")) { fs.mkdirSync("users"); }

        const {id} = (await db.insert(UsersTable).values({
            uuid : "25" + info.first_name[0] + info.residense_room_number.padStart(3,"0") + info.residense_block_number.padStart(3,"0")  + info.last_name[0],
            first_name: info.first_name,
            last_name: info.last_name,
            date_of_birth: info.date_of_birth,
            al_wilaya: info.al_wilaya,
            phone_number: info.phone_number,
            fb_name_or_link: info.fb_name_or_link,
            school: info.school,
            email: info.email,
            residense_block_number: info.residense_block_number,
            residense_room_number: info.residense_room_number,
            school_matericule: info.school_matericule,
            year_of_study: info.year_of_study,
            study_specialty: info.study_specialty,
            fb_name_or_link: "", 
            
        }).returning({ id: UsersTable.id }))[0]
        helpers.saveBase64Image(info.img_personal[0][0],`users/${id}_img_personal.png`);
        helpers.saveBase64Image(info.img_card_personal[0][0],`users/${id}_img_card_personal.png`);
        helpers.saveBase64Image(info.img_card_residency[0][0],`users/${id}_img_card_residency.png`);
        helpers.saveBase64Image(info.img_school_certificate[0][0],`users/${id}_img_school_certificate.png`);

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
