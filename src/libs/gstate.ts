import { proxy } from "valtio";
import { Book } from "./books";
import { User } from "./users";
import { Borrowed } from "./booking";
import { devtools } from 'valtio/utils'

interface FilterState {
    visible: boolean,
}

interface BookMoreOptionsMenu {
    show: boolean,
    idx: number,
}


type NavTabName = "books" | "users" | "admins";

interface GStateObj {
    tabIdx: NavTabName,
    bookMoreOptionsMenu: BookMoreOptionsMenu,
    filterState: FilterState,
}

let GState: GStateObj = proxy({
    tabIdx: "books",
    borrowed: [],
    bookMoreOptionsMenu: { show: false, idx: 0 },
    filterState: { visible: false },
});




export default GState;

export type {
    NavTabName
}