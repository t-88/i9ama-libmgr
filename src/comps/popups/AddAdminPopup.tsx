import BgPattern from "../BgPattern";
import Input, { InputRef } from "../Input";

import closeIMG from "../../assets/close.png";
import addIMG from "../../assets/add.png";
import { validate_inputNotEmpty } from "../../libs/validation";
import "./AddAdminPopup.css"
import ImgUpload from "../ImgUpload";
import { useEffect, useRef, useState } from "react";
import { hidePopup, popupState } from "../../libs/popup";
import AdminsState, { AdminAction } from "../../libs/admins";
import userIMG from "../../assets/user.png";


const INPUT_TITLE_WIDTH = "w-48";


export default function AddAdminPopup() {


  function onAddAdmin() {
    const fNameValid = fNameRef.current?.checkInput({ func: validate_inputNotEmpty, msg: "" });
    const lNameValid = lNameRef.current?.checkInput({ func: validate_inputNotEmpty, msg: "" });


    if (!(fNameValid && lNameValid)) { return; }

    AdminAction.add(
      fNameRef.current!.getInput(),
      lNameRef.current!.getInput(),
      mainImg,
    );


    fNameRef.current!.setInput("");
    lNameRef.current!.setInput("");
    setMainImg([]);
  }

  function onSaveAdmin() {
    const fNameValid = fNameRef.current?.checkInput({ func: validate_inputNotEmpty, msg: "" });
    const lNameValid = lNameRef.current?.checkInput({ func: validate_inputNotEmpty, msg: "" });


    if (!(fNameValid && lNameValid)) { return; }


    let admin = AdminsState.admins[popupState.editedAdminIdx];

    AdminAction.update(
      admin.id,
      admin.imgsUUID,
      fNameRef.current!.getInput(),
      lNameRef.current!.getInput(),
      mainImg,
    );

  }

  function onDeleteAdmin() {
    AdminAction.removeCurr();
    popupState.popupVis = false;
  }

  useEffect(() => {
    if (popupState.popupType == "edit-admin") {
      let admin = AdminsState.admins[popupState.editedAdminIdx];
      fNameRef.current!.setInput(admin.first_name);
      lNameRef.current!.setInput(admin.last_name);
    }
  });

  async function onUploadImg() {
    const imgBase64 = await (window as any).utils.open();
    return imgBase64;
  }



  const fNameRef = useRef<InputRef | null>(null);
  const lNameRef = useRef<InputRef | null>(null);

  const [mainImg, setMainImg] = useState<any>([]);
  if (popupState.popupType == 'edit-admin' && mainImg.length == 0) {
    let admin = AdminsState.admins[popupState.editedAdminIdx];
    setMainImg([admin.img]);
  }

  return <div className='filter-popup rounded shadow w-2/4' onClick={(e) => e.stopPropagation()} >
    <BgPattern />
    <div className='relative z-10 w-full flex flex-col gap-5 px-6 py-8' >
      <div className='self-end -mb-6 cursor-pointer w-fit h-fit' onClick={() => popupState.popupVis = false}>
        <img src={closeIMG} alt="closeIMG" width={16} onClick={() => hidePopup()} />
      </div>


      {
        popupState.popupType == "edit-admin" ?
          <h1 className='text-2xl font-bold'>تعديل معلومات المسؤول</h1>
          :
          <h1 className='text-2xl font-bold'>اضافة مسؤول جديد</h1>
      }

      <div
        className={`img-frame flex items-center justify-center  
                    w-28 h-28 bg-white self-center rounded-full overflow-hidden border-4
                    ${popupState.popupType == "edit-user" ? "" : "cursor-pointer bg-zinc-200"}
                  `}>
        {
          popupState.popupType == "edit-user" || mainImg.length != 0 ?
            <img src={mainImg} alt="img" onClick={async () => setMainImg(await onUploadImg())} />
            :
            <img src={userIMG} width={50} onClick={async () => setMainImg(await onUploadImg())} alt="img" />
        }


      </div>


      <section>
        <Input titleClassName={INPUT_TITLE_WIDTH} ref={fNameRef} title="الاسم" placeholder="ادخل الاسم... " />
        <Input titleClassName={INPUT_TITLE_WIDTH} ref={lNameRef} title="اللقب" placeholder="ادخل اللقب... " />

        {/* <ImgUpload ref={mainImgRef} titleClassName={INPUT_TITLE_WIDTH} title="صورة" onUploadImg={onUploadImg} /> */}
      </section>
      <ActionButtons onAddAdmin={onAddAdmin} onDeleteAdmin={onDeleteAdmin} onSaveAdmin={onSaveAdmin} />

    </div>
  </div>
}


function ActionButtons({ onAddAdmin, onDeleteAdmin, onSaveAdmin }: { onAddAdmin: any, onDeleteAdmin: any, onSaveAdmin: any }) {
  if (popupState.popupType == 'add-admin') {
    return <button onClick={onAddAdmin} className='interactive-button flex gap-2  self-end  rounded py-1 px-4 text-white text-lg shadow' >
      <img src={addIMG} height={16} width={16} alt="addIMG" className="self-center" />
      <p>اضافة</p>
    </button>
  }
  return <section className="flex gap-2 self-end">
    <button onClick={onDeleteAdmin} className='delete-book flex gap-2  self-end  rounded py-1 px-4 text-white text-lg shadow' >
      <img src={addIMG} height={16} width={16} alt="addIMG" className="self-center" />
      <p>حدف</p>
    </button>

    <button onClick={onSaveAdmin} className='interactive-button flex gap-2  self-end  rounded py-1 px-4 text-white text-lg shadow' >
      <img src={addIMG} height={16} width={16} alt="addIMG" className="self-center" />
      <p>حفظ</p>
    </button>


  </section>
}