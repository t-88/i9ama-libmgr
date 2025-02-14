import { Storage, File } from 'megajs'
import fs, { readFileSync, writeFileSync } from "fs"
import crypto from "crypto";
import * as helpers from './helpers'
import db, { loadDB, sqlite } from './db';

const MEGA_ENC_PASSWORD = ""
const ALGORTHIM = ""
const EMAIL = ""
const PASSWORD = ""




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

        console.log('Upload successful:', file);
    } catch (error) {
        console.error('Upload failed:', error);
    }
}




export function uploadDB() {
    const fn = `data-${Date.now()}.db`;
    return uploadFile("data.db", fn)
        .then(() => `Database uploaded as ${fn}`)
        .catch(error => {
            console.error("Upload failed:", error);
            throw error;
        });
}

export function downloadDB() {
    return new Storage({
        email: EMAIL,
        password: PASSWORD,
        allowUploadBuffering: true,
    }).ready.then(storage => {
        let latestDate = null;
        let latestDateKey = "";

        Object.keys(storage.files).forEach(file => {
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



        return downloadFile(storage.files[latestDateKey].name).then(db => {
            try {
                if (!fs.existsSync("downloaded-dbs")) { fs.mkdirSync("downloaded-dbs"); }
                if (!fs.existsSync("backup-dbs")) { fs.mkdirSync("backup-dbs"); }
                writeFileSync("downloaded-dbs/" + storage.files[latestDateKey].name, db);
                writeFileSync("data-version.db", "downloaded-dbs/" + storage.files[latestDateKey].name);
                return `Database saved as ${storage.files[latestDateKey].name}`;
            } catch(e) {
                console.log("ERROR downloading the file",e)
            }
        });


    });

}

export async function switchDB() {
    if (!fs.existsSync("downloaded-dbs")) { fs.mkdirSync("downloaded-dbs"); }
    if (!fs.existsSync("backup-dbs")) { fs.mkdirSync("backup-dbs"); }

    let formattedDate = new Date().toLocaleString().replace(",", "-");
    formattedDate = formattedDate.replaceAll("/", ".").replaceAll(" ", "");

    let db_fn = readFileSync("data-version.db").toString("utf8");
    fs.copyFileSync(db_fn,"data.db");
    loadDB("data.db");
}