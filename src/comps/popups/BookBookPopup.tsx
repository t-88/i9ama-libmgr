import BgPattern from "../BgPattern";
import Input, { InputRef } from "../Input";

import closeIMG from "../../assets/close.png";
import addIMG from "../../assets/add.png";
import GState from "../../libs/gstate";
import { useEffect, useRef, useState } from "react";
import { useSnapshot } from "valtio";
import "./BookBookPopup.css";
import { Book } from "../../libs/books";


export default function BookBookPopup() {
    function onChangeTitle(text: string) {
        if (!text.length) {
            setBooks([]);
            return;
        }
        setBooks(GState.books.filter(book => book.title.includes(text)));
    }
    function onSelectBook(book : Book ) {
        setBooks([]);
        setSelectedBook(book);
        bookRef.current?.setInput(book.title);
    }

    const bookRef = useRef<InputRef | null>(null);

    const [books, setBooks] = useState<Book[]>([]);
    const [selectedBook , setSelectedBook] = useState<Book | null>(null);

    useSnapshot(GState);



    return <div id='book-add-edit-popup' className='filter-popup rounded shadow' onClick={(e) => e.stopPropagation()} >
        <BgPattern />
        <div className='relative z-10 w-full h-full flex flex-col gap-5 px-4 py-6' >
            <div className='self-end -mb-6 cursor-pointer w-fit h-fit' onClick={() => GState.popupVis = false}>
                <img src={closeIMG} alt="closeIMG" width={16} />
            </div>
            <h1 className='text-2xl font-bold'>حجز كتاب</h1>
            <section>
                <Input ref={bookRef} errorMsg="تم ادخال اسم فارغ, يرجي ادخال اسم صحيح" title="المسئول" placeholder="ادخل اسم المسئول... " />
                <Input ref={bookRef} errorMsg="تم ادخال اسم فارغ, يرجي ادخال اسم صحيح" title="العضو" placeholder="ادخل اسم العضو... " />
                <Input ref={bookRef} onChange={onChangeTitle} errorMsg="تم ادخال اسم فارغ, يرجي ادخال اسم صحيح" title="العنوان" placeholder="ادخل العنوان... ">
                    <div className="absolute top-12  w-full flex flex-col bg-white rounded shadow max-h-60 overflow-y-scroll">
                        {
                            (() => {
                                let comps = [];
                                for (let book of Object.values(books)) {
                                    comps.push(
                                        <section 
                                                onClick={() => onSelectBook(book)}
                                                key={book.title + book.author + book.publish_year} 
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
                                return comps;
                            })()
                        }
                    </div>
                </Input>
            </section>

            <button
                onClick={() => { }}
                className='add-book flex gap-2  self-end  rounded py-1 px-4 text-white text-lg shadow'
            >
                <img src={addIMG} height={16} width={16} alt="addIMG" className="self-center" />
                <p>حجز</p>
            </button>
        </div>
    </div>
}

