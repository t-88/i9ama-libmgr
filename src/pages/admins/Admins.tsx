import { proxy, useSnapshot } from "valtio";
import BookState from "../../libs/books";
import GState from "../../libs/gstate";
import UsersState, { User } from "../../libs/users";
import "./Admins.css";
import { useEffect, useRef } from "react";
import Input, { InputRef } from "../../comps/Input";
import PageTransition from "../index/PageTransition";
import SearchBar from "../../comps/SearchBar";
import Table from "../../comps/Table";
import addIMG from "../../assets/add.png";
import { toggleAddAdmin } from "../../libs/popup";
import AdminsState from "../../libs/admins";
import BookingsState from "../../libs/booking";


function ReversedBookInfo({ user }: { user: User }) {
    useSnapshot(GState);
    if (!user.reserved_book) return <>/</>
    const book_id = BookingsState.borrowed.find(borrow => borrow.user_id == user.id)?.book_id;
    const book = BookState.books.find((book) => book.id == book_id);
    return <> {book?.title}</>
}

const columns = [
    {
        name: '#',
        selector: (row: any) => row.idx,
    },
    {
        name: 'الاسم',
        selector: (row: any) => row.first_name,
    },
    {
        name: 'اللقب',
        selector: (row: any) => row.last_name,
    },
    {
        name: '',
        selector: (row: any) => row.options_comp ? row.options_comp()  : "",
    },
];




export default function Admins() {


    useEffect(() => {
        GState.tabIdx = "admins";
    }, []);

    const authorRef = useRef<InputRef | null>(null);
    const yearRef = useRef<InputRef | null>(null);



    const inputStyle = "text-sm m-1";

    function UsersFilter() {
        return <div className="w-3/12 px-8 py-4 bg-white rounded shadow flex flex-col gap-4 h-fit">
            <div className="flex flex-col gap-1">
                <h1>الاسم</h1>
                <Input ref={authorRef} className={inputStyle} placeholder="ادخل اسم... " />
            </div>
            <div className="flex flex-col gap-1">
                <h1>اللقب</h1>
                <Input ref={yearRef} className={inputStyle} placeholder="ادخل سنة النشر..." />
            </div>
        </div>
    }


    useSnapshot(AdminsState);

    return <PageTransition cond={false} className="admins-table h-full flex flex-col  overflow-hidden overflowy-scroll gap-4">
        <h1  className="text-3xl font-bold">المسؤولين:</h1>
    <br />

        <div className="flex flex-row align-center justify-between gap-80">
            <SearchBar placeholder="ابحث عن مسؤول..."  showFilter={false}/>

            <section className="flex flex-row gap-2">
                <button className="interactive-button px-4  py-3 rounded shadow text-white flex gap-4 align-center justify-center h-fit" onClick={toggleAddAdmin}>
                    <img src={addIMG} height={16} width={16} alt="addIMG" className="self-center" />
                    <p className="text-2sm text-bold ">اضف مسؤول</p>
                </button>
            </section>
        </div>
        <div className="flex w-full gap-8 h-0 grow">
            {
                GState.filterState.visible ? <UsersFilter /> : <></>
            }
            <Table columns={columns} data={AdminsState.admins} />
        </div>
    </PageTransition>

}








