import { proxy } from "valtio";
import OptionsComp from "../comps/OptionsComp";
import GState, { toggleEditBook }  from "./gstate";



interface Book {
    id: string,
    idx: string,
    title: string,
    author: string,
    tags: string[],
    publish_year: string,
    available: boolean,
    desc: string,
    options_comp: any,
}


interface BookStateObj {
    books : Book[],
};
let BookState :  BookStateObj = proxy({
    books : [],
});


function loadBooks() {
    const loadedBooks = (window as any).db.books.getAll();
    let books: Book[] = [];
    for (let i = 0; i < loadedBooks.length; i++) {
        books.push({
            id: loadedBooks[i]["id"],
            idx: i.toString(),
            title: loadedBooks[i]["title"] ?? "",
            author: loadedBooks[i]["author"] ?? "",
            available: loadedBooks[i]["available"] ?? "",
            publish_year: loadedBooks[i]["publish_year"] ?? "",
            tags: (loadedBooks[i]["tags"] as string).split(",") ?? [],
            desc: loadedBooks[i]["desc"],
            options_comp: () => OptionsComp({ idx: i, onClick: () => toggleEditBook(i)}),
        });
    }
    BookState.books = books;
}
function addBook(title: string, author: string, publish_year: string, tags: string) {
    (window as any).db.books.insert(title, author, publish_year, tags);
    loadBooks();
}

function removeBook() {
    (window as any).db.books.remove(BookState.books[GState.editedBookIdx].id);
    loadBooks();
}

function updateBook(title: string, author: string, publish_year: string, tags: string) {
    (window as any).db.books.update(BookState.books[GState.editedBookIdx].id, title, author, publish_year, tags);
    loadBooks();
}

function searchBook(title: string, author: string, publish_year: string, tags: string) {
    (window as any).db.books.search(title, author, publish_year, tags);
}



export default BookState;

export {
    loadBooks,
    addBook,
    removeBook,
    updateBook,
    searchBook,
}

export type {Book};