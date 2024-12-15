import { proxy } from "valtio";
import OptionsComp from "../comps/OptionsComp";
import { popupState, toggleEditAdmin, toggleEditUser } from "./popup";

interface Admin {
    id: string,
    idx: string,
    first_name: string,
    last_name: string,
    img: string, 
    imgsUUID : string,
    options_comp: any,

}

interface AdminStateObj {
    admins: Admin[],
};
let AdminsState: AdminStateObj = proxy({
    admins: [],
});


function loadAll() {
    const fetched = (window as any).db.admins.getAll();
    let admins: Admin[] = [];
    for (let i = 0; i < fetched.length; i++) {
        admins.push({
            id: fetched[i]["id"],
            idx: i.toString(),
            first_name: fetched[i]["first_name"] ?? "",
            last_name: fetched[i]["last_name"] ?? "",
            imgsUUID: fetched[i]["imgsUUID"] ?? "",
            img : "",
            options_comp: () => OptionsComp({ idx: i, onClick : () => toggleEditAdmin(i) }),
        });
        let {img} = (window as any).utils.loadAdminImgs(admins[i].imgsUUID);
        admins[i].img = img;
    }
    AdminsState.admins = admins;
}

const AdminAction = {
    loadAll: loadAll,
    search: (fname: string, lname: string) => (window as any).db.admins.search(fname, lname),
    remove: (id : string) => { (window as any).db.admins.remove(id); },
    removeCurr: () => { 
        AdminAction.remove(AdminsState.admins[popupState.editedAdminIdx].id);
        AdminAction.loadAll();
    },
    update: (id : string,imgsUUID : string,fname: string, lname: string, img: string) => { 
        (window as any).db.admins.update(id,imgsUUID,fname, lname,  img);
        AdminAction.loadAll();

    },
    add: (fname: string, lname: string,  img: string) => {
        (window as any).db.admins.insert(fname, lname, img);
        AdminAction.loadAll();
    }
};


export default AdminsState;

export {
    AdminAction,
}

export type { Admin };