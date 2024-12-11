import { proxy } from "valtio";
import { Book } from "./books";
import { User } from "./users";

interface FilterState {
    visible: boolean,
}



interface BookMoreOptionsMenu {
    show: boolean,
    idx: number,
}


type PopupType = "book-book" | "filter-users" | "add-book" | "edit-book" | "add-user"
interface GStateObj {
    tabIdx: number,
    popupVis: boolean,
    popupType: PopupType,
    books: Book[],
    users: User[],
    bookMoreOptionsMenu: BookMoreOptionsMenu,
    editedBookIdx: number,
    filterState: FilterState,
}

let GState: GStateObj = proxy({
    tabIdx: 0,
    popupVis: false,
    popupType: "book-book",
    books: [],
    users: [],
    bookMoreOptionsMenu: { show: false, idx: 0 },
    editedBookIdx: 0,
    filterState: { visible: false },

});

function toggleFilterBooks() {
    GState.popupVis = true;
    GState.popupType = "book-book";
}
function toggleFilterUsers() {
    GState.popupVis = true;
    GState.popupType = "filter-users";
}
function toggleAddBook() {
    GState.popupVis = true;
    GState.popupType = "add-book";
}
function toggleEditBook(idx: number) {
    GState.popupVis = true;
    GState.popupType = "edit-book";
    GState.editedBookIdx = idx;
}
function toggleAddUser() {
    GState.popupVis = true;
    GState.popupType = "add-user";
}


export default GState;
export {
    toggleFilterBooks,
    toggleFilterUsers,
    toggleAddBook,
    toggleAddUser,
    toggleEditBook,
}