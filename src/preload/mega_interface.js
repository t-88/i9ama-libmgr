import { Storage, File } from 'megajs'
import fs, { readFileSync, writeFileSync } from "fs"
import crypto from "crypto";
import * as helpers from './helpers'
import db, { loadDB, sqlite } from './db';

let MEGA_ENC_PASSWORD = ""
let EMAIL = ""
let PASSWORD = ""
let ALGORITHM = ""



function loadConfig() {

    const data = fs.readFileSync(".env", 'utf-8');
    const config = JSON.parse(data);

    MEGA_ENC_PASSWORD = config.MEGA_ENC_PASSWORD || "";
    EMAIL = config.EMAIL || "";
    PASSWORD = config.PASSWORD || "";
    ALGORITHM = config.ALGORITHM || "";
}


async function encryptFileToBuffer(inputPath) {
    const key = crypto.scryptSync(MEGA_ENC_PASSWORD, "salt", 32);
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv(ALGORITHM, key, iv);
    try {
        const fileData = fs.readFileSync(inputPath);
        const encrypted = Buffer.concat([cipher.update(fileData), cipher.final()]);
        return Buffer.concat([iv, encrypted]);
    } catch (error) {
        console.error("Encryption failed:", error);
        throw error;
    }
}
async function decryptFileToBuffer(inputPath) {
    try {
        const fileData = fs.readFileSync(inputPath);
        return decryptBufferToBuffer(fileData);
    } catch (error) {
        console.error("Decryption failed:", error);
        throw error;
    }
}
async function decryptBufferToBuffer(inputBuffer) {
    const key = crypto.scryptSync(MEGA_ENC_PASSWORD, "salt", 32);

    try {
        const fileData = inputBuffer;
        const iv = fileData.slice(0, 16);
        const encryptedContent = fileData.slice(16);
        const decipher = crypto.createDecipheriv(ALGORITHM, key, iv);
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
        stream.on('data', chunk => chunks.push(chunk));
        stream.on('end', () => resolve(Buffer.concat(chunks)));
        stream.on('error', reject);
    });
}




export async function downloadFile(fn) {

    const storage = await new Storage({
        email: EMAIL,
        password: PASSWORD,
        allowUploadBuffering: true,
    }).ready
    try {
        const file = storage.files[Object.keys(storage.files).find((file) => storage.files[file].name == fn)];
        const stream = file.download();
        const buffer = await streamToBuffer(stream);
        const decrypted = await decryptBufferToBuffer(buffer);
        return decrypted;
    } catch (error) {
        console.error('Download error:', error);
        throw error;
    }

}

export async function uploadFile(fn, store_fn) {
    try {

        const storage = await new Storage({
            email: EMAIL,
            password: PASSWORD,
            allowUploadBuffering: true,
        }).ready;


        const fileBuffer = await encryptFileToBuffer(fn);
        const stream = storage.upload({ name: store_fn, allowUploadBuffering: true });



        stream.end(fileBuffer);
        const file = await stream.complete;
    } catch (error) {
    }
}




export function uploadDB() {
    loadConfig();


    const fn = `data-${Date.now()}.db`;
    return uploadFile("data.db", fn)
        .then(() => `Database uploaded as ${fn}`)
        .catch(error => {
            console.error("Upload failed:", error);
            throw error;
        });
}

export function downloadDB() {
    loadConfig();
    const info = loadJsonFile("info.json");

    return new Storage({
        email: EMAIL,
        password: PASSWORD,
        allowUploadBuffering: true,
    }).ready.then(storage => {
        let latestDate = null;
        let latestDateKey = "";



        Object.keys(storage.files).forEach(file => {
            let name = storage.files[file].name;
            console.log(name);
            if (name.startsWith("data-")) {
                const timestamp = extractIDFromDB(name);
                const dateObject = new Date(Number.parseInt(timestamp));
                if (!latestDate || dateObject > latestDate) {
                    latestDate = dateObject;
                    latestDateKey = file;
                }
            }
        });

        if (!latestDateKey) {
            throw new Error("No valid database file found.");
        }



        return downloadFile(storage.files[latestDateKey].name).then(async (db) => {
            try {
                if (!fs.existsSync(info.download_db_dir)) { fs.mkdirSync(info.download_db_dir); }
                if (!fs.existsSync(info.backup_db_dir)) { fs.mkdirSync(info.backup_db_dir); }

                const last_db_id_in_storage = extractIDFromDB(storage.files[latestDateKey].name);
                if(last_db_id_in_storage == info.last_db_id) {
                    console.log("YOU HAVE THE LASTEST VERSION");
                    return;
                }

                writeFileSync(`${info.download_db_dir}/` + storage.files[latestDateKey].name, db);
                info.last_db_id = extractIDFromDB(storage.files[latestDateKey].name);
                saveJsonToFile("info.json",info);
                return `Database saved as ${storage.files[latestDateKey].name}`;
            } catch (e) {
                console.log("ERROR downloading the file", e)
            }
        });


    });
}

function extractIDFromDB(fn) {
    return fn.substring("data-".length, fn.length - 3);
}

async function getFileHash(filePath, algorithm = 'sha256') {
    return new Promise((resolve, reject) => {
        const hash = crypto.createHash(algorithm);
        const stream = fs.createReadStream(filePath);

        stream.on('data', (chunk) => hash.update(chunk));
        stream.on('error', (err) => reject(err));
        stream.on('end', () => resolve(hash.digest('hex')));
    });
}

function loadJsonFile(fn) {
    try {
        const data = fs.readFileSync(fn, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        return null;
    }
}

async function saveJsonToFile(filePath, data) {
    try {
        const jsonData = JSON.stringify(data, null, 2);
        fs.writeFileSync(filePath, jsonData, 'utf8');
    } catch (error) {
        return null;
    }
}



export async function switchDB() {
    const info = loadJsonFile("info.json");

    if (!fs.existsSync(info.download_db_dir)) { fs.mkdirSync(info.download_db_dir); }
    if (!fs.existsSync(info.backup_db_dir)) { fs.mkdirSync(info.backup_db_dir); }



    let db_fn = info.download_db_dir + "/" + "data-" + info.last_db_id + ".db";
    if(!fs.existsSync(db_fn)) {
        console.log("ERROR: DB DOESNT EXISTS")
        return 1;
    }
    
    fs.copyFileSync("data.db", `${info.backup_db_dir}/data-${Date.now()}.db`);
    fs.copyFileSync(db_fn, "data.db");
    loadDB("data.db");
    return 0;
}