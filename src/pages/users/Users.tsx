import "./Users.css";
import PageTransition from "../index/PageTransition";
import SearchBar from "../../comps/SearchBar";
import StatusCards from "../../comps/StatusCards";
import Table from "../../comps/Table";
import { useEffect, useRef, useState } from "react";
import GState from "../../libs/gstate";
import { useSnapshot } from "valtio";
import Input, { InputRef } from "../../comps/Input";
import { validate_noComma } from "../../libs/validation";
import addIMG from "../../assets/add.png";
import sendIMG from "../../assets/send.png";
import { addUser, loadUsers } from "../../libs/users";


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
        selector: (row: any) => "/",
        style: { "max-width": "22.5%" },
    },
    {
        name: '',
        selector: (row: any) => row.options_comp(),
    },
];



function Users() {
    function BooksFilter() {
        return <div className="w-3/12 px-8 py-4 bg-white rounded shadow flex flex-col gap-4 h-fit">
            <div className="flex flex-col gap-1">
                <h1>الاسم</h1>
                <Input ref={authorRef} className={inputStyle} errorMsg="تم ادخال اسم فارغ, يرجي ادخال اسم صحيح" placeholder="ادخل اسم... " />
            </div>
            <div className="flex flex-col gap-1">
                <h1>اللقب</h1>
                <Input ref={yearRef} className={inputStyle} errorMsg="يرجى ادخال عام نشر صحيح" placeholder="ادخل سنة النشر..." />
            </div>
        </div>
    }



    useEffect(() => {
        GState.tabIdx = 1;
        loadUsers();
    }, []);

    const authorRef = useRef<InputRef | null>(null);
    const yearRef = useRef<InputRef | null>(null);

    useSnapshot(GState);

    const inputStyle = "text-sm m-1";


    return <PageTransition cond={false} className="users-table h-full flex flex-col  overflow-hidden overflowy-scroll gap-4">
        <StatusCards />
        <h1 className="text-3xl font-bold">الاعضاء:</h1>
        <div className="flex flex-row align-center justify-between gap-80">
            <SearchBar placeholder="ابحث عن عضو..." />
            <section className="flex flex-row gap-2">
                <button className="px-4  py-3 rounded shadow text-white flex gap-4 align-center justify-center h-fit" onClick={() => {}}>
                    <img src={addIMG} height={16} width={16} alt="addIMG" className="self-center" />
                    <p className="text-2sm text-bold ">اضف عضو</p>
                </button>
                <button className="px-4  py-3 rounded shadow text-white flex gap-4 align-center justify-center h-fit" onClick={() => {}}>
                    <img src={sendIMG} height={18} width={18} alt="addIMG" className="self-center" />
                    <p className="text-2sm text-bold ">حجز كتاب</p>
                </button>
            </section>
        </div>
        <div className="flex w-full gap-8 h-0 grow">
            {
                GState.filterState.visible ? <BooksFilter /> : <></>
            }
            <Table columns={columns} data={GState.users} />
        </div>
    </PageTransition>

}







export default Users;

