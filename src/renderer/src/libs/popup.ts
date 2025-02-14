import { proxy } from "valtio";
import UsersState, { UserAction } from "./users";
import BookState from "./books";


type PopupType = "book-book" 
                | "add-user" | "edit-user" 
                | "add-book" | "edit-book" 
                | "add-admin" | "edit-admin"
                | "backup-db-online"; 
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
async function toggleEditUser(idx: number) {
    const {img_personal, img_card_personal, img_card_residency, img_school_certificate,} = await (window as any).db.helper.loadUserImgs(UsersState.users[idx].id);
    UsersState.users[idx].img_personal = img_personal;
    UsersState.users[idx].img_card_personal = img_card_personal;
    UsersState.users[idx].img_card_residency = img_card_residency;
    UsersState.users[idx].img_school_certificate = img_school_certificate;


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

function toggleBackupPopup() {
    popupState.popupVis = true;
    popupState.popupType = "backup-db-online";
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
    toggleBackupPopup,
    popupState,
}

