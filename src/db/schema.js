import { relations } from "drizzle-orm";
import { integer, datetime, int, sqliteTable, text, boolean } from "drizzle-orm/sqlite-core";



const ActorsFields = {
  id: integer("id").primaryKey({ autoIncrement: true }),
  uuid: text("uuid", { length: 64 }).notNull(),
  first_name: text('first_name').notNull(),
  last_name: text('last_name').notNull(),
};

export const AdminsTable = sqliteTable('admins', {
  ...ActorsFields,
  reserved_books: integer('reservation_id').references(() => ReservationsTable.id,{onDelete: "set null"}),
});

export const UsersTable = sqliteTable('users', {
  ...ActorsFields,
  date_of_birth: text('date_of_birth').notNull(),
  al_wilaya: text('al_wilaya').notNull(), 
  phone_number: text('phone_number').notNull(), 
  fb_name_or_link: text('fb_name_or_link').notNull(), 
  school: text('school').notNull(),

  email: text('email').notNull(), 
  residense_block_number: text('residense_block_number').notNull(), 
  residense_room_number: text('residense_room_number').notNull(), 
  school_matericule: text('school_matericule').notNull(), 
  year_of_study: text('year_of_study').notNull(), 
  study_specialty: text('study_specialty').notNull(), 

  // img_personal: text('img_personal').notNull(),
  // img_card_residency: text('img_card_residency').notNull(),
  // img_school_certificate: text('img_school_certificate').notNull(),

  reserved_book: integer('book_id').references(() => BooksTable.id, {onDelete: "set null"}).default(null),
});



export const TagsTable = sqliteTable('tags', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
});

export const BooksTable = sqliteTable('books', {
  id: integer("id").primaryKey({ autoIncrement: true }),
  author: text("author", { length: 255 }).default("غير محدد").notNull(),
  title: text("title", { length: 255 }).default("غير محدد").notNull(),
  description: text("description", { length: 255 }).default("غير محدد").notNull(),
  available: integer("available").default(1).notNull(),
  publish_year: text("publish_year", { length: 32 }).default('غير محدد').notNull(),
  reserved_user: integer('user_id').references(() => UsersTable.id , {onDelete: "set null"}).default(null),
});

export const BookTagsTable = sqliteTable('book_tags', {
  book_id: integer('book_id').references(() => BooksTable.id , {onDelete: "set null"}),
  tag_id: integer('tag_id').references(() => TagsTable.id , {onDelete: "set null"}),
});

export const ReservationsTable = sqliteTable('reservations', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  user_id: integer('user_id').references(() => UsersTable.id   , {onDelete: "set null"}),
  book_id: integer('book_id').references(() => BooksTable.id   , {onDelete: "set null"}),
  admin_id: integer('admin_id').references(() => AdminsTable.id, {onDelete: "set null"}),
  return_date: text('return_date').notNull(),
});


// BooksTable.relation('tags', {
//   relation: 'many-to-many',
//   table: BookTagsTable,
//   column: 'book_id',
//   relatedColumn: 'tag_id',
//   relatedTable: TagsTable,
// });

// TagsTable.relation('books', {
//   relation: 'many-to-many',
//   table: BookTagsTable,
//   column: 'tag_id',
//   relatedColumn: 'book_id',
//   relatedTable: BookTagsTable,
// });


export const BooksRelations = relations(BooksTable, ({ many }) => ({
  tags: many(TagsTable)
}));

export const TagsRelations = relations(TagsTable, ({ many }) => ({
  books: many(BooksTable)
}));

export const BooksTagsRelations = relations(BookTagsTable, ({ one, man }) => ({
  tag: one(TagsTable,{
    references: [TagsTable.id],
    fields: [BookTagsTable.tag_id],
  }),
  book: one(BooksTable,{
    references: [BooksTable.id],
    fields: [BookTagsTable.tag_id],
  })

}));


export const ReservationsRelations = relations(ReservationsTable, ({ one, many }) => ({
  admin: one(AdminsTable,
    {
      fields: [ReservationsTable.admin_id],
      references: [AdminsTable.id],
    }
  ),
  book: one(BooksTable,
    {
      fields: [ReservationsTable.book_id],
      references: [BooksTable.id],
    }
  ),
  user: one(UsersTable,
    {
      fields: [ReservationsTable.user_id],
      references: [UsersTable.id],
    }
  ),    
}));
export const AdminRelations = relations(AdminsTable, ({ one, many }) => ({
  admin: many(ReservationsTable),
}));