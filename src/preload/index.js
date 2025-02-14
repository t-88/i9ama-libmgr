import { runMigrate } from "./db";
import * as helpers from './helpers'
import { contextBridge, ipcRenderer } from 'electron';




import * as db_fake from "./interfaces/db_fake"
import * as AdminsTableInterface from "./interfaces/admin"
import * as UsersTableInterface from "./interfaces/user"
import * as BooksTableInterface from "./interfaces/books"
import * as ReservedBooksTableInterface from "./interfaces/reserved_books"
import * as TagsTableInterface from "./interfaces/tags"
import * as BookTagsTableInterface from "./interfaces/books_tags"
import * as MegaInterface from "./mega_interface"





async function migrateDB() {
  await runMigrate()
  console.log("[INFO] migrated!");
}




contextBridge.exposeInMainWorld("db", {
  admins: AdminsTableInterface,
  users: UsersTableInterface,
  books: BooksTableInterface,
  borrowed: ReservedBooksTableInterface,
  tags: TagsTableInterface,
  book_tags: BookTagsTableInterface,
  helper: helpers,
  mega : MegaInterface,

  migrate: () => { migrateDB(); },
  db_fake: db_fake,

});



contextBridge.exposeInMainWorld('utils', {
  open: () => ipcRenderer.invoke('open-file-explorer'),
  loadUserImgs: (imgsUUID) => helpers.loadUserImgs(imgsUUID),
  loadAdminImgs: (imgsUUID) => helpers.loadAdminImgs(imgsUUID)
})