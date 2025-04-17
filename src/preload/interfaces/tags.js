import { eq } from "drizzle-orm";
import { TagsTable } from "../../db/schema";
import db from "../db";

// Create a tag
export async function insert(name) {
    try {
        // Insert if tag does not exist
        const found = await db.select().from(TagsTable).where(eq(TagsTable.name,name));
        if (found.length !== 0) return found.map(item => item.id); // Return existing tag ids

        // Insert new tag if not found
        const result = await db.insert(TagsTable).values({ name });
        return result.lastInsertRowid;
    } catch (e) {
        console.error("[DB-ERROR]: failed to insert tag", e);
    }
}

// Insert multiple tags
export async function insertMany(tags) {
    const tagIds = [];
    for (let tag of tags) {
        const tagId = await insert(tag);
        if (Array.isArray(tagId)) {
            tagIds.push(...tagId.map(id => Number.parseInt(id)));
        } else {
            tagIds.push(Number.parseInt(tagId));
        }
    }
    return tagIds;
}

// Get all tags
export async function getAll() {
    return await db.select().from(TagsTable);
}

// Get tags by name
export async function getTagsByNames(tagNames) {
    return await db.select().from(TagsTable).where(TagsTable.name.in(tagNames));
}

// Remove a tag by id
export async function remove(id) {
    await db.delete(TagsTable).where(eq(TagsTable.id,id));
}

// Drop all tags
export async function drop() {
    await db.delete(TagsTable);
}
