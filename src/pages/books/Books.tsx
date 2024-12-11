import "./Books.css";
import PageTransition from "../index/PageTransition";
import SearchBar from "../../comps/SearchBar";
import StatusCards from "../../comps/StatusCards";
import Table from "../../comps/Table";
import { useEffect, useRef, useState } from "react";
import GState, { loadBooks } from "../../libs/gstate";
import { useSnapshot } from "valtio";
import Input, { InputRef } from "../../comps/Input";
import closeIMG from "../../assets/close.png";
import { validate_noComma } from "../../libs/validation";


const columns = [
    {
        name: '#',
        selector: (row: any) => row.idx,
        style: { "max-width": "5%", }
    },
    {
        name: 'عنوان',
        selector: (row: any) => row.title,
        style: { "max-width": "22.5%" },
    },
    {
        name: 'الكاتب',
        selector: (row: any) => row.author,
        style: { "max-width": "22.5%" },
    },
    {
        name: 'سنة النشر',
        selector: (row: any) => row.publish_year,
        style: { "max-width": "22.5%" },
    },
    {
        name: 'الحالة',
        selector: (row: any) => !row.taken ? "متوفر" : "ماخود",
        style: { "max-width": "22.5%" },
    },
    {
        name: '',
        selector: (row: any) => row.options_comp(),
        style: { "max-width": "5%" },
    },
];



function Books() {
    function onAddTag() {
        if (!tagRef.current?.checkInput(validate_noComma)) return;

        const tag = tagRef.current!.getInput();
        if (!tag || tags.includes(tag)) return;
        setTags([...tags, tag]);
        tagRef.current!.setInput("");
    }

    function onRemoveTag(tag: string) {
        tags.splice(tags.indexOf(tag), 1);
        setTags([...tags]);
    }

    useEffect(() => {
        loadBooks();
    }, []);

    const titleRef = useRef<InputRef | null>(null);
    const authorRef = useRef<InputRef | null>(null);
    const yearRef = useRef<InputRef | null>(null);
    const tagRef = useRef<InputRef | null>(null);

    useSnapshot(GState);

    const inputStyle = "text-sm m-1";
    const [tags, setTags] = useState<string[]>([]);


    return <PageTransition cond={false} className="h-full flex flex-col  overflow-hidden overflowy-scroll gap-4">

    {/* // <div className="px-8 h-full"> */}
        <StatusCards />
        <SearchBar />
        <div className="flex w-full px-2 gap-8 h-0 grow">
            <div className="w-3/12 px-8 py-4 bg-white rounded shadow flex flex-col gap-4 h-fit">
                <div className="flex flex-col gap-1">
                    <h1>كاتب</h1>
                    <Input ref={authorRef} className={inputStyle} errorMsg="تم ادخال اسم فارغ, يرجي ادخال اسم صحيح" placeholder="ادخل اسم الكاتب... " />
                </div>

                <div className="flex flex-col gap-1">
                    <h1>سنة النشر</h1>
                    <Input ref={yearRef} className={inputStyle} errorMsg="يرجى ادخال عام نشر صحيح" placeholder="ادخل سنة النشر..." />
                </div>

                <section className='flex flex-col gap-1 '>
                    <h1>مواضيع</h1>
                    <Input onEnter={onAddTag} ref={tagRef} errorMsg="يرجي عدم اضافة فاصلة" className="text-sm m-1" placeholder="ادخل موضوع..." />
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
            <Table columns={columns} data={GState.books} />
        </div>
    </PageTransition>

    // </div>

}




export default Books;

