// const sqlite3 = require('sqlite3');
const sqlite3 = require("better-sqlite3");
const { contextBridge } = require("electron");
const db = new sqlite3("main.db");



const BorrowBooksDB = {
    create: () => {
        const stmt = db.prepare(`CREATE TABLE borrowbooks(
            id INTEGER PRIMARY KEY,
            responsible VARCHAR(64),
            user_id INTEGER,
            book_id INTEGER,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY(user_id) REFERENCES users(id)
            FOREIGN KEY(book_id) REFERENCES books(id)
        )`);
        stmt.run();
    },
    drop: () => {
        db.prepare(`DROP TABLE borrowbooks`).run();
    },
}


const BooksDB = {
    create: () => {
        const stmt = db.prepare(`
            CREATE TABLE books(
                id INTEGER PRIMARY KEY,
                author VARCHAR(64) DEFAULT "" NOT NULL,
                title VARCHAR(64) DEFAULT "" NOT NULL,
                desc TEXT DEFAULT "" NOT NULL,
                tags TEXT NOT NULL,
                available INT DEFAULT 1,
                publish_year VARCHAR(10), 
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )`);
        stmt.run();
    },
    insert: (title, author, publish_year, tags) => {
        const stmt = db.prepare("INSERT INTO books(title,author,publish_year,tags) VALUES (?,?,?,?)");
        stmt.run([title, author, publish_year, tags]);
    },
    update: (id, title, author, publish_year, tags) => {
        const stmt = db.prepare(`UPDATE books 
                                 SET title = ? ,author = ? ,publish_year = ? ,tags = ?
                                 WHERE id = ?
                                 `);
        stmt.run([title, author, publish_year, tags, id]);
    },
    search: (title, author, publish_year, tags) => {
        const stmt = db.prepare(`SELECT title , author , publish_year from books
                                 WHERE title LIKE ? AND
                                       author LIKE ? AND
                                       publish_year LIKE ? 
                                 `);
        console.log(stmt.all([`%${title}%`, `%${author}%`, `%${publish_year}%`]));

    },


    remove: (id) => {
        const stmt = db.prepare("DELETE FROM books WHERE id = ?");
        stmt.run([id]);
    },
    drop: () => {
        try {
            db.prepare(`DROP TABLE books`).run();
        } catch (e) {
            console.log("ERROR: couldnt delete books")
        }
    },
    getAll: () => {
        const stmt = db.prepare("SELECT * FROM books");
        return stmt.all();
    },
}

const UserDB = {
    create: () => {
        const stmt = db.prepare(`CREATE TABLE users(
                                    id INTEGER  PRIMARY KEY ,
                                    first_name  VARCHAR(64) DEFAULT "",
                                    last_name VARCHAR(64) DEFAULT "",
                                    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
                                )`);
        stmt.run();
    },
    insert: (first_name, last_name) => {
        const stmt = db.prepare("INSERT INTO users(first_name, last_name) VALUES (?,?)");
        stmt.run([first_name, last_name]);
    },
    drop: () => {
        try {
            db.prepare(`DROP TABLE users`).run();
        } catch (e) {
            console.log("ERROR: couldnt delete users")
        }
    },
    getAll: () => {
        const stmt = db.prepare("SELECT * FROM users");
        return stmt.all();
    },
};

const Helper = {
    listTables: () => {
        const stmt = db.prepare("SELECT name from sqlite_master where type='table'");
        return stmt.all();
    },
    initDB: () => {
        UserDB.drop(); UserDB.create();
        BooksDB.drop(); BooksDB.create();
        BorrowBooksDB.drop(); BorrowBooksDB.create();
    }
}


contextBridge.exposeInMainWorld("db", {
    users: UserDB,
    books: BooksDB,
    borrowed: BorrowBooksDB,
    helper: Helper,
});