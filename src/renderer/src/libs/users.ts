import { proxy } from "valtio";
import OptionsComp from "../comps/OptionsComp";
import { popupState, toggleEditUser } from "./popup";

interface User {
    id: string,
    idx: string,
    first_name: string,
    last_name: string,
    uuid: string,
    date_of_birth: string,
    al_wilaya: string,
    phone_number: string,
    fb_name_or_link: string,
    school: string,
    email: string,
    residense_block_number: string,
    residense_room_number: string,
    school_matericule: string,
    year_of_study: string,
    study_specialty: string,
    options_comp: any,
    reserved_book : number,
    img_personal: string | null,
    img_card_personal: string | null,
    img_card_residency: string | null,
    img_school_certificate: string | null,
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
            ...fetched[i],
            options_comp: () =>  OptionsComp({ idx: i, onClick: toggleEditUser }),
        });
    }
    UsersState.users = users;
}

const UserAction = {
    loadAll: loadAll,
    search: (fname: string, lname: string) => (window as any).db.users.search(fname, lname),
    remove: async (id: string) => {
        await (window as any).db.users.remove(id);
        UserAction.loadAll();
    },
    removeCurr: async () => {
        await UserAction.remove(UsersState.users[popupState.editedAdminIdx].id);
        await UserAction.loadAll();
    },
    update: async (id: string, data : any) => { 
        const parseData = JSON.parse(JSON.stringify(data));
        await (window as any).db.users.update(id, parseData); 
        await UserAction.loadAll();
    },
    add: async (data) => {
        const parseData = JSON.parse(JSON.stringify(data));
        await (window as any).db.users.insert(parseData);
        await UserAction.loadAll();
    },
    getUser: (id) => {
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