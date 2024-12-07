import "./Books.css";
import PageTransition from "../index/PageTransition";
import SearchBar from "../../comps/SearchBar";
import StatusCards from "../../comps/StatusCards";
import Table from "../../comps/Table";
import { useEffect, useState } from "react";
import GState, { loadBooks } from "../../libs/gstate";
import { useSnapshot } from "valtio";

const columns = [
    {
        name: '#',
        selector: (row: any) => row.idx,
        style: { "max-width": "5%", }
    },
    {
        name: 'عنوان',
        selector: (row: any) => row.title,
        style: { "max-width": "22.5%"},
    },
    {
        name: 'الكاتب',
        selector: (row: any) => row.writer,
        style: { "max-width": "22.5%"},
    },
    {
        name: 'سنة النشر',
        selector: (row: any) => row.publish_year,
        style: { "max-width": "22.5%"},
    },
    {
        name: 'الحالة',
        selector: (row: any) =>  !row.taken ? "متوفر" : "ماخود"  ,
        style: { "max-width": "22.5%"},
    },
    {
        name: '',
        selector: (row: any) => row.options_comp(),
        style: { "max-width": "5%"},
    },
];



function Books() {
    useEffect(() => {
        loadBooks();
    },[]);

    useSnapshot(GState);

    return <div className="px-10">
        <PageTransition cond={false} >
            <StatusCards />
            <SearchBar />
            <Table columns={columns} data={GState.books}  />
        </PageTransition>

    </div>

}




export default Books;

