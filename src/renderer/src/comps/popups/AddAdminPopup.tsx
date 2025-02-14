import BgPattern from "../BgPattern";
import Input, { InputRef } from "../Input";

import closeIMG from "../../assets/close.png";
import addIMG from "../../assets/add.png";
import { validate_inputNotEmpty } from "../../libs/validation";
import "./AddAdminPopup.css"
import ImgUpload from "../ImgUpload";
import { useEffect, useRef, useState } from "react";
import { hidePopup, popupState, toggleEditBookID } from "../../libs/popup";
import AdminsState, { AdminAction } from "../../libs/admins";
import userIMG from "../../assets/user.png";
import BookingsState, { BookingAction } from "../../libs/booking";
import { Bounce, Flip, toast } from "react-toastify";
import { proxy, useSnapshot } from "valtio";
import { showToast } from "../../libs/utils";


const INPUT_TITLE_WIDTH = "w-48";


const addAdminProx = proxy<any>({
  info: {
    first_name: "",
    last_name: "",
    img_personal: "",
    books: [],
  },
});

export default function AddAdminPopup() {


  function onAddAdmin() {
    let keys = ["first_name", "last_name", "img_personal"];
    let validInput = true;
    for (let key of keys) {
      if (!info[key].current.checkInput({ func: validate_inputNotEmpty, msg: "" })) {
        validInput = false;
        break;
      }
    }
    if (validInput) {
      let admin = AdminsState.admins[popupState.editedAdminIdx];
      addAdminProx.info.first_name = info.first_name.current.getInput();
      addAdminProx.info.last_name = info.last_name.current.getInput();
      addAdminProx.info.img_personal = info.img_personal.current.getInput();
      AdminAction.add(addAdminProx.info,);
    } else {
      showToast(toast.error, "يجب ملأ كل المعطيات")
    }
  }

  function onSaveAdmin() {
    let keys = ["first_name", "last_name", "img_personal"];
    let validInput = true;
    for (let key of keys) {
      if (!info[key].current.checkInput({ func: validate_inputNotEmpty, msg: "" })) {
        validInput = false;
        break;
      }
    }
    if (validInput) {
      let admin = AdminsState.admins[popupState.editedAdminIdx];
      addAdminProx.info.first_name = info.first_name.current.getInput();
      addAdminProx.info.last_name = info.last_name.current.getInput();
      addAdminProx.info.img_personal = info.img_personal.current.getInput();
      AdminAction.update(admin.id, addAdminProx.info,);
    } else {
      showToast(toast.error, "يجب ملأ كل المعطيات")
    }
  }

  function onDeleteAdmin() {
    if (adminBooks.length == 0) {
      AdminAction.removeCurr();
      popupState.popupVis = false;
    } else {

      toast.dismiss();
      toast.error('لا يمكن حدف المسئول,لانه توجد كتب باسمه', {
        position: "bottom-center",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        transition: Flip,
      });
    }
  }

  function showBookPopup(book: any) {
    toggleEditBookID(book.id);
  }


  async function onInitAdmin() {
    if (popupState.popupType == "edit-admin") {
      let admin = AdminsState.admins[popupState.editedAdminIdx];
      addAdminProx.info.first_name = admin.first_name;
      addAdminProx.info.last_name = admin.last_name;
      if (info.img_personal.current.length == 0) {
        let admin = AdminsState.admins[popupState.editedAdminIdx];
        addAdminProx.info.img_personal = admin.img;
      }


      console.log(JSON.parse(JSON.stringify(admin)))
      addAdminProx.info.books = await BookingAction.queryAdmin(admin.id);
    }



  }

  useEffect(() => {
    onInitAdmin();

  }, []);



  async function onUploadImg() {
    const imgBase64 = await (window as any).utils.open();
    return imgBase64;
  }

  const [adminBooks, setAdminBooks] = useState<any>([]);
  useSnapshot(addAdminProx);


  const info = {
    first_name: useRef<any>(null),
    last_name: useRef<any>(null),
    img_personal: useRef<any>(null),
  };



  return <div className='filter-popup rounded shadow w-2/4' onClick={(e) => e.stopPropagation()} >
    <BgPattern />
    <div className='relative z-10 w-full flex flex-col gap-2 px-6 py-8' >

      <div className='self-end cursor-pointer w-fit h-fit' onClick={() => hidePopup()}>
        <img src={closeIMG} alt="closeIMG" width={16} />
      </div>

      {
        popupState.popupType == "edit-admin" ?
          <h1 className='text-2xl font-bold'>تعديل معلومات المسؤول</h1>
          :
          <h1 className='text-2xl font-bold'>اضافة مسؤول جديد</h1>
      }


      <section>
        <ImgUpload defaultVal={addAdminProx.info.img_personal} titleClassName={INPUT_TITLE_WIDTH} ref={info.img_personal} title="صورة شخصية" onUploadImg={onUploadImg} />
        <Input defaultVal={addAdminProx.info.first_name} titleClassName={INPUT_TITLE_WIDTH} ref={info.first_name} title="الاسم" placeholder="ادخل الاسم... " />
        <Input defaultVal={addAdminProx.info.last_name} titleClassName={INPUT_TITLE_WIDTH} ref={info.last_name} title="اللقب" placeholder="ادخل اللقب... " />
      </section>

      {
        popupState.popupType == "add-admin" ? <></> :
          <section className="m-4 flex flex-col gap-4 max-h-32">
            <h1 className='text-xl font-bold'>الكتب المحجوزة من طرف المسئول</h1>
            <div className="mx-4 overflow-y-scroll p-2 flex flex-col">
              {
                adminBooks.length == 0 ? <h1>لا كتب حاليا</h1> :
                  adminBooks.map((book: any, idx: number) => {
                    return <div key={book.id} onClick={() => showBookPopup(book)} className={`cursor-pointer hover:bg-gray-50 bg-white rounded`}>
                      <h1 className="py-2">{book.title}</h1>
                      <hr className="bg-gray-200" />
                    </div>
                  })
              }
            </div>
          </section>
      }



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
