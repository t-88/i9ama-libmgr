import { proxy } from "valtio";
import UsersState from "./users";
import BookState from "./books";


type PopupType = "book-book" 
                | "add-user" | "edit-user" 
                | "add-book" | "edit-book" 
                | "add-admin" | "edit-admin" 
type NavTabName = "books" | "users" | "admins";

interface PopupStateObj {
    popupVis: boolean,
    popupType: PopupType,
    editedBookIdx: number,
    editedUserIdx: number,
    editedAdminIdx: number,
}

let popupState: PopupStateObj = proxy({
    popupVis: false,
    popupType: "book-book",
    editedBookIdx: 0,
    editedAdminIdx: 0,
    editedUserIdx: 0,
});

function toggleBookABook() {
    popupState.popupVis = true;
    popupState.popupType = "book-book";
}
function toggleAddBook() {
    popupState.popupVis = true;
    popupState.popupType = "add-book";
}
function toggleEditBook(idx: number) {
    popupState.popupVis = true;
    popupState.popupType = "edit-book";
    popupState.editedBookIdx = idx;
}
function toggleEditBookID(id: string) {
    for(let i = 0; i <   BookState.books.length; i++) {
        if(BookState.books[i].id == id) {
            toggleEditBook(i);
            break;
        }
    }
}

function toggleAddUser() {
    popupState.popupVis = true;
    popupState.popupType = "add-user";
}
function toggleEditUser(idx: number) {
    popupState.popupVis = true;
    popupState.popupType = "edit-user";
    popupState.editedUserIdx = idx;
}
function toggleEditUserID(id: string) {
    for(let i = 0; i <   UsersState.users.length; i++) {
        if(UsersState.users[i].id == id) {
            toggleEditUser(i);
            break;
        }
    }
}

function toggleAddAdmin() {
    popupState.popupVis = true;
    popupState.popupType = "add-admin";
}
function toggleEditAdmin(idx: number) {
    popupState.popupVis = true;
    popupState.popupType = "edit-admin";
    popupState.editedAdminIdx = idx;
}


function hidePopup() {
    popupState.popupVis = false;
}

export {
    toggleBookABook,
    toggleAddBook,
    toggleAddUser,
    toggleAddAdmin,
    toggleEditBook,
    toggleEditUser,
    toggleEditAdmin,
    toggleEditUserID,
    hidePopup,
    toggleEditBookID,
    popupState,
}

