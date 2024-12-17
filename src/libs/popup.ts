import { proxy } from "valtio";


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
function toggleAddUser() {
    popupState.popupVis = true;
    popupState.popupType = "add-user";
}
function toggleEditUser(idx: number) {
    popupState.popupVis = true;
    popupState.popupType = "edit-user";
    popupState.editedUserIdx = idx;
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
    hidePopup,
    popupState,
}

