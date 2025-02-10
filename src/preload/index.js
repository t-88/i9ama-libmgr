import{runMigrate } from "./db";
import * as helpers from './helpers'
import { contextBridge, ipcRenderer } from 'electron';
import { faker } from '@faker-js/faker';




import * as db_fake from "./interfaces/db_fake"
import * as AdminsTableInterface from "./interfaces/admin"
import * as UsersTableInterface from "./interfaces/user"
import * as BooksTableInterface from "./interfaces/books"
import * as ReservedBooksTableInterface from "./interfaces/reserved_books"
import * as TagsTableInterface from "./interfaces/tags"
import * as BookTagsTableInterface from "./interfaces/books_tags"

async function migrateDB() {
  await runMigrate()
  console.log("[INFO] migrated!");
}


function gen_data() {
  for(let i = 0; i < 2; i++) {
    AdminsTableInterface.insert(i.toString() + "_admin","",faker.image.dataUri());
  }
  for(let i = 0; i < 2; i++) {
    UsersTableInterface.insert(i.toString() + "_user","",faker.image.dataUri());
  }
  for(let i = 0; i < 2; i++) {
    BooksTableInterface.insert(faker.book.title(),faker.book.author(),"2000",[]);
  }
}

function drop() {
  AdminsTableInterface.drop();
  UsersTableInterface.drop();
  BooksTableInterface.drop();
  ReservedBooksTableInterface.drop();
}



contextBridge.exposeInMainWorld("db", {
  admins: AdminsTableInterface,
  users: UsersTableInterface,
  books: BooksTableInterface,
  borrowed: ReservedBooksTableInterface,
  tags: TagsTableInterface,
  book_tags: BookTagsTableInterface,
  helper: helpers,
  migrate: () => { migrateDB(); },
  gen_data : gen_data,
  drop : drop,
  db_fake: db_fake,
});



contextBridge.exposeInMainWorld('utils', {
  open: () => ipcRenderer.invoke('open-file-explorer'),
  loadUserImgs: (imgsUUID) => helpers.loadUserImgs(imgsUUID),
  loadAdminImgs: (imgsUUID) => helpers.loadAdminImgs(imgsUUID)
})