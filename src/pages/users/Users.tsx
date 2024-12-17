import "./Users.css";
import PageTransition from "../index/PageTransition";
import SearchBar from "../../comps/SearchBar";
import Table from "../../comps/Table";
import { useEffect, useRef, useState } from "react";
import { proxy, useSnapshot } from "valtio";
import Input, { InputRef } from "../../comps/Input";
import addIMG from "../../assets/add.png";
import sendIMG from "../../assets/send.png";
import UsersState, {  User } from "../../libs/users";
import StatusSvg from "../../comps/StatusSvg";
import GState  from "../../libs/gstate";
import BookState from "../../libs/books";
import { toggleAddUser, toggleBookABook } from "../../libs/popup";
import BookingsState from "../../libs/booking";


function ReversedBookInfo({ user }: { user: User }) {
    useSnapshot(BookingsState);
    if (!user.reserved_book) return <>/</>
    const booked_info = BookingsState.borrowed.find(borrow => borrow.user_id == user.id)!;
    const book_id = BookingsState.borrowed.find(borrow => borrow.user_id == user.id)?.book_id;
    const book = BookState.books.find((book) => book.id == book_id);
    let passed_release = new Date() >= new Date(booked_info.return_date);
    return <p className={`${passed_release ? "text-red-600" : ""}`}> {book!.title} </p>
}

const columns = [
    {
        name: '#',
        selector: (row: any) => row.idx,
        style: { "max-width": "5%", },
    },
    {
        name: 'الاسم',
        selector: (row: any) => row.first_name,
        style: { "max-width": "22.5%" },
    },
    {
        name: 'اللقب',
        selector: (row: any) => row.last_name,
        style: { "max-width": "22.5%" },
    },
    {
        name: 'الكتاب المحجوز',
        selector: (row: User) => <ReversedBookInfo user={row} />,
        style: { "max-width": "22.5%" },
    },
    {
        name: '',
        selector: (row: any) => row.options_comp ? row.options_comp()  : "",
    },
];



interface UsersPageStateObj {
    filterBookers: boolean,
}
let UsersPageState: UsersPageStateObj = proxy({
    filterBookers: false,
});



function Users() {

    function onFilterBorrowed(checked: boolean) {
        UsersPageState.filterBookers = checked;
    }



    useEffect(() => {
        GState.tabIdx = "users";
    }, []);

    const authorRef = useRef<InputRef | null>(null);
    const yearRef = useRef<InputRef | null>(null);

    useSnapshot(UsersPageState);
    useSnapshot(UsersState);


    const inputStyle = "text-sm m-1";

    
    return <PageTransition cond={false} className="users-table h-full flex flex-col  overflow-hidden overflowy-scroll gap-4">
        <h1 className="tab-title text-3xl font-bold">الاعضاء:</h1>
        <StatusCards />
    <br />

        <div className="flex flex-row align-center justify-between gap-80">
            <SearchBar placeholder="ابحث عن عضو..."  showFilter={false}/>
            <section className="flex flex-row gap-2">
                <button className="interactive-button px-4  py-3 rounded shadow text-white flex gap-4 align-center justify-center h-fit" onClick={toggleAddUser}>
                    <img src={addIMG} height={16} width={16} alt="addIMG" className="self-center" />
                    <p className="text-2sm text-bold ">اضف عضو</p>
                </button>
            <button className="interactive-button px-4  py-3 rounded shadow text-white flex gap-4 align-center justify-center h-fit" onClick={toggleBookABook}>
                    <img src={sendIMG} height={18} width={18} alt="addIMG" className="self-center" />
                    <p className="text-2sm text-bold ">حجز كتاب</p>
                </button>
            </section>
        </div>
        <div className=" px-14 my-2 flex gap-10">

            <div className="flex gap-4">
                <input type="checkbox" className="w-5 outline-none cursor-pointer" defaultChecked={UsersPageState.filterBookers} onClick={(e: any) => onFilterBorrowed(e.target.checked)} />
                <p className="text-xl text-bold">اظهر المحجوزة</p>
            </div>
        </div>
        <div className="flex w-full gap-8 h-0 grow">
            <Table columns={columns} data={!UsersPageState.filterBookers ?  UsersState.users : UsersState.users.filter(user => user.reserved_book)} />
        </div>
    </PageTransition>

}






function StatusCards() {
    const cardCSS = "card cursor-pointer h-fit w-100 bg-white shadow  p-4 text-xl  flex flex-col gap-1 rounded-lg w-56"
    const cardTextCSS = "self-center text-2xl";

    return <section className="cards  w-full flex flex-row align-center justify-center w-auto gap-16">
        <br />
        <div className={cardCSS}>
            <StatusSvg className="self-end scale-125 -mb-5" />
            <p>عدد الاعضاء</p>
            <div></div>
            <div></div>
            <b className={cardTextCSS}>{UsersState.users.length}</b>
        </div>
        <div className={cardCSS + " taken text-white"}>
            <StatusSvg className="self-end scale-125 -mb-5" />
            <p>عدد الحاجزين</p>
            <div></div>
            <div></div>
            <b className={cardTextCSS}>{UsersState.users.filter(user => user.reserved_book).length}</b>
        </div>
    </section>
}



export default Users;

