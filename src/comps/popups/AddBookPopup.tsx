import BgPattern from "../BgPattern";
import Input from "../Input";

import closeIMG from "../../assets/close.png";
import addIMG from "../../assets/add.png";
import GState, { addBook, removeBook } from "../../libs/gstate";
import { useEffect, useRef, useState } from "react";
import { useSnapshot } from "valtio";
import "./AddBookPopup.css";

export default function AddBookPopup() {
  function onAddBook() {
    (titleRef.current as any).checkInput();

    // addBook(titleRef.current!.value, authorRef.current!.value, "", yearRef.current!.value, "");
    // titleRef.current!.value = "";
    // authorRef.current!.value = "";
    // yearRef.current!.value = "";
  }

  function onRemoveBook() {
    removeBook();
    GState.popupVis = false;
  }

  function onAddTag() {
    const tag = tagRef.current!.value;
    if (!tag || tags.includes(tag)) return;
    setTags([...tags, tag]);
    tagRef.current!.value = "";
  }
  function onRemoveTag(tag : string) {
    tags.splice(tags.indexOf(tag),1); 
    setTags([...tags]);
  }
  useEffect(() => {
    if (GState.popupType == "edit-book") {
      titleRef.current!.value = GState.books[GState.editedBookIdx].title;
      authorRef.current!.value = GState.books[GState.editedBookIdx].author;
      yearRef.current!.value = GState.books[GState.editedBookIdx].publish_year;
    }
  }, [GState.popupType]);


  const titleRef = useRef<HTMLInputElement | null>(null);
  const authorRef = useRef<HTMLInputElement | null>(null);
  const yearRef = useRef<HTMLInputElement | null>(null);
  const tagRef = useRef<HTMLInputElement | null>(null);
  const [tags, setTags] = useState<string[]>([]);
  useSnapshot(GState);




  return <div id='book-add-edit-popup' className='filter-popup rounded shadow' onClick={(e) => e.stopPropagation()} >
    <BgPattern />
    <div className='absolute z-10 w-full h-full flex flex-col gap-5 px-4 py-6' >
      <div className='self-end -mb-6 cursor-pointer w-fit h-fit' onClick={() => GState.popupVis = false}>
        <img src={closeIMG} alt="closeIMG" width={16} />
      </div>
      <h1 className='text-2xl font-bold'>اضافة كتاب</h1>
      <section>
        <Input ref={titleRef} inputConstraint={(text:string) => text.length != 0} title="العنوان" errorMsg="تم ادخال اسم فارغ, يرجي ادخال اسم صحيح" placeholder="ادخل العنوان... "  />
        <Input ref={authorRef} title="الكاتب" placeholder="ادخل اسم الكاتب... " />
        <Input ref={yearRef} title="سنة النشر" placeholder="ادخل سنة النشر..." />
      </section>
      <h1 className='text-2xl font-bold'>مواضيع</h1>
      <section className='flex flex-auto overflow-hidden	 w-full flex-col gap-5'>
        <Input ref={tagRef} className={"my-0 shrink-0"} onEnter={onAddTag} title="موضوع" placeholder="ادخل موضوع..." />

        <div className=' tags-container bg-zinc-50	rounded p-2 flex flex-row flex-wrap gap-2 text-white w-full h-fit overflowy-scroll' style={{ maxHeight: "160px" }}>
          {tags.map(tag =>


            <section key={tag} className="tag-item relative">
              <p className='rounded px-6 py-2 cursor-default shadow' >{tag}</p>
              <img  src={closeIMG}  onClick={() => onRemoveTag(tag)} alt="closeIMG" className="tag-item-cancel absolute cursor-pointer" />
              
            </section>
          )}
        </div>
      </section>

      <ActionButtons onAddBook={onAddBook} onEditBook={onAddBook} onRemoveBook={onRemoveBook} />

    </div>
  </div>;
}


function ActionButtons({ onAddBook, onEditBook, onRemoveBook }: { onAddBook: any, onEditBook: any, onRemoveBook: any }) {

  if (GState.popupType == "add-book") {
    return <button
      onClick={onAddBook}
      className='add-book flex gap-2  self-end  rounded py-1 px-4 text-white text-lg shadow'
    >
      <img src={addIMG} height={16} width={16} alt="addIMG" className="self-center" />
      <p>اضافة</p>
    </button>;

  }

  return <div className="flex flex-row self-end gap-4">
    <button
      onClick={onEditBook}
      className='add-book  flex gap-2    rounded py-1 px-4 text-white text-lg shadow'
    >
      <img src={addIMG} height={16} width={16} alt="addIMG" className="self-center" />
      <p>حفظ</p>
    </button>
    <button
      onClick={onRemoveBook}
      className='delete-book flex gap-2  self-end  rounded py-1 px-4 text-white text-lg shadow'
    >
      <img src={addIMG} height={16} width={16} alt="addIMG" className="self-center" />
      <p>حدف</p>
    </button>

  </div>
}