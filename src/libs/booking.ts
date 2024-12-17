import { proxy } from "valtio";
import GState from "./gstate";

interface Borrowed {
    id: string,
    user_id: string,
    book_id: string,
    admin_id : string,
    return_date : string,
}

interface BookingsStateObj {
    borrowed: Borrowed[],
};

let BookingsState: BookingsStateObj = proxy({
    borrowed: [],
});

function loadAll() {
    const loaded = (window as any).db.borrowed.getAll();
    let borrowed: Borrowed[] = [];
    for (let i = 0; i < loaded.length; i++) {
        borrowed.push({
            id: loaded[i]["id"],
            user_id: loaded[i]["user_id"],
            book_id: loaded[i]["book_id"],
            admin_id: loaded[i]["admin_id"],
            return_date: loaded[i]["return_date"],
        });
    }
    BookingsState.borrowed = borrowed;
}


const BookingAction = {
    loadAll: loadAll,
    add: (bookID: string, userID: string,adminID: string, return_date : string) => {
        (window as any).db.borrowed.insert(bookID, userID,adminID,return_date);
        BookingAction.loadAll();
    },
    getFromBookId : (book_id : string) => {
        return  BookingsState.borrowed.find((booked)=>  booked.book_id == book_id);
        
    }
};

export default BookingsState;

export {
    BookingAction
}
export type { Borrowed };