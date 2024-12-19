const sqlite3 = require("better-sqlite3");
const { contextBridge, ipcRenderer } = require("electron");
const fs = require('node:fs');
const { randomUUID } = require("node:crypto");


const db = new sqlite3("main.db");


function ignoreError(callback) {
    try { callback(); }
    catch(e) {}
}


const TagsDB = {
    create: () => {
        const stmt = db.prepare(`CREATE TABLE tags(
            id INTEGER PRIMARY KEY,
            name TEXT
        )`);
        stmt.run();
    },
    drop: () => {
        ignoreError(() => {
            db.prepare(`DROP TABLE tags`).run()
        } );
    },
    get: (name) => {
        const stmt = db.prepare(`SELECT * from tags
                                 WHERE name LIKE ?
                                 `);
        return stmt.all([name]);
    },
    insert: (tag) => {
        // insert if not found
        // tags found
        found = TagsDB.get(tag); 
        if(found.length != 0) { return Object.values(found).map(item => item.id); }
        const stmt = db.prepare("INSERT INTO tags(name) VALUES (?)");
        return stmt.run([tag]).lastInsertRowid
    },
    insertAll: (tags) => {
        tags_ids = [];
        // insert all tags
        for(let tag of tags) { 
            let tag_id =  TagsDB.insert(tag);
            
            // can return inserted item id, or list of already existing items 
            if(typeof(tag_id) == "number") { tags_ids.push(Number.parseInt(tag_id)) }
            else { 
                tags_ids = tags_ids.concat(tag_id.map(id => Number.parseInt(id))); 
            }

        }
        return tags_ids;
    },
    getAll: () => {
        const stmt = db.prepare("SELECT * FROM tags");
        return stmt.all();
    },
};

const BookTagsDB = {
    create: () => {
        const stmt = db.prepare(`CREATE TABLE book_tags(
            id INTEGER PRIMARY KEY,
            book_id INTEGER,
            tag_id INTEGER,
            FOREIGN KEY(book_id) REFERENCES books(id)
            FOREIGN KEY(tag_id) REFERENCES tags(id)
        )`);
        stmt.run();
    },
    drop: () => {
        ignoreError(() =>  db.prepare(`DROP TABLE book_tags`).run()); 
    },
    insert: (book_id,tags_ids) => {

        for(let tag_id of tags_ids) {
            const stmt = db.prepare("INSERT INTO book_tags(book_id,tag_id) VALUES (?,?)");
            stmt.run([book_id,tag_id]);
        }
    },

    getAll: () => {
        const stmt = db.prepare("SELECT * FROM book_tags");
        return stmt.all();
    },

    getTagsOfBook: (book_id) => {
        const stmt = db.prepare(`SELECT t.name  
            FROM book_tags bt JOIN tags t 
            ON bt.tag_id = t.id 
            WHERE bt.book_id = ?`);
        return stmt.all([book_id]).map(tag => tag.name);

        // const stmt = db.prepare("SELECT tag_id FROM book_tags WHERE book_id = ?");
        // let query =  stmt.all([book_id]);
        // console.log(query);
    },
    update : (id, tags) => {
        // delete all tags related to that book 
        db.prepare("delete from book_tags where book_id = ?").run([id]);
        let tags_ids = TagsDB.insertAll(tags);
        BookTagsDB.insert(id,tags_ids);
    }
}

const BorrowBooksDB = {
    create: () => {
        const stmt = db.prepare(`CREATE TABLE borrowbooks(
            id INTEGER PRIMARY KEY,
            user_id INTEGER,
            book_id INTEGER,
            admin_id INTGER,
            return_date DATETIME,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY(user_id) REFERENCES users(id)
            FOREIGN KEY(book_id) REFERENCES books(id)
            FOREIGN KEY(admin_id) REFERENCES admins(id)
        )`);
        stmt.run();
    },
    drop: () => {
        ignoreError(() => {
            db.prepare(`DROP TABLE borrowbooks`).run();
        })
    },
    insert: (bookID, userID,adminID,return_date) => {

        const update_user = db.prepare(`UPDATE users SET reserved_book = 1 WHERE id = ?`);
        update_user.run([userID]);

        const update_books = db.prepare(`UPDATE books SET available = 0 WHERE id = ?`);
        update_books.run([bookID]);

        const stmt = db.prepare("INSERT INTO borrowbooks(book_id,user_id,admin_id,return_date) VALUES (?,?,?,?)");
        stmt.run([bookID, userID,adminID,return_date]);
    },
    getAll: () => {
        const stmt = db.prepare("SELECT * FROM borrowbooks");
        return stmt.all();
    },
};
const BooksDB = {
    create: () => {
        const stmt = db.prepare(`
            CREATE TABLE books(
                id INTEGER PRIMARY KEY,
                author VARCHAR(64) DEFAULT "" NOT NULL,
                title VARCHAR(64) DEFAULT "" NOT NULL,
                desc TEXT DEFAULT "" NOT NULL,
                available INT DEFAULT 1,
                publish_year VARCHAR(10), 
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )`);
        stmt.run();
    },
    insert: (title, author, publish_year, tags) => {
        let tags_ids = TagsDB.insertAll(tags);
        
        const stmt = db.prepare("INSERT INTO books(title,author,publish_year) VALUES (?,?,?)");
        let book_id =  stmt.run([title, author, publish_year]).lastInsertRowid;

        BookTagsDB.insert(book_id,tags_ids);
    },
    update: (id, title, author, publish_year, tags) => {
        BookTagsDB.update(id,tags);
        // const stmt = db.prepare(`UPDATE books 
        //                          SET title = ? ,author = ? ,publish_year = ?
        //                          WHERE id = ?
        //                          `);
        // stmt.run([title, author, publish_year, id]);
    },
    search: (title, author, publish_year, tags) => {
        const stmt = db.prepare(`SELECT title , author , publish_year from books
                                 WHERE title LIKE ? AND
                                       author LIKE ? AND
                                       publish_year LIKE ? 
                                 `);
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
};
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
        try {
            // remove constraints first
            BookTagsDB.drop(); BookTagsDB.create();
            BorrowBooksDB.drop(); BorrowBooksDB.create();

            TagsDB.drop();  TagsDB.create();
            AdminDB.drop(); AdminDB.create();
            UserDB.drop(); UserDB.create();
            BooksDB.drop(); BooksDB.create();
        } catch(e) {
            console.log("[ERROR]" ,e);
        }
        
    },
    books_fillDB: books_fillDB,
    users_fillDB: users_fillDB,
}


contextBridge.exposeInMainWorld("db", {
    users: UserDB,
    books: BooksDB,
    admins: AdminDB,
    borrowed: BorrowBooksDB,
    tags: TagsDB,
    book_tags: BookTagsDB,
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




