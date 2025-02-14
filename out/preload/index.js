"use strict";
const path = require("path");
const fs = require("fs");
const betterSqlite3 = require("drizzle-orm/better-sqlite3");
const Database = require("better-sqlite3");
const electron = require("electron");
const drizzleOrm = require("drizzle-orm");
const sqliteCore = require("drizzle-orm/sqlite-core");
const migrator = require("drizzle-orm/better-sqlite3/migrator");
const crypto = require("crypto");
const megajs = require("megajs");
const ActorsFields = {
  id: sqliteCore.integer("id").primaryKey({ autoIncrement: true }),
  first_name: sqliteCore.text("first_name").notNull(),
  last_name: sqliteCore.text("last_name").notNull()
};
const AdminsTable = sqliteCore.sqliteTable("admins", {
  ...ActorsFields,
  reserved_books: sqliteCore.integer("reservation_id").references(() => ReservationsTable.id, { onDelete: "set null" })
});
const UsersTable = sqliteCore.sqliteTable("users", {
  ...ActorsFields,
  uuid: sqliteCore.text("uuid", { length: 64 }).notNull(),
  date_of_birth: sqliteCore.text("date_of_birth").notNull(),
  al_wilaya: sqliteCore.text("al_wilaya").notNull(),
  phone_number: sqliteCore.text("phone_number").notNull(),
  fb_name_or_link: sqliteCore.text("fb_name_or_link").notNull(),
  school: sqliteCore.text("school").notNull(),
  email: sqliteCore.text("email").notNull(),
  residense_block_number: sqliteCore.text("residense_block_number").notNull(),
  residense_room_number: sqliteCore.text("residense_room_number").notNull(),
  school_matericule: sqliteCore.text("school_matericule").notNull(),
  year_of_study: sqliteCore.text("year_of_study").notNull(),
  study_specialty: sqliteCore.text("study_specialty").notNull(),
  // img_personal: text('img_personal').notNull(),
  // img_card_residency: text('img_card_residency').notNull(),
  // img_school_certificate: text('img_school_certificate').notNull(),
  reserved_book: sqliteCore.integer("book_id").references(() => BooksTable.id, { onDelete: "set null" }).default(null)
});
const TagsTable = sqliteCore.sqliteTable("tags", {
  id: sqliteCore.integer("id").primaryKey({ autoIncrement: true }),
  name: sqliteCore.text("name").notNull()
});
const BooksTable = sqliteCore.sqliteTable("books", {
  id: sqliteCore.integer("id").primaryKey({ autoIncrement: true }),
  author: sqliteCore.text("author", { length: 255 }).default("غير محدد").notNull(),
  title: sqliteCore.text("title", { length: 255 }).default("غير محدد").notNull(),
  description: sqliteCore.text("description", { length: 255 }).default("غير محدد").notNull(),
  available: sqliteCore.integer("available").default(1).notNull(),
  publish_year: sqliteCore.text("publish_year", { length: 32 }).default("غير محدد").notNull(),
  reserved_user: sqliteCore.integer("user_id").references(() => UsersTable.id, { onDelete: "set null" }).default(null)
});
const BookTagsTable = sqliteCore.sqliteTable("book_tags", {
  book_id: sqliteCore.integer("book_id").references(() => BooksTable.id, { onDelete: "set null" }),
  tag_id: sqliteCore.integer("tag_id").references(() => TagsTable.id, { onDelete: "set null" })
});
const ReservationsTable = sqliteCore.sqliteTable("reservations", {
  id: sqliteCore.integer("id").primaryKey({ autoIncrement: true }),
  user_id: sqliteCore.integer("user_id").references(() => UsersTable.id, { onDelete: "set null" }),
  book_id: sqliteCore.integer("book_id").references(() => BooksTable.id, { onDelete: "set null" }),
  admin_id: sqliteCore.integer("admin_id").references(() => AdminsTable.id, { onDelete: "set null" }),
  return_date: sqliteCore.text("return_date").notNull()
});
const BooksRelations = drizzleOrm.relations(BooksTable, ({ many }) => ({
  tags: many(TagsTable)
}));
const TagsRelations = drizzleOrm.relations(TagsTable, ({ many }) => ({
  books: many(BooksTable)
}));
const BooksTagsRelations = drizzleOrm.relations(BookTagsTable, ({ one, man }) => ({
  tag: one(TagsTable, {
    references: [TagsTable.id],
    fields: [BookTagsTable.tag_id]
  }),
  book: one(BooksTable, {
    references: [BooksTable.id],
    fields: [BookTagsTable.tag_id]
  })
}));
const ReservationsRelations = drizzleOrm.relations(ReservationsTable, ({ one, many }) => ({
  admin: one(
    AdminsTable,
    {
      fields: [ReservationsTable.admin_id],
      references: [AdminsTable.id]
    }
  ),
  book: one(
    BooksTable,
    {
      fields: [ReservationsTable.book_id],
      references: [BooksTable.id]
    }
  ),
  user: one(
    UsersTable,
    {
      fields: [ReservationsTable.user_id],
      references: [UsersTable.id]
    }
  )
}));
const AdminRelations = drizzleOrm.relations(AdminsTable, ({ one, many }) => ({
  admin: many(ReservationsTable)
}));
const schema = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AdminRelations,
  AdminsTable,
  BookTagsTable,
  BooksRelations,
  BooksTable,
  BooksTagsRelations,
  ReservationsRelations,
  ReservationsTable,
  TagsRelations,
  TagsTable,
  UsersTable
}, Symbol.toStringTag, { value: "Module" }));
let db = void 0;
let file_exists = false;
let sqlite = void 0;
async function loadDB(fn) {
  const dbPath = path.join(fn);
  file_exists = fs.existsSync(dbPath);
  fs.mkdirSync(path.dirname(dbPath), { recursive: true });
  if (sqlite) {
    await sqlite.close();
  }
  sqlite = new Database(dbPath);
  db = betterSqlite3.drizzle(sqlite, { schema });
}
loadDB("data.db");
const runMigrate = async () => {
  migrator.migrate(db, {
    migrationsFolder: path.join(__dirname, "../../drizzle")
  });
};
if (!file_exists) {
  (async () => {
    await runMigrate();
  })();
}
const db$1 = db;
async function insert$5(info) {
  try {
    if (!fs.existsSync("admins")) {
      fs.mkdirSync("admins");
    }
    const { id } = (await db$1.insert(AdminsTable).values({
      first_name: info.first_name,
      last_name: info.last_name
    }).returning({ id: AdminsTable.id }))[0];
    saveBase64Image(info.img_personal[0], `admins/${id}_img_personal.png`);
  } catch (e) {
    console.error("[DB-ERROR]: failed to insert admin", e);
  }
}
async function update$3(id, info) {
  try {
    if (!fs.existsSync("admins")) {
      fs.mkdirSync("admins");
    }
    await db$1.update(AdminsTable).set({
      first_name: info.first_name,
      last_name: info.last_name
    }).where(drizzleOrm.eq(AdminsTable.id, id)).run();
    saveBase64Image(info.img_personal[0], `admins/${id}_img_personal.png`);
  } catch (e) {
    console.error("[DB-ERROR]: failed to update admin", e);
  }
}
async function drop$5() {
  await db$1.delete(AdminsTable);
}
async function getAll$5() {
  const data = await db$1.select().from(AdminsTable);
  return data;
}
async function remove$3(id) {
  await db$1.delete(AdminsTable).where(drizzleOrm.eq(AdminsTable.id, id));
}
const AdminsTableInterface = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  drop: drop$5,
  getAll: getAll$5,
  insert: insert$5,
  remove: remove$3,
  update: update$3
}, Symbol.toStringTag, { value: "Module" }));
async function insert$4(info) {
  try {
    if (!fs.existsSync("users")) {
      fs.mkdirSync("users");
    }
    const { id } = (await db$1.insert(UsersTable).values({
      uuid: "25" + info.first_name[0] + info.residense_room_number.padStart(3, "0") + info.residense_block_number.padStart(3, "0") + info.last_name[0],
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
      fb_name_or_link: ""
    }).returning({ id: UsersTable.id }))[0];
    saveBase64Image(info.img_personal[0][0], `users/${id}_img_personal.png`);
    saveBase64Image(info.img_card_personal[0][0], `users/${id}_img_card_personal.png`);
    saveBase64Image(info.img_card_residency[0][0], `users/${id}_img_card_residency.png`);
    saveBase64Image(info.img_school_certificate[0][0], `users/${id}_img_school_certificate.png`);
  } catch (e) {
    console.error("[DB-ERROR]: failed to insert user", e);
  }
}
async function update$2(id, info) {
  console.log("UR MOM", info);
  try {
    if (!fs.existsSync("users")) {
      fs.mkdirSync("users");
    }
    await db$1.update(UsersTable).set({
      uuid: "25" + info.first_name[0] + info.residense_room_number.padStart(3, "0") + info.residense_block_number.padStart(3, "0") + info.last_name[0],
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
      fb_name_or_link: ""
    }).where(drizzleOrm.eq(UsersTable.id, id)).run();
    saveBase64Image(info.img_personal[0][0], `users/${id}_img_personal.png`);
    saveBase64Image(info.img_card_personal[0][0], `users/${id}_img_card_personal.png`);
    saveBase64Image(info.img_card_residency[0][0], `users/${id}_img_card_residency.png`);
    saveBase64Image(info.img_school_certificate[0][0], `users/${id}_img_school_certificate.png`);
  } catch (e) {
    console.error("[DB-ERROR]: failed to insert user", e);
  }
}
async function drop$4() {
  await db$1.delete(UsersTable);
}
async function getAll$4() {
  return await db$1.select().from(UsersTable);
}
async function remove$2(id) {
  await db$1.delete(UsersTable).where(drizzleOrm.eq(UsersTable.id, id));
}
const UsersTableInterface = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  drop: drop$4,
  getAll: getAll$4,
  insert: insert$4,
  remove: remove$2,
  update: update$2
}, Symbol.toStringTag, { value: "Module" }));
async function insert$3(name) {
  try {
    const found = await db$1.select().from(TagsTable).where(drizzleOrm.eq(TagsTable.name, name));
    if (found.length !== 0) return found.map((item) => item.id);
    const result = await db$1.insert(TagsTable).values({ name });
    return result.lastInsertRowid;
  } catch (e) {
    console.error("[DB-ERROR]: failed to insert tag", e);
  }
}
async function insertMany(tags) {
  const tagIds = [];
  for (let tag of tags) {
    const tagId = await insert$3(tag);
    if (Array.isArray(tagId)) {
      tagIds.push(...tagId.map((id) => Number.parseInt(id)));
    } else {
      tagIds.push(Number.parseInt(tagId));
    }
  }
  return tagIds;
}
async function getAll$3() {
  return await db$1.select().from(TagsTable);
}
async function getTagsByNames(tagNames) {
  return await db$1.select().from(TagsTable).where(TagsTable.name.in(tagNames));
}
async function remove$1(id) {
  await db$1.delete(TagsTable).where(drizzleOrm.eq(TagsTable.id, id));
}
async function drop$3() {
  await db$1.delete(TagsTable);
}
const TagsTableInterface = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  drop: drop$3,
  getAll: getAll$3,
  getTagsByNames,
  insert: insert$3,
  insertMany,
  remove: remove$1
}, Symbol.toStringTag, { value: "Module" }));
async function insert$2(book_id, tags_ids) {
  for (let tag_id of tags_ids) {
    await db$1.insert(BookTagsTable).values({
      book_id,
      tag_id
    });
  }
}
async function getAll$2() {
  return await db$1.select().from(BookTagsTable);
}
async function getTagsOfBook(book_id) {
  const tags = await db$1.query.BookTagsTable.findMany({
    where: (table, { eq: eq2 }) => eq2(table.book_id, book_id),
    with: { tag: { columns: { name: true } } }
  });
  return tags.map((tagEntry) => tagEntry.tag.name);
}
async function update$1(id, tags) {
  await db$1.delete(BookTagsTable).where(eq(BookTagsTable.id, id));
  let tags_ids = insertMany(tags);
  insert$2(id, tags_ids);
}
async function filter$1(tags) {
  console.log("IMPLEMENT");
  return [];
}
const BookTagsTableInterface = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  filter: filter$1,
  getAll: getAll$2,
  getTagsOfBook,
  insert: insert$2,
  update: update$1
}, Symbol.toStringTag, { value: "Module" }));
async function insert$1(title, author, publish_year, tags) {
  const tags_ids = await insertMany(tags);
  const book_id = (await db$1.insert(BooksTable).values({ author, title, publish_year }).returning({ book_id: BooksTable.id }))[0].book_id;
  await insert$2(book_id, tags_ids);
}
async function update(id, title, author, publish_year, tags, date) {
  if (date) {
    console.log("[UNIMPLMENETED] when date changes change borrow books");
  }
  await update$1(id, tags);
  await db$1.update(BooksTable).set({ author, title, publish_year }).run();
}
async function remove(id) {
  await db$1.delete(BooksTable).where(drizzleOrm.eq(BooksTable.id, id));
}
async function drop$2() {
  await db$1.delete(BooksTable);
}
async function getAll$1() {
  return await db$1.select().from(BooksTable);
}
async function filter(title, author, year, tags) {
  console.log("[UNIMPLMENETED] filter");
}
const BooksTableInterface = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  drop: drop$2,
  filter,
  getAll: getAll$1,
  insert: insert$1,
  remove,
  update
}, Symbol.toStringTag, { value: "Module" }));
async function insert(book_id, user_id, admin_id, return_date) {
  await db$1.update(UsersTable).set({ reserved_book: book_id }).where(drizzleOrm.eq(UsersTable.id, user_id)).run();
  await db$1.update(BooksTable).set({ reserved_user: user_id, available: 0 }).where(drizzleOrm.eq(BooksTable.id, book_id)).run();
  await db$1.insert(ReservationsTable).values({
    user_id,
    book_id,
    admin_id,
    return_date
  }).run();
}
async function getAll() {
  return await db$1.select().from(ReservationsTable);
}
async function returnBook(book_id) {
  const reservation = (await db$1.select().from(ReservationsTable).where(drizzleOrm.eq(ReservationsTable.book_id, book_id)))[0];
  console.log(reservation, book_id);
  try {
    await db$1.update(UsersTable).set({ reserved_book: null }).where(drizzleOrm.eq(UsersTable.id, reservation.user_id)).run();
    await db$1.update(BooksTable).set({ reserved_user: null, available: 1 }).where(drizzleOrm.eq(BooksTable.id, reservation.book_id)).run();
    await db$1.delete(ReservationsTable).where(drizzleOrm.eq(ReservationsTable.id, reservation.id)).run();
  } catch (e) {
    console.log("[Failed] ReservationsTable returnBook", e);
  }
}
async function queryAdmin(admin_id) {
  const reservation_data = await db$1.query.ReservationsTable.findMany({
    where: (table, { eq: eq2 }) => eq2(table.admin_id, admin_id),
    with: {
      book: true
    }
  });
  return reservation_data.map((data) => data.book);
}
async function updateDate(id, date) {
  console.log("updateDate function executed: Not implemented");
}
async function drop$1() {
  await db$1.delete(ReservationsTable);
}
const ReservedBooksTableInterface = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  drop: drop$1,
  getAll,
  insert,
  queryAdmin,
  returnBook,
  updateDate
}, Symbol.toStringTag, { value: "Module" }));
async function loadUserImgs(id) {
  try {
    if (!fs.existsSync("users")) {
      return void 0;
    }
    let img_personal = "data:image/png;base64," + fs.readFileSync(`users/${id}_img_personal.png`).toString("base64");
    let img_card_personal = "data:image/png;base64," + fs.readFileSync(`users/${id}_img_card_personal.png`).toString("base64");
    let img_card_residency = "data:image/png;base64," + fs.readFileSync(`users/${id}_img_card_residency.png`).toString("base64");
    let img_school_certificate = "data:image/png;base64," + fs.readFileSync(`users/${id}_img_school_certificate.png`).toString("base64");
    return {
      img_personal,
      img_card_personal,
      img_card_residency,
      img_school_certificate
    };
  } catch (e) {
    console.error("ERROR: failed to load user imgs", e);
  }
}
function loadAdminImgs(imgsUUID) {
  try {
    if (!fs.existsSync("admins")) {
      fs.mkdirSync("admins");
    }
    if (!fs.existsSync(`admins/${imgsUUID}.json`)) {
      return "";
    }
    let buffer = fs.readFileSync(`admins/${imgsUUID}.json`);
    return JSON.parse(new TextDecoder("utf-8").decode(buffer));
  } catch (e) {
    console.error("ERROR: failed to load user imgs", e);
  }
}
function saveBase64Image(base64String, filePath) {
  const base64Data = base64String.replace(/^data:image\/png;base64,/, "");
  const imageBuffer = Buffer.from(base64Data, "base64");
  fs.writeFile(filePath, imageBuffer, (err) => {
  });
}
function drop() {
  drop$5();
  drop$4();
  drop$2();
  drop$1();
}
const helpers = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  drop,
  loadAdminImgs,
  loadUserImgs,
  saveBase64Image
}, Symbol.toStringTag, { value: "Module" }));
function books_fillDB() {
  const data = [
    { "title": "الرحيق المختوم", "publish_year": 1979, "author": "صفي الرحمن المباركفوري" },
    { "title": "في ظلال القرآن", "publish_year": 1952, "author": "سيد قطب" },
    { "title": "مقدمة ابن خلدون", "publish_year": 1377, "author": "ابن خلدون" },
    { "title": "صحيح البخاري", "publish_year": 846, "author": "الإمام البخاري" },
    { "title": "صحيح مسلم", "publish_year": 875, "author": "الإمام مسلم" },
    { "title": "رياض الصالحين", "publish_year": 1250, "author": "الإمام النووي" },
    { "title": "الأربعون النووية", "publish_year": 1233, "author": "الإمام النووي" },
    { "title": "إحياء علوم الدين", "publish_year": 1111, "author": "الإمام الغزالي" },
    { "title": "تفسير ابن كثير", "publish_year": 1373, "author": "ابن كثير" },
    { "title": "تفسير الطبري", "publish_year": 923, "author": "الإمام الطبري" },
    { "title": "سنن الترمذي", "publish_year": 892, "author": "الإمام الترمذي" },
    { "title": "سنن النسائي", "publish_year": 915, "author": "الإمام النسائي" },
    { "title": "سنن ابن ماجه", "publish_year": 887, "author": "ابن ماجه" },
    { "title": "سنن أبي داود", "publish_year": 888, "author": "أبو داود السجستاني" },
    { "title": "الموطأ", "publish_year": 800, "author": "الإمام مالك" },
    { "title": "العقيدة الطحاوية", "publish_year": 933, "author": "أبو جعفر الطحاوي" },
    { "title": "زاد المعاد", "publish_year": 1350, "author": "ابن القيم" },
    { "title": "السيرة النبوية لابن هشام", "publish_year": 833, "author": "ابن هشام" },
    { "title": "الشفا بتعريف حقوق المصطفى", "publish_year": 1100, "author": "القاضي عياض" },
    { "title": "القرآن الكريم", "publish_year": 632, "author": "الله سبحانه وتعالى" },
    { "title": "الفتح الرباني", "publish_year": 1138, "author": "عبد القادر الجيلاني" },
    { "title": "حلية الأولياء", "publish_year": 1044, "author": "أبو نعيم الأصبهاني" },
    { "title": "الفقه على المذاهب الأربعة", "publish_year": 1908, "author": "عبد الرحمن الجزيري" },
    { "title": "بلوغ المرام", "publish_year": 1355, "author": "ابن حجر العسقلاني" },
    { "title": "تهذيب الكمال", "publish_year": 1255, "author": "المزي" },
    { "title": "كشف الشبهات", "publish_year": 1740, "author": "محمد بن عبد الوهاب" },
    { "title": "الفوائد", "publish_year": 1348, "author": "ابن القيم" },
    { "title": "إعلام الموقعين", "publish_year": 1341, "author": "ابن القيم" },
    { "title": "تيسير الكريم الرحمن", "publish_year": 1965, "author": "عبد الرحمن السعدي" },
    { "title": "مختصر صحيح مسلم", "publish_year": 1250, "author": "الإمام المنذري" }
  ];
  for (let item of data) {
    insert$1(item.title, item.author, item.publish_year, []);
  }
}
function users_fillDB() {
  const data = [
    { "first_name": "محمد", "last_name": "أحمد" },
    { "first_name": "علي", "last_name": "حسن" },
    { "first_name": "فاطمة", "last_name": "عبدالله" },
    { "first_name": "خالد", "last_name": "سعيد" },
    { "first_name": "نور", "last_name": "الدين" },
    { "first_name": "زينب", "last_name": "عمر" },
    { "first_name": "عبدالرحمن", "last_name": "يوسف" },
    { "first_name": "عائشة", "last_name": "محمود" },
    { "first_name": "يحيى", "last_name": "إبراهيم" },
    { "first_name": "سارة", "last_name": "عبدالرحيم" },
    { "first_name": "عمر", "last_name": "عبدالكريم" },
    { "first_name": "مريم", "last_name": "أمين" },
    { "first_name": "حسين", "last_name": "مصطفى" },
    { "first_name": "ليلى", "last_name": "جميل" },
    { "first_name": "سلمان", "last_name": "الطاهر" },
    { "first_name": "هند", "last_name": "عبدالغفور" },
    { "first_name": "طارق", "last_name": "عصام" },
    { "first_name": "هدى", "last_name": "العلي" },
    { "first_name": "إيمان", "last_name": "فتحي" },
    { "first_name": "عبدالعزيز", "last_name": "عبداللطيف" },
    { "first_name": "خلود", "last_name": "الزهراني" },
    { "first_name": "ماهر", "last_name": "السيد" },
    { "first_name": "نايف", "last_name": "الشريف" },
    { "first_name": "سمير", "last_name": "خالد" },
    { "first_name": "روان", "last_name": "مجدي" },
    { "first_name": "باسم", "last_name": "حمدي" },
    { "first_name": "دينا", "last_name": "سليمان" },
    { "first_name": "يوسف", "last_name": "الهاشمي" },
    { "first_name": "رنا", "last_name": "الغامدي" },
    { "first_name": "أيمن", "last_name": "الناصر" }
  ];
  for (let item of data) {
  }
}
const db_fake = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  books_fillDB,
  users_fillDB
}, Symbol.toStringTag, { value: "Module" }));
const MEGA_ENC_PASSWORD = "random-password-for-mega-file-storage-aes-algo";
const ALGORTHIM = "aes-256-cbc";
const EMAIL = "mt_douibi@esi.dz";
const PASSWORD = "imprettycoolguy123456789";
async function encryptFileToBuffer(inputPath) {
  const key = crypto.scryptSync(MEGA_ENC_PASSWORD, "salt", 32);
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv(ALGORTHIM, key, iv);
  try {
    const fileData = fs.readFileSync(inputPath);
    const encrypted = Buffer.concat([cipher.update(fileData), cipher.final()]);
    return Buffer.concat([iv, encrypted]);
  } catch (error) {
    console.error("Encryption failed:", error);
    throw error;
  }
}
async function decryptBufferToBuffer(inputBuffer) {
  const key = crypto.scryptSync(MEGA_ENC_PASSWORD, "salt", 32);
  try {
    const fileData = inputBuffer;
    const iv = fileData.slice(0, 16);
    const encryptedContent = fileData.slice(16);
    const decipher = crypto.createDecipheriv(ALGORTHIM, key, iv);
    const decrypted = Buffer.concat([decipher.update(encryptedContent), decipher.final()]);
    return decrypted;
  } catch (error) {
    console.error("Decryption failed:", error);
    throw error;
  }
}
function streamToBuffer(stream) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    stream.on("data", (chunk) => chunks.push(chunk));
    stream.on("end", () => resolve(Buffer.concat(chunks)));
    stream.on("error", reject);
  });
}
async function downloadFile(fn) {
  const storage = await new megajs.Storage({
    email: EMAIL,
    password: PASSWORD,
    allowUploadBuffering: true
  }).ready;
  try {
    const file = storage.files[Object.keys(storage.files).find((file2) => storage.files[file2].name == fn)];
    const stream = file.download();
    const buffer = await streamToBuffer(stream);
    const decrypted = await decryptBufferToBuffer(buffer);
    return decrypted;
  } catch (error) {
    console.error("Download error:", error);
    throw error;
  }
}
async function uploadFile(fn, store_fn) {
  try {
    const storage = await new megajs.Storage({
      email: EMAIL,
      password: PASSWORD,
      allowUploadBuffering: true
    }).ready;
    const fileBuffer = await encryptFileToBuffer(fn);
    const stream = storage.upload({ name: store_fn, allowUploadBuffering: true });
    stream.end(fileBuffer);
    const file = await stream.complete;
    console.log("Upload successful:", file);
  } catch (error) {
    console.error("Upload failed:", error);
  }
}
function uploadDB() {
  const fn = `data-${Date.now()}.db`;
  return uploadFile("data.db", fn).then(() => `Database uploaded as ${fn}`).catch((error) => {
    console.error("Upload failed:", error);
    throw error;
  });
}
function downloadDB() {
  return new megajs.Storage({
    email: EMAIL,
    password: PASSWORD,
    allowUploadBuffering: true
  }).ready.then((storage) => {
    let latestDate = null;
    let latestDateKey = "";
    Object.keys(storage.files).forEach((file) => {
      let name = storage.files[file].name;
      if (name.startsWith("data-")) {
        const dateString = name.substring("data-".length, name.length - 3);
        const dateObject = new Date(Number.parseInt(dateString));
        if (!latestDate || dateObject > latestDate) {
          latestDate = dateObject;
          latestDateKey = file;
        }
      }
    });
    if (!latestDateKey) {
      throw new Error("No valid database file found.");
    }
    return downloadFile(storage.files[latestDateKey].name).then((db2) => {
      try {
        if (!fs.existsSync("downloaded-dbs")) {
          fs.mkdirSync("downloaded-dbs");
        }
        if (!fs.existsSync("backup-dbs")) {
          fs.mkdirSync("backup-dbs");
        }
        fs.writeFileSync("downloaded-dbs/" + storage.files[latestDateKey].name, db2);
        fs.writeFileSync("data-version.db", "downloaded-dbs/" + storage.files[latestDateKey].name);
        return `Database saved as ${storage.files[latestDateKey].name}`;
      } catch (e) {
        console.log("ERROR downloading the file", e);
      }
    });
  });
}
async function switchDB() {
  if (!fs.existsSync("downloaded-dbs")) {
    fs.mkdirSync("downloaded-dbs");
  }
  if (!fs.existsSync("backup-dbs")) {
    fs.mkdirSync("backup-dbs");
  }
  let formattedDate = (/* @__PURE__ */ new Date()).toLocaleString().replace(",", "-");
  formattedDate = formattedDate.replaceAll("/", ".").replaceAll(" ", "");
  let db_fn = fs.readFileSync("data-version.db").toString("utf8");
  fs.copyFileSync(db_fn, "data.db");
  loadDB("data.db");
}
const MegaInterface = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  downloadDB,
  downloadFile,
  switchDB,
  uploadDB,
  uploadFile
}, Symbol.toStringTag, { value: "Module" }));
async function migrateDB() {
  await runMigrate();
  console.log("[INFO] migrated!");
}
electron.contextBridge.exposeInMainWorld("db", {
  admins: AdminsTableInterface,
  users: UsersTableInterface,
  books: BooksTableInterface,
  borrowed: ReservedBooksTableInterface,
  tags: TagsTableInterface,
  book_tags: BookTagsTableInterface,
  helper: helpers,
  mega: MegaInterface,
  migrate: () => {
    migrateDB();
  },
  db_fake
});
electron.contextBridge.exposeInMainWorld("utils", {
  open: () => electron.ipcRenderer.invoke("open-file-explorer"),
  loadUserImgs: (imgsUUID) => loadUserImgs(imgsUUID),
  loadAdminImgs: (imgsUUID) => loadAdminImgs(imgsUUID)
});
