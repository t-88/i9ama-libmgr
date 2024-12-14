import BgPattern from "../BgPattern";
import Input, { InputRef } from "../Input";

import closeIMG from "../../assets/close.png";
import addIMG from "../../assets/add.png";
import GState  from "../../libs/gstate";
import { useEffect, useRef, useState } from "react";
import { useSnapshot } from "valtio";
import "./AddBookPopup.css";
import { validate_inputNotEmpty, validate_inputNumber, validate_noComma } from "../../libs/validation";
import BookState, { addBook, removeBook, updateBook } from "../../libs/books";



export default function AddBookPopup() {
  function onAddBook() {
    let titleValid =  titleRef.current?.checkInput({func: validate_inputNotEmpty, msg: "تم ادخال اسم فارغ, يرجي ادخال اسم صحيح"});
    let authorValid =  authorRef.current?.checkInput({func: validate_inputNotEmpty,  msg : "تم ادخال اسم فارغ, يرجي ادخال اسم صحيح"});
    let yearValid =  yearRef.current?.checkInput({func: validate_inputNumber, msg: "يرجى ادخال عام نشر صحيح"});
    if(!(titleValid && authorValid && yearValid) ) return;

    addBook(titleRef.current!.getInput(), authorRef.current!.getInput(), yearRef.current!.getInput(),tags.join(","));
    titleRef.current!.setInput("");
    authorRef.current!.setInput("");
    yearRef.current!.setInput("");
  }

  function onRemoveBook() {
    removeBook();
    GState.popupVis = false;
  }

  function onUpateBook() {
    let titleValid =  (titleRef.current as any).checkInput(validate_inputNotEmpty);
    let authorValid =  (authorRef.current as any).checkInput(validate_inputNotEmpty);
    let yearValid =  (yearRef.current as any).checkInput(validate_inputNumber);
    
    if(!(titleValid && authorValid && yearValid) ) return;

    updateBook(titleRef.current!.getInput(), authorRef.current!.getInput(), yearRef.current!.getInput(),tags.join(","));
  } 

  function onAddTag() {
    if(!tagRef.current?.checkInput({func: validate_noComma , msg : "يرجي عدم اضافة فاصلة"})) return;

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
    if (GState.popupType == "edit-book") {
      titleRef.current!.setInput(BookState.books[GState.editedBookIdx].title);
      authorRef.current!.setInput(BookState.books[GState.editedBookIdx].author);
      yearRef.current!.setInput(BookState.books[GState.editedBookIdx].publish_year);
      setTags(BookState.books[GState.editedBookIdx].tags);
    }
  }, [GState.popupType]);


  const titleRef = useRef<InputRef | null>(null);
  const authorRef = useRef<InputRef | null>(null);
  const yearRef = useRef<InputRef | null>(null);
  const tagRef = useRef<InputRef>(null);
  const [tags, setTags] = useState<string[]>([]);
  useSnapshot(GState);




  return <div id='book-add-edit-popup' className='filter-popup rounded shadow w-2/4' onClick={(e) => e.stopPropagation()} >
      <BgPattern />
      <div className='relative z-10 w-full h-full flex flex-col gap-5 px-4 py-6' >
      <div className='self-end -mb-6 cursor-pointer w-fit h-fit' onClick={() => GState.popupVis = false}>
        <img src={closeIMG} alt="closeIMG" width={16} />
      </div>
      <h1 className='text-2xl font-bold'>اضافة كتاب</h1>
      <section>
        <Input ref={titleRef}   title="العنوان" placeholder="ادخل العنوان... " />
        <Input ref={authorRef}  title="الكاتب" placeholder="ادخل اسم الكاتب... " />
        <Input ref={yearRef}   title="سنة النشر" placeholder="ادخل سنة النشر..." />
      </section>
      <h1 className='text-2xl font-bold'>مواضيع</h1>
      <section className='flex flex-auto	 w-full flex-col gap-5'>
        <Input ref={tagRef}  className={"my-0 shrink-0"} onEnter={onAddTag} title="موضوع" placeholder="ادخل موضوع..." />
        <div className=' tags-container bg-zinc-50	rounded p-2 flex flex-row flex-wrap gap-2 text-white w-full h-fit overflowy-scroll' style={{ maxHeight: "160px" }}>
          {tags.map(tag =>
            <section key={tag} className="tag-item relative">
              <p className='rounded px-6 py-2 cursor-default shadow' >{tag}</p>
              <img src={closeIMG} onClick={() => onRemoveTag(tag)} alt="closeIMG" className="tag-item-cancel absolute cursor-pointer" />
            </section>
          )}
        </div>
      </section>

      <ActionButtons onAddBook={onAddBook} onUpateBook={onUpateBook} onRemoveBook={onRemoveBook} />

    </div>
  </div>;
}


function ActionButtons({ onAddBook, onUpateBook, onRemoveBook }: { onAddBook: any, onUpateBook: any, onRemoveBook: any }) {

  if (GState.popupType == "add-book") {
    return <button
      onClick={onAddBook}
      className='interactive-button add-book flex gap-2  self-end  cursor-pointer rounded py-1 px-4 text-white text-lg shadow'
    >
      <img src={addIMG} height={16} width={16} alt="addIMG" className="self-center" />
      <p>اضافة</p>
    </button>;

  }

  return <div className="flex flex-row self-end gap-4">
    <button
      onClick={onUpateBook}
      className='interactive-button add-book  flex gap-2    rounded py-1 px-4 text-white text-lg shadow'
    >
      <img src={addIMG} height={16} width={16} alt="addIMG" className="self-center" />
      <p>حفظ</p>
    </button>
    <button
      onClick={onRemoveBook}
      className='delete-book   flex gap-2  self-end  rounded py-1 px-4 text-white text-lg shadow'
    >
      <img src={addIMG} height={16} width={16} alt="addIMG" className="self-center" />
      <p>حدف</p>
    </button>

  </div>
}