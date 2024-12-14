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


type PopupType = "book-book" | "edit-user" | "add-book" | "edit-book" | "add-user"
interface GStateObj {
    tabIdx: number,
    popupVis: boolean,
    popupType: PopupType,
    borrowed: Borrowed[],
    bookMoreOptionsMenu: BookMoreOptionsMenu,
    editedBookIdx: number,
    editedUserIdx: number,
    filterState: FilterState,
}




let GState: GStateObj = proxy({
    tabIdx: 0,
    popupVis: false,
    popupType: "book-book",
    borrowed: [],
    bookMoreOptionsMenu: { show: false, idx: 0 },
    editedBookIdx: 0,
    editedUserIdx: 0,
    filterState: { visible: false },

});



function toggleBookABook() {
    GState.popupVis = true;
    GState.popupType = "book-book";
}
function toggleAddBook() {
    GState.popupVis = true;
    GState.popupType = "add-book";
}
function toggleAddUser() {
    GState.popupVis = true;
    GState.popupType = "add-user";
}

function toggleEditBook(idx: number) {
    GState.popupVis = true;
    GState.popupType = "edit-book";
    GState.editedBookIdx = idx;
}
function toggleEditUser(idx: number) {
    GState.popupVis = true;
    GState.popupType = "edit-user";
    GState.editedUserIdx = idx;
}



export default GState;
export {
    toggleBookABook,
    toggleAddBook,
    toggleAddUser,
    toggleEditBook,
    toggleEditUser,
}