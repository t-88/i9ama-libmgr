
import fs from "fs";
import * as AdminsTableInterface from "./interfaces/admin"
import * as UsersTableInterface from "./interfaces/user"
import * as BooksTableInterface from "./interfaces/books"
import * as ReservedBooksTableInterface from "./interfaces/reserved_books"


export async function loadUserImgs(id) {
  try {

    if (!fs.existsSync("users")) {
      return undefined;
    }

    let img_personal = "data:image/png;base64," + fs.readFileSync(`users/${id}_img_personal.png`).toString("base64");
    let img_card_personal = "data:image/png;base64," + fs.readFileSync(`users/${id}_img_card_personal.png`).toString("base64");
    let img_card_residency = "data:image/png;base64," + fs.readFileSync(`users/${id}_img_card_residency.png`).toString("base64");
    let img_school_certificate = "data:image/png;base64," + fs.readFileSync(`users/${id}_img_school_certificate.png`).toString("base64"); 
    return {
      img_personal,
      img_card_personal,
      img_card_residency,
      img_school_certificate,
    };
  } catch (e) {
    console.error("ERROR: failed to load user imgs", e);
  }
}
export function loadAdminImgs(imgsUUID) {
  try {
    if (!fs.existsSync("admins")) { fs.mkdirSync("admins"); }
    if (!fs.existsSync(`admins/${imgsUUID}.json`)) { return ""; }
    let buffer = fs.readFileSync(`admins/${imgsUUID}.json`);
    return JSON.parse(new TextDecoder("utf-8").decode(buffer));
  } catch (e) {
    console.error("ERROR: failed to load user imgs", e);
  }
}
export function saveBase64Image(base64String, filePath) {
  const base64Data = base64String.replace(/^data:image\/png;base64,/, '');
  const imageBuffer = Buffer.from(base64Data, 'base64');
  fs.writeFile(filePath, imageBuffer, (err) => {
  });
}


export function drop() {
  AdminsTableInterface.drop();
  UsersTableInterface.drop();
  BooksTableInterface.drop();
  ReservedBooksTableInterface.drop();
}
