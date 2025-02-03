
import path from 'path'
import fs from 'fs'
import { drizzle } from 'drizzle-orm/better-sqlite3'
import Database from 'better-sqlite3'
import { app } from 'electron'
import * as schema from '../db/schema'
import { migrate } from 'drizzle-orm/better-sqlite3/migrator'


const dbPath = path.join('data.db');
let file_exists = fs.existsSync(dbPath);
fs.mkdirSync(path.dirname(dbPath), { recursive: true });
const sqlite = new Database(dbPath)
const db = drizzle(sqlite, { schema })

function toDrizzleResult(rows) {
  if (!rows) {
    return []
  }
  if (Array.isArray(rows)) {
    return rows.map((row) => {
      return Object.keys(row).map((key) => row[key])
    })
  } else {
    return Object.keys(rows).map((key) => rows[key])
  }
}

export const execute = async (_, sqlstr, params, method) => {
  const result = sqlite.prepare(sqlstr)
  const ret = result[method](...params)
  return toDrizzleResult(ret)
}

export const runMigrate = async () => {
  migrate(db, {
    migrationsFolder: path.join(__dirname, '../../drizzle')
  })
}


if(!file_exists) {
  (async () => {
    await runMigrate()
  })();
}


export default db;