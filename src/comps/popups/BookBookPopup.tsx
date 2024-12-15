import BgPattern from "../BgPattern";
import Input, { InputRef, inputValid } from "../Input";

import closeIMG from "../../assets/close.png";
import addIMG from "../../assets/add.png";
import moreIMG from "../../assets/more.png";
import GState from "../../libs/gstate";
import { ChangeEvent, ForwardedRef, forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import { useSnapshot } from "valtio";
import "./BookBookPopup.css";
import BookState, { Book, BookAction } from "../../libs/books";
import UsersState, { User } from "../../libs/users";
import { validate_inputNotEmpty } from "../../libs/validation";
import { popupState } from "../../libs/popup";
import { BookingAction } from "../../libs/booking";



const INPUT_WIDTH = "w-40";
type DateSelOption = "manual" | "week" | "2week" | "month";


function getDate(offset?: any) {
    offset = offset ?? 0;
    const today = new Date();
    const offseted = new Date();
    offseted.setDate(today.getDate() + offset);

    const yyyy = offseted.getFullYear();
    let mm: any = offseted.getMonth() + 1; // Months start at 0!
    let dd: any = offseted.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    return yyyy + "/" + mm + "/" + dd;
}

export default function BookBookPopup() {
    function onChangeTitle(text?: string) {
        text = text ?? bookRef.current?.getInput();
        if (!text || !text.length) {
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


    function DateSelector() {

        function selectDate(option: DateSelOption) {
            setDateOption(option);
            switch (option) {
                case "week": setDateInput({ title: "بعد اسبوع", date: getDate(7) }); break;
                case "2week": setDateInput({ title: "بعد اسبوعين", date: getDate(14) }); break;
                case "month": setDateInput({ title: "بعد شهر", date: getDate(30) }); break;
            }
            setDateRec(false);
        }

        const sharedStyle = "cursor-pointer py-2 px-4 border-b hover:bg-stone-100 flex items-center justify-between";
        return <div className="date-selection absolute top-12 left-0 z-1  w-full flex flex-col bg-white rounded shadow max-h-60 overflow-y-scroll">
            <p onClick={() => selectDate("manual")} className={sharedStyle}>اختر تاريخ محدد</p>
            <p onClick={() => selectDate("week")} className={sharedStyle}>بعد اسبوع</p>
            <p onClick={() => selectDate("2week")} className={sharedStyle}>بعد اسبوعين</p>
            <p onClick={() => selectDate("month")} className={sharedStyle}>بعد شهر</p>
        </div>
    }



    function onBlur(e: any) {
        e.stopPropagation();
        setUsers([]);
        setBooks([]);
        setDateRec(false);
    }

    function onBooking() {
        const isBookValid = bookRef.current?.checkInput([
            { func: validate_inputNotEmpty, msg: "تم ادخال اسم فارغ, يرجي ادخال اسم صحيح" },
            { func: () => { return selectedBook != undefined && bookRef.current?.getInput() == selectedBook.title; }, msg: "تم ادخال كتاب غير معروف, تحقق من الاسم" },
        ]);
        const isUserValid = userRef.current?.checkInput([
            { func: validate_inputNotEmpty, msg: "تم ادخال اسم فارغ, يرجي ادخال اسم صحيح" },
            { func: () => { return selectedUser != undefined && userRef.current?.getInput() == selectedUser.first_name + " " + selectedUser.last_name; }, msg: "تم ادخال عضو غير معروف, تحقق من الاسم" },
        ]);
        const isRefValid = resRef.current?.checkInput({ func: validate_inputNotEmpty, msg: "يرجى ادخال اسم المسئول" });

        if (!(isBookValid && isUserValid && isRefValid)) {
            return;
        }

        BookingAction.add(
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

    }

    const resRef = useRef<InputRef | null>(null);
    const bookRef = useRef<InputRef | null>(null);
    const userRef = useRef<InputRef | null>(null);
    const dateRef = useRef();

    const [books, setBooks] = useState<Book[]>([]);
    const [selectedBook, setSelectedBook] = useState<Book | null>(null);
    const [users, setUsers] = useState<User[]>([]);
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const [dateRec, setDateRec] = useState(false);
    const [dateOption, setDateOption] = useState("week");
    const [dateInput, setDateInput] = useState({ title: "بعد اسبوع", date: getDate(7) });




    useSnapshot(GState);



    return <div id='book-a-book' className='filter-popup rounded shadow' onClick={(e) => { onBlur(e); }} >
        <BgPattern />
        <div className='relative z-10 w-full h-full flex flex-col gap-5 px-4 py-6' >
            <div className='self-end -mb-6 cursor-pointer w-fit h-fit' onClick={() => popupState.popupVis = false}>
                <img src={closeIMG} alt="closeIMG" width={16} />
            </div>
            <h1 className='text-2xl font-bold'>حجز كتاب</h1>
            <section>
                <Input titleClassName={`${INPUT_WIDTH}`} ref={resRef} title="المسئول" placeholder="ادخل اسم المسئول... " />
                <Input titleClassName={`${INPUT_WIDTH}`} ref={userRef} onChange={onChangeName}
                    callbacks={{ onClick: (e: any) => e.stopPropagation(), onFocus: (e: any) => onChangeName() }}
                    title="العضو" placeholder="ادخل اسم العضو... ">
                    <UserItems />
                </Input>
                <Input titleClassName={`${INPUT_WIDTH}`} ref={bookRef}
                    callbacks={{ onClick: (e: any) => e.stopPropagation(), onFocus: (e: any) => onChangeTitle() }}
                    onChange={onChangeTitle} title="العنوان" placeholder="ادخل العنوان... ">
                    <BookItems />
                </Input>


                <div
                    className="popup-input relative flex  gap-2 text-lg m-4 pl-1 bg-white rounded shadow overflow-hidden"
                    onClick={(e: any) => e.stopPropagation()}
                >
                    <p className={`title text-white font-bold flex items-center justify-center cursor-default  rounded-r ${INPUT_WIDTH}`}  >تاريخ الارجاع</p>
                    <div className="flex item-center p-2 w-full" >
                        {
                            dateOption == "manual" ? <DateInput ref={dateRef} /> : <>
                                <p>{dateInput.title}</p>
                                <p className="text-end flex-1 mx-2 justify-self-end">{dateInput.date}</p>

                            </>
                        }




                        {dateRec ? <DateSelector /> : <></>}

                    </div>
                    <div className="self-center pl-2 cursor-pointer" onClick={(e: any) => setDateRec(true)}>
                        <img className="w-6" src={moreIMG} alt="moreIMG" />
                    </div>
                </div>




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



const DateInput = forwardRef(function ({ }, ref: ForwardedRef<any>) {
    useImperativeHandle(ref, (): any => {
        return {
            getInput: (): { day: string, month: string, year: string } => {
                return { day: dayRef.current!.value, month: monthRef.current!.value, year: yearRef.current!.value };
            }
        };
    });

    const dayRef = useRef<HTMLInputElement | null>(null);
    const monthRef = useRef<HTMLInputElement | null>(null);
    const yearRef = useRef<HTMLInputElement | null>(null);

    const [year, month, day] = getDate().split("/")

    let limitInput = (ref: any, max: number) => ref.current!.value = Math.max(1, Math.min(max, Number.parseInt(ref.current!.value)));
    return <div className="w-64 flex flex-row gap-1">
        <input ref={dayRef} onChange={(e) => limitInput(dayRef, 30)} maxLength={2} className="w-12 text-center  border rounded px-2" defaultValue={day} placeholder="dd" type="text" />/
        <input ref={monthRef} onChange={(e) => limitInput(monthRef, 12)} maxLength={2} className="w-12 text-center  border rounded px-2" defaultValue={month} placeholder="mm" type="text" />/
        <input ref={yearRef} maxLength={4} className="w-16 text-center border rounded px-2" defaultValue={year} placeholder="yyyy" type="text" />
    </div>
});