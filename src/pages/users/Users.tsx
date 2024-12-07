import PageTransition from "../index/PageTransition";
import "./Books.css";
import searchIMG from "../../assets/search.png";
import filterIMG from "../../assets/slider.png";
import addIMG from "../../assets/add.png";
import moreIMG from "../../assets/more.png";

import DataTable from 'react-data-table-component';
import GState, { toggleAddBook, toggleAddUser, toggleFilterBooks } from "../../libs/gstate";
import { useEffect } from "react";

const columns = [
    {
        name: '#',
        selector: (row: any) => row.id,
        maxWidth: "10px",
    },
    {
        name: 'الاسم',
        selector: (row: any) => row.year,
        maxWidth: "25%",
    },
    {
        name: 'اللقب',
        selector: (row: any) => row.year,
        maxWidth: "25%",
    },
    {
        name: 'الحالة',
        selector: (row: any) => row.year,
        maxWidth: "25%",
    },

    {
        name: 'الكتاب',
        selector: (row: any) => "/",
        maxWidth: "25%",
    },
    {
        name: '',
        selector: (row: any) => row.comp,
        maxWidth: "10px",
    },
];

const data = [
    {
        id: 1,
        year: 'دين اسلام كى محاسن من محاسنمحاسنمحاسن الدين الإسلامي',
        comp: <img src={moreIMG} alt="moreIMG" className="cursor-pointer" />,
    },
    {
        id: 2,
        title: 'Ghostbusters',
        comp: <img src={moreIMG} alt="moreIMG" />,
        year: '1984',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        comp: <img src={moreIMG} alt="moreIMG" />,
        year: '1984',
    }, {
        id: 2,
        title: 'Ghostbusters',
        comp: <img src={moreIMG} alt="moreIMG" />,
        year: '1984',
    }, {
        id: 2,
        title: 'Ghostbusters',
        comp: <img src={moreIMG} alt="moreIMG" />,
        year: '1984',
    }, {
        id: 2,
        title: 'Ghostbusters',
        comp: <img src={moreIMG} alt="moreIMG" />,
        year: '1984',
    }, {
        id: 2,
        title: 'Ghostbusters',
        comp: <img src={moreIMG} alt="moreIMG" />,
        year: '1984',
    }, {
        id: 2,
        title: 'Ghostbusters',
        comp: <img src={moreIMG} alt="moreIMG" />,
        year: '1984',
    }, {
        id: 2,
        title: 'Ghostbusters',
        comp: <img src={moreIMG} alt="moreIMG" />,
        year: '1984',
    }, {
        id: 2,
        title: 'Ghostbusters',
        comp: <img src={moreIMG} alt="moreIMG" />,
        year: '1984',
    },
]

function SVG_icon({ className }: { className: string }) {
    return <svg className={className} width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="26" height="26" rx="4" fill="#8AC389" fill-opacity="0.1" />
        <rect x="0.5" y="0.5" width="25" height="25" rx="3.5" stroke="#D6E8ED" stroke-opacity="0.5" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M13 6.66718C12.8399 6.66718 12.6864 6.72783 12.5732 6.8358C12.46 6.94376 12.3964 7.0902 12.3964 7.24289V13C12.3964 13.318 12.6666 13.5757 13 13.5757H19.0357C19.3691 13.5757 19.6393 13.318 19.6393 13C19.6393 12.1684 19.4675 11.3449 19.1339 10.5765C18.8002 9.8082 18.3112 9.11007 17.6947 8.52202C17.0782 7.93396 16.3462 7.46749 15.5407 7.14923C14.7352 6.83098 13.8719 6.66718 13 6.66718ZM13.6035 12.4243V7.85068C14.1097 7.90466 14.6064 8.02637 15.0788 8.21301C15.7378 8.4734 16.3367 8.85506 16.8411 9.3362C17.3455 9.81733 17.7456 10.3885 18.0186 11.0172C18.2143 11.4677 18.3419 11.9415 18.3985 12.4243H13.6035Z" fill="#8AC389" />
        <path d="M10.7868 9.23194C11.1011 9.12598 11.2658 8.79707 11.1547 8.49729C11.0437 8.1975 10.6988 8.04038 10.3845 8.14634C8.04108 8.93639 6.36066 11.0681 6.36066 13.5757C6.36066 16.7553 9.06295 19.3328 12.3964 19.3328C15.0253 19.3328 17.2602 17.73 18.0885 15.4947C18.1996 15.1949 18.0349 14.866 17.7206 14.76C17.4063 14.6541 17.0615 14.8112 16.9504 15.111C16.2872 16.9006 14.4979 18.1814 12.3964 18.1814C9.72964 18.1814 7.5678 16.1194 7.5678 13.5757C7.5678 11.5713 8.91059 9.86448 10.7868 9.23194Z" fill="#8AC389" />
    </svg>
}



function Books() {
    useEffect(() => {
        GState.tabIdx = 1;
    })
    return <div className="px-10">
        <PageTransition cond={false} >
            <StatusCards />
            <SearchBar />
            <Table />
        </PageTransition>

    </div>

}

function StatusCards() {
    const cardCSS = "card cursor-pointer h-fit w-100 bg-white shadow  p-4 text-xl  flex flex-col gap-1 rounded-lg w-56"
    const cardTextCSS = "self-center text-2xl";

    return <section className="cards  w-full flex flex-row align-center justify-center w-auto gap-16">
        <br />
        <div className={cardCSS}>
            <SVG_icon className="self-end scale-125 -mb-5" />
            <p>عدد الاعضاء</p>
            <div></div>
            <div></div>
            <b className={cardTextCSS}>100</b>
        </div>
        <div className={cardCSS + " taken text-white"}>
            <SVG_icon className="self-end scale-125 -mb-5" />
            <p>عدد الاخدين</p>
            <div></div>
            <div></div>
            <b className={cardTextCSS}>5</b>
        </div>
    </section>
}

function SearchBar() {
    return <section className="search-bar-container">
        <h1 className="text-3xl font-bold">الاعضاء:</h1>
        <br />
        <div className="px-16 flex flex-row justify-between">
            <div className="search-bar bg-white rounded flex gap-4  w-4/6 shadow">
                <div className="self-center icon-r px-4 h-full flex">
                    <img src={searchIMG} alt="searchIMG" className="self-center" />
                </div>
                <input type="text" className=" w-full text-2sm" placeholder="ابحث عن عضو..." />

            </div>
            <button className="px-4 mx-16 py-3 rounded shadow text-white flex gap-4 align-center justify-center h-fit" onClick={() => toggleAddUser()}>
                <img src={addIMG} height={16} width={16} alt="addIMG" className="self-center" />
                <p className="text-2sm text-bold ">اضف عضو </p>
            </button>
        </div>
    </section>;
}

function Table() {
    return <section className="px-8 rounded  ">
        <br />
        <div className="table-container ">
            <DataTable
                className="table shadow "
                columns={columns}
                data={data}
            />
        </div>
    </section>

}

export default Books;