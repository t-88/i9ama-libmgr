import OptionsComp from "../comps/OptionsComp";
import GState from "./gstate";


interface User {
    id: string,
    idx : string,
    first_name : string,
    last_name : string,
    options_comp : any,
}

function loadUsers() {
    const fetched = (window as any).db.users.getAll();
    let users: User[] = [];
    for (let i = 0; i < fetched.length; i++) {
        users.push({
            id: fetched[i]["id"],
            idx: i.toString(),
            first_name: fetched[i]["first_name"] ?? "",
            last_name: fetched[i]["last_name"] ?? "",
            options_comp: () => OptionsComp({ idx: i, id: Number.parseInt(fetched[i]["id"]) }),
        });
    }
    GState.users = users;
}
function addUser() {
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
        for(let item of data) {
        (window as any).db.users.insert(item.first_name,item.last_name);
    }


    // (window as any).db.users.insert(fname, lname);
    // loadUsers();

}



function removeUser() {
    // (window as any).db.users.remove(GState.users[GState.editedBookIdx].id);
    loadUsers();
}

function updateUser(fname: string, lname: string) {
    // (window as any).db.users.update(GState.users[GState.editedBookIdx].id, title, author, publish_year, tags);
    loadUsers();
}

function searchUser(fname: string, lname: string) {
    (window as any).db.users.search(fname, lname);
}


export {
    loadUsers,
    addUser,
    removeUser,
    updateUser,
    searchUser,
}

export type {User};