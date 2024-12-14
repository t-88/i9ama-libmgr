import GState from "./gstate";



interface Borrowed {
    id: string,
    user_id : string,
    book_id : string,
}


function addBooking(res :  string, bookID : string, userID  : string) {
    
    (window as any).db.borrowed.insert(res,bookID,userID);
}

function loadBookings() {
    const loaded = (window as any).db.borrowed.getAll();
    let borrowed: Borrowed[] = [];
    for (let i = 0; i < loaded.length; i++) {
        borrowed.push({
            id: loaded[i]["id"],
            user_id: loaded[i]["user_id"],
            book_id: loaded[i]["book_id"],
        });
    }
    GState.borrowed = borrowed;
}


export {
    addBooking,
    loadBookings
}
export type {Borrowed};