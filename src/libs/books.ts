import { proxy } from "valtio";
import OptionsComp from "../comps/OptionsComp";
import { popupState, toggleEditBook } from "./popup";



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
    books: Book[],
};
let BookState: BookStateObj = proxy({
    books: [],
});


function loadAll() {
    const loadedBooks = (window as any).db.books.getAll();
    let books: Book[] = [];
    for (let i = 0; i < loadedBooks.length; i++) {

        // let tags = loadedBooks[i]["tags"].length == 0 ? []  : (loadedBooks[i]["tags"] as string).split(",")
        books.push({
            id: loadedBooks[i]["id"],
            idx: i.toString(),
            title: loadedBooks[i]["title"] ?? "",
            author: loadedBooks[i]["author"] ?? "",
            available: loadedBooks[i]["available"] ?? "",
            publish_year: Number.parseInt(loadedBooks[i]["publish_year"]).toString() ?? "",
            tags: [],
            desc: loadedBooks[i]["desc"],
            options_comp: () => OptionsComp({ idx: i, onClick: () => toggleEditBook(i) }),
        });
        books[i].tags = (window as any).db.book_tags.getTagsOfBook(books[i].id);

    }
    BookState.books = books;
}




const BookAction = {
    loadAll: loadAll,
    search: (title: string, author: string, publish_year: string, tags: string) => {
        (window as any).db.books.search(title, author, publish_year, tags);
    },
    remove: (id: string) => { (window as any).db.users.remove(id); },
    removeCurr: () => {
        BookAction.remove(BookState.books[popupState.editedAdminIdx].id);
        BookAction.loadAll();
    },
    update: (title: string, author: string, publish_year: string, tags: string[]) => {
        (window as any).db.books.update(BookState.books[popupState.editedBookIdx].id, title, author, publish_year, [...tags]);
        BookAction.loadAll();

    },
    add: (title: string, author: string, publish_year: string, tags: string[]) => {
        (window as any).db.books.insert(title, author, publish_year, tags);
        BookAction.loadAll();
    }
};

export default BookState;

export {
    loadAll,
    BookAction,
}

export type { Book };