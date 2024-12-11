import BgPattern from "../BgPattern";
import Input, { InputRef } from "../Input";

import closeIMG from "../../assets/close.png";
import addIMG from "../../assets/add.png";
import GState, { addBook, removeBook, searchBook, updateBook } from "../../libs/gstate";
import { useEffect, useRef, useState } from "react";
import { useSnapshot } from "valtio";
import "./AddBookPopup.css";


function validate_EmptyOrNumber(text: string) {
  var pattern = /^\d+\.?\d*$/;
  return text.length == 0 || pattern.test(text); 
}
function validate_noComma(text: string) {
  return !text.includes(",");
}


export default function AddBookPopup() {
  function onSearchBook() {
    let titleValid = (titleRef.current as any).checkInput();
    let authorValid = (authorRef.current as any).checkInput();
    let yearValid = (yearRef.current as any).checkInput(validate_EmptyOrNumber);

    if (!(titleValid && authorValid && yearValid)) return;

    searchBook(titleRef.current!.getInput(), authorRef.current!.getInput(), yearRef.current!.getInput(), tags.join(","));
  }

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
  

  const titleRef = useRef<InputRef | null>(null);
  const authorRef = useRef<InputRef | null>(null);
  const yearRef = useRef<InputRef | null>(null);
  const tagRef = useRef<InputRef>(null);
  const [tags, setTags] = useState<string[]>([]);
  useSnapshot(GState);



  return <div id='book-add-edit-popup' className='filter-popup rounded shadow' onClick={(e) => e.stopPropagation()} >
    <BgPattern />
    <div className='absolute z-10 w-full h-full flex flex-col gap-5 px-4 py-6' >
      <div className='self-end -mb-6 cursor-pointer w-fit h-fit' onClick={() => GState.popupVis = false}>
        <img src={closeIMG} alt="closeIMG" width={16} />
      </div>
      <h1 className='text-2xl font-bold'>البحث كتاب</h1>
      <section>
        <Input ref={titleRef} errorMsg="تم ادخال اسم فارغ, يرجي ادخال اسم صحيح" title="العنوان" placeholder="ادخل العنوان... " />
        <Input ref={authorRef} errorMsg="تم ادخال اسم فارغ, يرجي ادخال اسم صحيح" title="الكاتب" placeholder="ادخل اسم الكاتب... " />
        <Input ref={yearRef} errorMsg="يرجى ادخال عام نشر صحيح" title="سنة النشر" placeholder="ادخل سنة النشر..." />
      </section>
      <h1 className='text-2xl font-bold'>مواضيع</h1>
      <section className='flex flex-auto	 w-full flex-col gap-5'>
        <Input ref={tagRef} errorMsg="يرجي عدم اضافة فاصلة" className={"my-0 shrink-0"} onEnter={onAddTag} title="موضوع" placeholder="ادخل موضوع..." />
        <div className=' tags-container bg-zinc-50	rounded p-2 flex flex-row flex-wrap gap-2 text-white w-full h-fit overflowy-scroll' style={{ maxHeight: "160px" }}>
          {tags.map(tag =>
            <section key={tag} className="tag-item relative">
              <p className='rounded px-6 py-2 cursor-default shadow' >{tag}</p>
              <img src={closeIMG} onClick={() => onRemoveTag(tag)} alt="closeIMG" className="tag-item-cancel absolute cursor-pointer" />

            </section>
          )}
        </div>
      </section>
      <button
        onClick={onSearchBook}
        className='add-book flex gap-2  self-end  rounded py-1 px-4 text-white text-lg shadow'
      >
        <img src={addIMG} height={16} width={16} alt="addIMG" className="self-center" />
        <p>البحث</p>
      </button>
    </div>
  </div>
}

