import { proxy } from "valtio";
import OptionsComp from "../comps/OptionsComp";
import { popupState, toggleEditUser } from "./popup";

interface User {
    id: string,
    idx: string,
    first_name: string,
    last_name: string,
    school : string,
    reserved_book: number | null,
    img: string, 
    idImg: string, 
    schoolIdImg: string, 
    schoolPaper: string,
    imgsUUID : string,
    options_comp: any,

}

interface UserStateObj {
    users: User[],
};
let UsersState: UserStateObj = proxy({
    users: [],
});


async function loadAll() {
    const fetched = await (window as any).db.users.getAll();
    let users: User[] = [];
    for (let i = 0; i < fetched.length; i++) {
        users.push({
            id: fetched[i]["id"],
            idx: i.toString(),
            first_name: fetched[i]["first_name"] ?? "",
            last_name: fetched[i]["last_name"] ?? "",
            school: fetched[i]["school"] ?? "",
            imgsUUID: fetched[i]["imgsUUID"] ?? "",
            reserved_book: fetched[i]["reserved_book"] ?? null,
            img : "",
            idImg : "",
            schoolIdImg : "",
            schoolPaper : "",
            options_comp: () => OptionsComp({ idx: i, onClick : toggleEditUser }),
        });
        let {img,idImg,schoolIdImg,schoolPaper} = (window as any).utils.loadUserImgs(users[i].imgsUUID);
        users[i].img = img;
        users[i].idImg = idImg;
        users[i].schoolIdImg = schoolIdImg;
        users[i].schoolPaper = schoolPaper;
    }
    UsersState.users = users;
}

const UserAction = {
    loadAll: loadAll,
    search: (fname: string, lname: string) => (window as any).db.users.search(fname, lname),
    remove: async (id : string) => { 
        await (window as any).db.users.remove(id); 
        UserAction.loadAll();
    },
    removeCurr: async () => { 
        await UserAction.remove(UsersState.users[popupState.editedAdminIdx].id);
        await UserAction.loadAll();
    },
    update: (id : string,imgsUUID : string,fname: string, lname: string, school: string, img: string, idImg: string, schoolIdImg: string, schoolPaper: string) => { 
        (window as any).db.users.update(id,imgsUUID,fname, lname, school, img, idImg, schoolIdImg, schoolPaper);
        UserAction.loadAll();
    },
    add: (data)  => { // fname: string, lname: string, school: string, img: string, idImg: string, schoolIdImg: string, schoolPaper: string) => {
        const parseData = JSON.parse(JSON.stringify(data));
        (window as any).db.users.insert(parseData); 
        // fname, lname, school, img, idImg, schoolIdImg, schoolPaper);
        // UserAction.loadAll();
        console.log()
    },
    getUser : (id) => {
        return UsersState.users.find(user => user.id == id);
    },
    getCurUser: () => {
     return UsersState.users[popupState.editedUserIdx];

    }
};


export default UsersState;

export {
    UserAction,
}

export type { User };