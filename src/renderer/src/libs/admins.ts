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


async function loadAll() {
    const fetched = await (window as any).db.admins.getAll();

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
        let {img} = (window as any).utils.loadAdminImgs(admins[i].id);
        admins[i].img = img;
    }
    AdminsState.admins = admins;
}

const AdminAction = {
    loadAll: loadAll,
    search: async (fname: string, lname: string) => await (window as any).db.admins.search(fname, lname),
    remove: async (id : string) => { await (window as any).db.admins.remove(id); },
    removeCurr: async () => { 
        await AdminAction.remove(AdminsState.admins[popupState.editedAdminIdx].id);
        await  AdminAction.loadAll();
    },
    update: async (id : string,imgsUUID : string,fname: string, lname: string, img: string) => { 
        await (window as any).db.admins.update(id,imgsUUID,fname, lname,  img);
        await AdminAction.loadAll();

    },
    add: async (fname: string, lname: string,  img: string) => {
        await (window as any).db.admins.insert(fname, lname, img);
        await AdminAction.loadAll();
    }
};


export default AdminsState;

export {
    AdminAction,
}

export type { Admin };