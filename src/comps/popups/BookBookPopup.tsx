import BgPattern from "../BgPattern";
import Input, { InputRef, inputValid } from "../Input";

import closeIMG from "../../assets/close.png";
import addIMG from "../../assets/add.png";
import GState  from "../../libs/gstate";
import { useEffect, useRef, useState } from "react";
import { useSnapshot } from "valtio";
import "./BookBookPopup.css";
import BookState, { Book } from "../../libs/books";
import UsersState, { User } from "../../libs/users";
import { validate_inputNotEmpty } from "../../libs/validation";
import { addBooking, loadBookings } from "../../libs/booking";


export default function BookBookPopup() {
    function onChangeTitle(text?: string) {
        text = text ?? bookRef.current?.getInput();
        if (!text ||  !text.length) {
            setBooks([]);
            return;
        }
        setBooks(BookState.books.filter(book => book.title.includes(text!)));
    }
    function onSelectBook(book: Book) {
        setBooks([]);
        setSelectedBook(book);
        bookRef.current?.setInput(book.title);
    }
    function onChangeName(text?: string) {
        text = text ?? userRef.current?.getInput();
        if (!text || !text.length) {
            setUsers([]);
            return;
        }
        setUsers(UsersState.users.filter(user => {
            let names = text!.split(" ");
            for (let name of names) {
                if (user.first_name.includes(name) || user.last_name.includes(name)) return true;
            }
            return false;
        }));
    }
    function onSelectUser(user: User) {
        setUsers([]);
        setSelectedUser(user);
        userRef.current?.setInput(user.first_name + ' ' + user.last_name);
    }



    function UserItems() {
        let comps = [];
        for (let user of Object.values(users)) {
            comps.push(
                <section
                    onClick={() => onSelectUser(user)}
                    key={user.id}
                    className={`cursor-pointer py-2 px-4 border-b hover:bg-stone-100 flex items-center justify-between`}
                >
                    <p >
                        {user.first_name + " " + user.last_name}
                    </p>
                </section>
            );
        }
        return <div className="absolute top-12 z-10  w-full flex flex-col bg-white rounded shadow max-h-60 overflow-y-scroll"> {comps}</div>
    }

    function BookItems() {
        let comps = [];
        for (let book of Object.values(books)) {
            comps.push(
                <section
                    onClick={() => onSelectBook(book)}
                    key={book.id}
                    className={`cursor-pointer py-2 px-4 border-b hover:bg-stone-100 flex items-center justify-between`}
                >
                    <p >
                        {book.title}
                    </p>
                    <section className="flex gap-2">
                        <p className="text-sm  text-stone-600">
                            {book.author}
                        </p>
                        <p className="text-sm text-stone-600">
                            {book.publish_year}
                        </p>
                    </section>
                </section>
            );
        }

        return <div className="absolute top-12 z-1  w-full flex flex-col bg-white rounded shadow max-h-60 overflow-y-scroll"> {comps} </div>
    }
    
    function onBlur(e : any) {
        e.stopPropagation(); 
        setUsers([]);
        setBooks([]);
    }

    function onBooking() {
        const isBookValid = bookRef.current?.checkInput([
            {func : validate_inputNotEmpty, msg : "تم ادخال اسم فارغ, يرجي ادخال اسم صحيح"},
            {func : () => { return selectedBook != undefined && bookRef.current?.getInput() == selectedBook.title;  }, msg : "تم ادخال كتاب غير معروف, تحقق من الاسم"},
        ]);
        const isUserValid = userRef.current?.checkInput([
            {func : validate_inputNotEmpty, msg : "تم ادخال اسم فارغ, يرجي ادخال اسم صحيح"},
            {func : () => { return selectedUser != undefined && userRef.current?.getInput() == selectedUser.first_name + " " + selectedUser.last_name ;  }, msg : "تم ادخال عضو غير معروف, تحقق من الاسم"},
        ]);
        const isRefValid = resRef.current?.checkInput({func: validate_inputNotEmpty, msg: "يرجى ادخال اسم المسئول"});

        if(!(isBookValid && isUserValid && isRefValid)) {
            return;
        }

        addBooking(
            resRef.current!.getInput(),
            selectedBook!.id,
            selectedUser!.id,
        );


        resRef.current?.setInput("");
        userRef.current?.setInput("");
        bookRef.current?.setInput("");
        selectedBook!.available = false;
        selectedUser!.reserved_book = true;
        setSelectedBook(null);
        setSelectedUser(null);


        loadBookings();
    }

    const resRef = useRef<InputRef | null>(null);
    const bookRef = useRef<InputRef | null>(null);
    const userRef = useRef<InputRef | null>(null);
    const [books, setBooks] = useState<Book[]>([]);
    const [selectedBook, setSelectedBook] = useState<Book | null>(null);
    const [users, setUsers] = useState<User[]>([]);
    const [selectedUser, setSelectedUser] = useState<User | null>(null);


    useSnapshot(GState);




    return <div id='book-a-book' className='filter-popup rounded shadow' onClick={(e) => { onBlur(e); }} >
        <BgPattern />
        <div className='relative z-10 w-full h-full flex flex-col gap-5 px-4 py-6' >
            <div className='self-end -mb-6 cursor-pointer w-fit h-fit' onClick={() => GState.popupVis = false}>
                <img src={closeIMG} alt="closeIMG" width={16} />
            </div>
            <h1 className='text-2xl font-bold'>حجز كتاب</h1>
            <section>
                <Input ref={resRef}  title="المسئول" placeholder="ادخل اسم المسئول... " />
                <Input ref={userRef} onChange={onChangeName}
                    callbacks={{ onClick: (e: any) => e.stopPropagation(), onFocus: (e: any) => onChangeName() }}
                     title="العضو" placeholder="ادخل اسم العضو... ">
                    <UserItems />
                </Input>
                <Input ref={bookRef}
                    callbacks={{ onClick: (e: any) => e.stopPropagation(), onFocus: (e: any) => onChangeTitle() }}
                    onChange={onChangeTitle} title="العنوان" placeholder="ادخل العنوان... ">
                    <BookItems />
                </Input>
            </section>

            <button
                onClick={onBooking}
                className='interactive-button add-book flex gap-2  self-end  rounded py-1 px-4 text-white text-lg shadow'
            >
                <img src={addIMG} height={16} width={16} alt="addIMG" className="self-center" />
                <p>حجز</p>
            </button>
        </div>
    </div>
}

