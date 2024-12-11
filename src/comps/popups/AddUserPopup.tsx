import GState from "../../libs/gstate";
import BgPattern from "../BgPattern";
import Input, { InputRef } from "../Input";

import closeIMG from "../../assets/close.png";
import { useRef } from "react";




export default function AddUserPopup() {
  const fNameRef = useRef<InputRef | null>(null);
  const sNameRef = useRef<InputRef | null>(null);


return <div  className='filter-popup rounded shadow' onClick={(e) => e.stopPropagation()} >
      <BgPattern />
      <div className='absolute z-10 w-full flex flex-col gap-5 px-6 py-8' >
        <div className='self-end -mb-6 cursor-pointer w-fit h-fit' onClick={() => GState.popupVis = false}>
          <img src={closeIMG} alt="closeIMG" width={16}  />
          
        </div>
        <h1 className='text-2xl font-bold'>اضافة عضو جديد</h1>
        <section>
          <Input ref={fNameRef} title="الاسم" placeholder="ادخل الاسم... " />
          <Input ref={sNameRef} title="اللقب" placeholder="ادخل اسم اللقب... " />
        </section>
       
      </div>
    </div>;
  }