
import fs from "fs";


export function loadUserImgs(imgsUUID) {
    try {
        if (!fs.existsSync("users")) {fs.mkdirSync("users");}
        if (!fs.existsSync(`users/${imgsUUID}.json`)) { return "";}
        let buffer = fs.readFileSync(`users/${imgsUUID}.json`);
        return JSON.parse(new TextDecoder("utf-8").decode(buffer));
    } catch (e) {
        console.error("ERROR: failed to load user imgs", e);
    }
}
export function loadAdminImgs(imgsUUID) {
    try {
        if (!fs.existsSync("admins")) {fs.mkdirSync("admins");}
        if (!fs.existsSync(`admins/${imgsUUID}.json`)) { return "";}
        let buffer = fs.readFileSync(`admins/${imgsUUID}.json`);
        return JSON.parse(new TextDecoder("utf-8").decode(buffer));
    } catch (e) {
        console.error("ERROR: failed to load user imgs", e);
    }
}