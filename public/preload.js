// const sqlite3 = require('sqlite3');
const sqlite3 = require("better-sqlite3");
const { contextBridge, ipcRenderer } = require("electron");
const fs = require('node:fs');
const { randomUUID } = require("node:crypto");

const db = new sqlite3("main.db");



const BorrowBooksDB = {
    create: () => {
        const stmt = db.prepare(`CREATE TABLE borrowbooks(
            id INTEGER PRIMARY KEY,
            res VARCHAR(64),
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
    insert: (res, bookID, userID) => {

        const update_user = db.prepare(`UPDATE users SET reserved_book = 1 WHERE id = ?`);
        update_user.run([userID]);

        const update_books = db.prepare(`UPDATE books SET available = 0 WHERE id = ?`);
        update_books.run([bookID]);

        const stmt = db.prepare("INSERT INTO borrowbooks(res,book_id,user_id) VALUES (?,?,?)");
        stmt.run([res, bookID, userID]);
    },
    getAll: () => {
        const stmt = db.prepare("SELECT * FROM borrowbooks");
        return stmt.all();
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
                                    first_name  VARCHAR(64),
                                    last_name VARCHAR(64),
                                    school VARCHAR(64),
                                    imgsUUID VARCHAR(64),
                                    reserved_book INTEGER DEFAULT 0,
                                    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
                                )`);
        stmt.run();
    },
    insert: (fname, lname, school, img, idImg, schoolIdImg, schoolPaper) => {
        const fileUUID = randomUUID();
        const data = {
            name: fname + " " + lname,
            img, idImg, schoolIdImg, schoolPaper
        };
        try {
            if (!fs.existsSync("users")) {
                fs.mkdirSync("users");
            }
            fs.writeFileSync(`users/${fileUUID}.json`, JSON.stringify(data));
            const stmt = db.prepare("INSERT INTO users(first_name, last_name, school, imgsUUID) VALUES (?,?,?,?)");
            stmt.run([fname, lname, school, fileUUID]);
        } catch (e) {
            console.error("ERROR: failed to save user", e);
        }

    },
    update: (id, imgsUUID, fname, lname, school, img, idImg, schoolIdImg, schoolPaper) => {
        const data = {
            name: fname + " " + lname,
            img, idImg, schoolIdImg, schoolPaper
        };
        try {
            if (!fs.existsSync("users")) {
                fs.mkdirSync("users");
            }
            fs.writeFileSync(`users/${imgsUUID}.json`, JSON.stringify(data));
            const stmt = db.prepare(`UPDATE users 
                SET  first_name = ? , last_name = ? , school = ? 
                WHERE id = ?
                `);
            stmt.run([fname, lname, school, id]);

        } catch (e) {
            console.error("ERROR: failed to save user", e);
        }
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

    remove: (id) => {
        const stmt = db.prepare("DELETE FROM users WHERE id = ?");
        stmt.run([id]);
    },
};



const AdminDB = {
    create: () => {
        const stmt = db.prepare(`CREATE TABLE admins(
                                    id INTEGER  PRIMARY KEY ,
                                    first_name  VARCHAR(64),
                                    last_name VARCHAR(64),
                                    imgsUUID VARCHAR(64),
                                    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
                                )`);
        stmt.run();
    },
    insert: (fname, lname, img) => {
        const fileUUID = randomUUID();
        const data = {name: fname + " " + lname, img};
        try {
            if (!fs.existsSync("admins")) {
                fs.mkdirSync("admins");
            }
            fs.writeFileSync(`admins/${fileUUID}.json`, JSON.stringify(data));
            const stmt = db.prepare("INSERT INTO admins(first_name, last_name, imgsUUID) VALUES (?,?,?)");
            stmt.run([fname, lname, fileUUID]);
        } catch (e) {
            console.error("ERROR: failed to save admin", e);
        }

    },
    update: (id, imgsUUID, fname, lname, img) => {
        const data = {
            name: fname + " " + lname,
            img
        };
        try {
            if (!fs.existsSync("admins")) {
                fs.mkdirSync("admins");
            }
            fs.writeFileSync(`admins/${imgsUUID}.json`, JSON.stringify(data));
            const stmt = db.prepare(`UPDATE admins 
                SET  first_name = ? , last_name = ? 
                WHERE id = ?
            `);
            stmt.run([fname, lname, id]);

        } catch (e) {
            console.error("ERROR: failed to save admins", e);
        }
    },
    drop: () => {
        try {
            db.prepare(`DROP TABLE admins`).run();
        } catch (e) {
            console.log("ERROR: couldnt delete admins")
        }
    },
    getAll: () => {
        const stmt = db.prepare("SELECT * FROM admins");
        return stmt.all();
    },
    remove: (id) => {
        const stmt = db.prepare("DELETE FROM admins WHERE id = ?");
        stmt.run([id]);
    },
};







function loadUserImgs(imgsUUID) {
    try {
        if (!fs.existsSync("users")) {
            fs.mkdirSync("users");
        }
        let buffer = fs.readFileSync(`users/${imgsUUID}.json`);
        return JSON.parse(new TextDecoder("utf-8").decode(buffer));
    } catch (e) {
        console.error("ERROR: failed to load user imgs", e);
    }
}

function loadAdminImgs(imgsUUID) {
    try {
        if (!fs.existsSync("admins")) {
            fs.mkdirSync("admins");
        }
        let buffer = fs.readFileSync(`admins/${imgsUUID}.json`);
        return JSON.parse(new TextDecoder("utf-8").decode(buffer));
    } catch (e) {
        console.error("ERROR: failed to load user imgs", e);
    }
}



const Helper = {
    listTables: () => {
        const stmt = db.prepare("SELECT name from sqlite_master where type='table'");
        return stmt.all();
    },
    initDB: () => {
        BorrowBooksDB.drop(); BorrowBooksDB.create();
        UserDB.drop(); UserDB.create();
        BooksDB.drop(); BooksDB.create();
        AdminDB.drop(); AdminDB.create();
        
    },
    books_fillDB: books_fillDB,
    users_fillDB: users_fillDB,
}


contextBridge.exposeInMainWorld("db", {
    users: UserDB,
    books: BooksDB,
    admins: AdminDB,
    borrowed: BorrowBooksDB,
    helper: Helper,

});

contextBridge.exposeInMainWorld('utils', {
    open: () => ipcRenderer.invoke('open-file-explorer'),
    loadUserImgs: (imgsUUID) => loadUserImgs(imgsUUID),
    loadAdminImgs: (imgsUUID) => loadAdminImgs(imgsUUID)
})




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
        BooksDB.insert(item.title, item.author, Number.parseInt(item.publish_year).toString(), "");
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
        UserDB.insert(item.first_name, item.last_name);
    }
}