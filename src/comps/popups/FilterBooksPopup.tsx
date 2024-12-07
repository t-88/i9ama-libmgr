import GState from "../../libs/gstate";
import BgPattern from "../BgPattern";
import Input from "../Input";

import closeIMG from "../../assets/close.png";
import { useRef } from "react";


export default function FilterBooksPopup() {


  const titleRef = useRef<HTMLInputElement | null>(null);
  const authorRef = useRef<HTMLInputElement | null>(null);
  const wordsRef = useRef<HTMLInputElement | null>(null);

return <div  className='filter-popup rounded shadow' onClick={(e) => e.stopPropagation()} >
      <BgPattern />
      <div className='absolute z-10 w-full flex flex-col gap-5 px-6 py-8' >
        <div className='self-end -mb-6 cursor-pointer w-fit h-fit' onClick={() => GState.popupVis = false}>
          <img src={closeIMG} alt="closeIMG" width={16} />
        </div>
        <h1 className='text-2xl font-bold'>البحث</h1>
        <section>
          <Input ref={titleRef} title="العنوان" placeholder="ادخل العنوان... " />
          <Input ref={authorRef} title="الكاتب" placeholder="ادخل اسم الكاتب... " />
          <Input ref={wordsRef} title="كلمات" placeholder="ادخل كلمات... " />
        </section>
        <h1 className='text-2xl font-bold'>مواضيع</h1>
        <section>
          <div className='tags-container p-2 flex flex-row flex-wrap gap-2 text-white w-fit h-fit overflowy-scroll  '>
            {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,].map(_ => <p className='rounded px-4 py-2 cursor-pointer shadow' >السيرة النبوية</p>)}
  
  
          </div>
        </section>
      </div>
    </div>;
  }