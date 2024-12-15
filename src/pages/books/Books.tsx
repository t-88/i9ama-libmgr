import "./Books.css";
import PageTransition from "../index/PageTransition";
import SearchBar from "../../comps/SearchBar";
import Table from "../../comps/Table";
import { MouseEventHandler, useEffect, useRef, useState } from "react";
import GState from "../../libs/gstate";
import { proxy, useSnapshot } from "valtio";
import Input, { InputRef } from "../../comps/Input";
import closeIMG from "../../assets/close.png";
import { validate_noComma } from "../../libs/validation";
import addIMG from "../../assets/add.png";
import sendIMG from "../../assets/send.png";
import BookState, { Book } from "../../libs/books";
import StatusSvg from "../../comps/StatusSvg";
import UsersState from "../../libs/users";
import { toggleAddBook, toggleBookABook } from "../../libs/popup";



interface BooksPageStateObj {
    filterBooked: boolean,
}
let BooksPageState: BooksPageStateObj = proxy({
    filterBooked: false,
});

function BookAvaible({ book }: { book: Book }) {
    useSnapshot(GState);
    if (book.available) return <>/</>
    const user_id = GState.borrowed.find(borrow => borrow.book_id == book.id)?.user_id;
    const user = UsersState.users.find((user) => user.id == user_id);
    return <> {user?.first_name + "    " + user?.last_name}</>
}

const columns = [
    { name: '#', selector: (row: any) => row.idx, style: { "max-width": "5%", }, },
    { name: 'عنوان', selector: (row: any) => row.title, style: { "max-width": "22.5%" }, },
    { name: 'الكاتب', selector: (row: any) => row.author, style: { "max-width": "22.5%" }, },
    { name: 'سنة النشر', selector: (row: any) => row.publish_year, style: { "max-width": "22.5%" }, },
    { name: 'العضو', selector: (row: any) => <BookAvaible book={row} />, style: { "max-width": "22.5%" }, },
    { name: '', selector: (row: any) => row.options_comp ? row.options_comp() : "", style: { "max-width": "5%" }, },

]

function Books() {
    function onAddTag() {
        if (!tagRef.current?.checkInput({ func: validate_noComma, msg: "يرجي عدم اضافة فاصلة" })) return;

        const tag = tagRef.current!.getInput();
        if (!tag || tags.includes(tag)) return;
        setTags([...tags, tag]);
        tagRef.current!.setInput("");
    }

    function onRemoveTag(tag: string) {
        tags.splice(tags.indexOf(tag), 1);
        setTags([...tags]);
    }

    function onFilterBorrowed(checked: boolean) {
        BooksPageState.filterBooked = checked;
    }

    useEffect(() => {
        GState.tabIdx = "books";
    }, []);



    const authorRef = useRef<InputRef | null>(null);
    const yearRef = useRef<InputRef | null>(null);
    const tagRef = useRef<InputRef | null>(null);


    const [tags, setTags] = useState<string[]>([]);


    useSnapshot(BooksPageState);
    useSnapshot(BookState);

    const inputStyle = "text-sm m-1";
    function BooksFilter() {
        return <div className="w-3/12 px-8 py-4 bg-white rounded shadow flex flex-col gap-4 h-fit">
            <div className="flex flex-col gap-1">
                <h1 >كاتب</h1>
                <Input ref={authorRef} className={inputStyle} placeholder="ادخل اسم الكاتب... " />
            </div>
            <div className="flex flex-col gap-1">
                <h1>سنة النشر</h1>
                <Input ref={yearRef} className={inputStyle} placeholder="ادخل سنة النشر..." />
            </div>
            <section className='flex flex-col gap-1 '>
                <h1>مواضيع</h1>
                <Input onEnter={onAddTag} ref={tagRef} className="text-sm m-1" placeholder="ادخل موضوع..." />
                <div id="filter-tags-container" className='tags-container bg-zinc-50	rounded p-2 flex flex-row flex-wrap gap-2 text-white w-full h-fit overflowx-scroll' style={{ maxHeight: "160px" }}>
                    {tags.map(tag =>
                        <section key={tag} className="tag-item relative">
                            <p className='rounded px-2 py-1 cursor-default shadow text-sm' >{tag}</p>
                            <img src={closeIMG} onClick={() => onRemoveTag(tag)} alt="closeIMG" className="tag-item-cancel absolute cursor-pointer" />

                        </section>
                    )}
                </div>
            </section>
        </div>
    }


    return <PageTransition cond={false} className="books-table h-full flex flex-col  overflow-hidden overflowy-scroll gap-4">
        <h1 className="text-3xl font-bold">الكتب:</h1>
        <StatusCards />
        <br />
        <div className="flex flex-row align-center justify-between gap-80">
            <SearchBar placeholder="ابحث عن كتاب..." />
            <section className="flex flex-row gap-2">
                <button className="interactive-button px-4  py-3 rounded shadow text-white flex gap-4 align-center justify-center h-fit" onClick={toggleAddBook

                }>
                    <img src={addIMG} height={16} width={16} alt="addIMG" className="self-center" />
                    <p className="text-2sm text-bold ">اضف كتاب</p>
                </button>
                <button className="interactive-button px-4  py-3 rounded shadow text-white flex gap-4 align-center justify-center h-fit" onClick={toggleBookABook}>
                    <img src={sendIMG} height={18} width={18} alt="addIMG" className="self-center" />
                    <p className="text-2sm text-bold ">حجز كتاب</p>
                </button>
            </section>
        </div>
        <div className=" px-14 my-2 flex gap-10">
            <div className="flex gap-4">
                <input type="checkbox" className="w-5 outline-none cursor-pointer" defaultChecked={BooksPageState.filterBooked} onClick={(e: any) => onFilterBorrowed(e.target.checked)} />
                <p className="text-xl text-bold">اظهر المحجوزة</p>
            </div>
        </div>
       
        <div className="flex w-full gap-8 h-0 grow">

            {GState.filterState.visible ? <BooksFilter /> : <></>}
            <Table columns={columns} data={!BooksPageState.filterBooked ? BookState.books : BookState.books.filter(book => !book.available)} />
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
            <p>عدد الكتب</p>
            <div></div>
            <div></div>
            <b className={cardTextCSS}>{BookState.books.length}</b>
        </div>
    <div className={cardCSS + " taken text-white"}>
            <StatusSvg className="self-end scale-125 -mb-5" />
            <p>عدد المأخودة</p>
            <div></div>
            <div></div>
            <b className={cardTextCSS}>{BookState.books.filter(book => !book.available).length}</b>
        </div>
    </section>
}

export default Books;

