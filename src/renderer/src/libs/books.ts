import { proxy } from "valtio";
import OptionsComp from "../comps/OptionsComp";
import { popupState, toggleEditBook } from "./popup";
import { BookingAction } from "./booking";



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


async function parseData(data: any): Promise<any> {
    let out: any[] = []
    for (let i = 0; i < data.length; i++) {

        out.push({
            id: data[i]["id"],
            idx: i.toString(),
            title: data[i]["title"] ?? "",
            author: data[i]["author"] ?? "",
            available: data[i]["available"] ?? "",
            publish_year: Number.parseInt(data[i]["publish_year"]).toString() ?? "",
            tags: [],
            desc: data[i]["desc"],
            options_comp: () => OptionsComp({ idx: i, onClick: () => toggleEditBook(i) }),
        });
        out[i].tags = await (window as any).db.book_tags.getTagsOfBook(out[i].id);

    }
    return out;
}

async function loadAll() {
    const loadedBooks = await (window as any).db.books.getAll();
    let books: Book[] = await parseData(loadedBooks);
    BookState.books = books;
}




const BookAction = {
    loadAll: loadAll,
    search: (title: string, author: string, publish_year: string, tags: string) => {
        (window as any).db.books.search(title, author, publish_year, tags);
    },
    remove: async (id: string) => { 
        await (window as any).db.books.remove(id); 
        await BookAction.loadAll();        
    },
    removeCurr: () => {
        BookAction.remove(BookState.books[popupState.editedAdminIdx].id);
        BookAction.loadAll();
    },
    update: (title: string, author: string, publish_year: string, tags: string[],date?:  string) => {
        (window as any).db.books.update(BookState.books[popupState.editedBookIdx].id, title, author, publish_year, [...tags],date);
        BookAction.loadAll();
        BookingAction.loadAll();

    },
    add: (title: string, author: string, publish_year: string, tags: string[]) => {
        (window as any).db.books.insert(title, author, publish_year, tags);
        BookAction.loadAll();
    },
    filter: async ({ title, author, year, tags }: { title?: string, author?: string, year?: string, tags?: string[] }) => {
        title = title ?? "";
        author = author ?? "";
        year = year ?? "";
        tags = tags ?? [];




    let filtered = (window as any).db.books.filter(title, author, year, tags);
        let books: Book[] = await parseData(filtered);
        BookState.books = books;

    },

    getCurBook : function() : Book  {
        return BookState.books[popupState.editedBookIdx]
    },
    getBook: (id) => {
        return BookState.books.find(book => book.id == id);
    },
};

export default BookState;

export {
    loadAll,
    BookAction,
}

export type { Book };