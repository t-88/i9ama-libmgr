import { proxy } from "valtio";
import OptionsComp from "../pages/books/OptionsComp";

interface Book {
    id: string,
    idx: string,
    title : string,
    author : string,
    tags : string[],
    publish_year : string,
    available : string,
    desc : string,
    options_comp : any,
}



interface BookMoreOptionsMenu {
    show: boolean,
    idx : number,
}


type PopupType = "filter-books" | "filter-users" | "add-book"  | "edit-book"| "add-user"
interface GStateObj {
    tabIdx : number,
    popupVis : boolean,
    popupType : PopupType,
    books :  Book[],
    bookMoreOptionsMenu: BookMoreOptionsMenu,
    editedBookIdx: number,
}

let GState : GStateObj = proxy({
    tabIdx : 0,
    popupVis: false,
    popupType: "filter-books",
    books: [],
    bookMoreOptionsMenu: {show : false,idx : 0},
    editedBookIdx:  0,
});

function toggleFilterBooks() {
    GState.popupVis = true;
    GState.popupType = "filter-books";
}
function toggleFilterUsers() {
    GState.popupVis = true;
    GState.popupType = "filter-users";
}
function toggleAddBook() {
    GState.popupVis = true;
    GState.popupType = "add-book";
}
function toggleEditBook(idx : number) {
    GState.popupVis = true;
    GState.popupType = "edit-book";
    GState.editedBookIdx = idx;
}
function toggleAddUser() {
    GState.popupVis = true;
    GState.popupType = "add-user";
}


function loadBooks() {
    const loadedBooks =  (window as any).db.books.getAll();
    let books : Book[] = [];
    for(let i = 0; i < loadedBooks.length; i++) {
        books.push({
            id: loadedBooks[i]["id"],
            idx : i.toString(),
            title:        loadedBooks[i]["title"] ?? "",
            author:        loadedBooks[i]["author"] ?? "",
            available :   loadedBooks[i]["available"] ?? "",
            publish_year: loadedBooks[i]["publish_year"] ?? "",
            tags: (loadedBooks[i]["tags"] as string).split(",") ?? [],
            desc: loadedBooks[i]["desc"],
            options_comp: () => OptionsComp({idx : i,id : Number.parseInt(loadedBooks[i]["id"])}),
        });
    }
    GState.books = books;
}
function addBook(title : string, author : string , publish_year: string  , tags: string) {
    (window as any).db.books.insert(title,author,publish_year,tags);
    loadBooks();
}

function removeBook() {
    (window as any).db.books.remove(GState.books[GState.editedBookIdx].id);
    loadBooks();
}

function updateBook(title : string, author : string , publish_year: string  , tags: string) {
    (window as any).db.books.update(GState.books[GState.editedBookIdx].id,title,author,publish_year,tags);
    loadBooks();
}

function searchBook(title : string, author : string , publish_year: string  , tags: string) {
    (window as any).db.books.search(title,author,publish_year,tags);

}


export default GState;
export {
    toggleFilterBooks,
    toggleFilterUsers,
    toggleAddBook,
    toggleAddUser,
    toggleEditBook,
    loadBooks,
    addBook,
    removeBook,
    updateBook,
    searchBook,
}