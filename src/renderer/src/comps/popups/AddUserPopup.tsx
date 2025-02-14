import GState from "../../libs/gstate";
import BgPattern from "../BgPattern";
import Input, { InputRef } from "../Input";
import closeIMG from "../../assets/close.png";
import userIMG from "../../assets/user.png";
import addIMG from "../../assets/add.png";
import nextIMG from "../../assets/next.png";
import backIMG from "../../assets/back.png";
import saveIMG from "../../assets/save.png";
import { validate_inputNotEmpty } from "../../libs/validation";
import "./AddUserPopup.css"
import ImgUpload from "../ImgUpload";
import { Fragment, useEffect, useRef, useState } from "react";
import UsersState, { UserAction } from "../../libs/users";
import { hidePopup, popupState } from "../../libs/popup";
import { BookingAction } from "../../libs/booking";
import { showToast } from "../../libs/utils";
import { toast } from "react-toastify";
import { BookAction } from "../../libs/books";
import { proxy, useSnapshot } from "valtio";

const INPUT_TITLE_WIDTH = "w-48";

const addUserProx = proxy<{ step: number; info: Record<string, any> }>({
  step: 0,
  info: {
    first_name: "",
    last_name: "",
    date_of_birth: "",
    al_wilaya: "",
    phone_number: "",
    facebook: "",
    school: "",
    email: "",
    residense_block_number: "",
    residense_room_number: "",
    school_matericule: "",
    year_of_study: "1",
    study_specialty: "",
    img_personal: "" ,
    img_card_personal: "" ,
    img_card_residency: "" ,
    img_school_certificate: "", 
  },
});


export default function AddUserPopup() {
  function onSaveUser() {
    let user = UsersState.users[popupState.editedUserIdx];
    UserAction.update(user.id, addUserProx.info,);
  }
  function onDeleteUser() {
    const user = UserAction.getCurUser();
    const reserved = BookingAction.isUserReserving(user.id);
    if (reserved) {
      const book = BookAction.getBook(reserved.book_id);
      showToast(toast.error, `لا يمكن الحدف, العضو يملك كتاب ${book.title}`);
    } else {
      UserAction.remove(user.id);
      hidePopup();
      showToast(toast.success, `تم حدف العضو بنجاح`);
    }
  }

  async function onUploadImg() {
    const imgBase64 = await (window as any).utils.open();
    return [imgBase64];
  }

  useEffect(() => {
    if (popupState.popupType == 'edit-user') {
      let user = UsersState.users[popupState.editedUserIdx];
      addUserProx.info.first_name = user.first_name;
      addUserProx.info.last_name = user.last_name;
      addUserProx.info.date_of_birth = user.date_of_birth;
      addUserProx.info.al_wilaya = user.al_wilaya;
      addUserProx.info.phone_number = user.phone_number;
      addUserProx.info.facebook = "NOT REQUIRED";
      addUserProx.info.school = user.school;
      addUserProx.info.email = user.email;
      addUserProx.info.residense_block_number = user.residense_block_number;
      addUserProx.info.residense_room_number = user.residense_room_number;
      addUserProx.info.school_matericule = user.school_matericule;
      addUserProx.info.year_of_study = user.year_of_study;
      addUserProx.info.study_specialty = user.study_specialty;
      addUserProx.info.img_personal = [user.img_personal];
      addUserProx.info.img_card_personal = [user.img_card_personal];
      addUserProx.info.img_card_residency = [user.img_card_residency];
      addUserProx.info.img_school_certificate = [user.img_school_certificate];      
    }
    addUserProx.step = 0;
  }, []);


  const info = {
    first_name: useRef<any>(null),
    last_name: useRef<any>(null),
    date_of_birth: useRef<any>(null),
    al_wilaya: useRef<any>(null),
    phone_number: useRef<any>(null),
    facebook: useRef<any>(null),
    school: useRef<any>(null),
    email: useRef<any>(null),
    residense_block_number: useRef<any>(null),
    residense_room_number: useRef<any>(null),
    school_matericule: useRef<any>(null),
    year_of_study: useRef<any>(null),
    study_specialty: useRef<any>(null),
    img_personal: useRef<any>(null),
    img_card_residency: useRef<any>(null),
    img_school_certificate: useRef<any>(null),
    img_card_personal: useRef<any>(null),

  }


  useSnapshot(addUserProx);
  function AddUserStep1() {
    const keys = ["first_name", "last_name", "al_wilaya", "phone_number", "facebook", "school"];

    function onClickStep1() {

      let validInput = true;
      for (let key of keys) {
        if (!info[key].current.checkInput({ func: validate_inputNotEmpty, msg: "" })) {
          validInput = false;
          break;
        }
      }
      if (validInput) {
        addUserProx.info.first_name = info.first_name.current.getInput();
        addUserProx.info.last_name = info.last_name.current.getInput();
        addUserProx.info.al_wilaya = info.al_wilaya.current.getInput();
        addUserProx.info.phone_number = info.phone_number.current.getInput();
        addUserProx.info.facebook = info.facebook.current.getInput();
        addUserProx.info.school = info.school.current.getInput();

        addUserProx.step += 1;

      } else {
        showToast(toast.error, "يجب ملأ كل المعطيات")
      }
    }



    return <div className='relative z-10 w-full flex flex-col gap-5 px-6 py-8' >
      <div className='self-end -mb-6 cursor-pointer w-fit h-fit' onClick={() => popupState.popupVis = false}>
        <img src={closeIMG} alt="closeIMG" width={16} onClick={() => hidePopup()} />
      </div>
      {
        popupState.popupType == "edit-user" ?
          <h1 className='text-2xl font-bold'>تعديل معلومات العضو</h1>
          :
          <h1 className='text-2xl font-bold'>اضافة عضو جديد</h1>
      }

      <section>
        <Input defaultVal={addUserProx.info.first_name} titleClassName={INPUT_TITLE_WIDTH} ref={info.first_name} title="الاسم" placeholder="ادخل الاسم... " />
        <Input defaultVal={addUserProx.info.last_name} titleClassName={INPUT_TITLE_WIDTH} ref={info.last_name} title="اللقب" placeholder="ادخل اللقب... " />
        <Input defaultVal={addUserProx.info.al_wilaya} titleClassName={INPUT_TITLE_WIDTH} ref={info.al_wilaya} title="الولاية" placeholder="ادخل اسم الولاية... " />
        <Input defaultVal={addUserProx.info.phone_number} titleClassName={INPUT_TITLE_WIDTH} type={"number"} ref={info.phone_number} title="رقم الهاتف" placeholder="ادخل رقم الهاتف... " />
        <Input defaultVal={addUserProx.info.facebook} titleClassName={INPUT_TITLE_WIDTH} ref={info.facebook} title="الفيسبوك" placeholder="ادخل رابط او اسم الفيسبوك... " />
        <Input defaultVal={addUserProx.info.school} titleClassName={INPUT_TITLE_WIDTH} ref={info.school} title="الجامعة" placeholder="ادخل اسم الجامعة... " />

      </section>
      <ActionButtons onDeleteUser={onDeleteUser} onSaveUser={onSaveUser} onClickNext={onClickStep1} />
    </div>
  }

  function AddUserStep2() {
    const keys = ["email", "residense_block_number", "residense_room_number", "school_matericule", "year_of_study", "study_specialty"];


    function onClickStep2() {


      let validInput = true;
      for (let key of keys) {
        if (!info[key].current.checkInput({ func: validate_inputNotEmpty, msg: "" })) {
          validInput = false;
          break;
        }
      }

      if (validInput) {
        addUserProx.info.email = info.email.current.getInput();
        addUserProx.info.residense_block_number = info.residense_block_number.current.getInput();
        addUserProx.info.residense_room_number = info.residense_room_number.current.getInput();
        addUserProx.info.school_matericule = info.school_matericule.current.getInput();
        addUserProx.info.year_of_study = info.year_of_study.current.getInput();
        addUserProx.info.study_specialty = info.study_specialty.current.getInput();
        addUserProx.step += 1;
      } else {
        showToast(toast.error, "يجب ملأ كل المعطيات")
      }

    }

    return <div className='relative z-10 w-full flex flex-col gap-5 px-6 py-8' >
      <div className='self-end -mb-6 cursor-pointer w-fit h-fit' onClick={() => popupState.popupVis = false}>
        <img src={closeIMG} alt="closeIMG" width={16} onClick={() => hidePopup()} />
      </div>
      {
        popupState.popupType == "edit-user" ?
          <h1 className='text-2xl font-bold'>تعديل معلومات العضو</h1>
          :
          <h1 className='text-2xl font-bold'>اضافة عضو جديد</h1>
      }

      <section>
        <Input defaultVal={addUserProx.info.email} titleClassName={INPUT_TITLE_WIDTH} ref={info.email} title="الاميل" placeholder="ادخل الاميل... " />
        <Input defaultVal={addUserProx.info.residense_block_number} titleClassName={INPUT_TITLE_WIDTH} ref={info.residense_block_number} title="رقم البلوك" placeholder="ادخل رقم البلوك... " />
        <Input defaultVal={addUserProx.info.residense_room_number} titleClassName={INPUT_TITLE_WIDTH} ref={info.residense_room_number} title="رقم الغرفة" placeholder="ادخل اسم رقم الغرفة... " />
        <Input defaultVal={addUserProx.info.school_matericule} titleClassName={INPUT_TITLE_WIDTH} ref={info.school_matericule} title="رقم التسجيل" placeholder="ادخل رقم التسجيل المدرسي... " />
        <Input defaultVal={addUserProx.info.year_of_study} titleClassName={INPUT_TITLE_WIDTH} ref={info.year_of_study} type={"number"} title="عام الدراسة" placeholder="ادخل العام الدراسي... " />
        <Input defaultVal={addUserProx.info.study_specialty} titleClassName={INPUT_TITLE_WIDTH} ref={info.study_specialty} title="التخصص" placeholder="ادخل اسم التخصص... " />

      </section>
      <ActionButtons onDeleteUser={onDeleteUser} onSaveUser={onSaveUser} onClickNext={onClickStep2} />
    </div>
  }

  function AddUserStep3() {
    const keys = ["img_personal", "img_card_personal", "img_card_residency", "img_school_certificate"];


    function onClickStep3() {
      let validInput = true;
      for (let key of keys) {
        if (!info[key].current.checkInput({ func: validate_inputNotEmpty, msg: "" })) {
          validInput = false;
          break;
        }
      }
      if (validInput) {
        addUserProx.info.img_personal = info.img_personal.current.getInput();
        addUserProx.info.img_card_personal = info.img_card_personal.current.getInput();
        addUserProx.info.img_card_residency = info.img_card_residency.current.getInput();
        addUserProx.info.img_school_certificate = info.img_school_certificate.current.getInput();
        
        if(popupState.popupType == "add-user") {
          UserAction.add(addUserProx.info);
        }  else {
          onSaveUser();
        }
      } else {
        showToast(toast.error, "يجب ملأ كل المعطيات")

      }
    }

    


    return <div className='relative z-10 w-full flex flex-col gap-5 px-6 py-8' >
      <div className='self-end -mb-6 cursor-pointer w-fit h-fit' onClick={() => popupState.popupVis = false}>
        <img src={closeIMG} alt="closeIMG" width={16} onClick={() => hidePopup()} />
      </div>
      {
        popupState.popupType == "edit-user" ?
          <h1 className='text-2xl font-bold'>تعديل معلومات العضو</h1>
          :
          <h1 className='text-2xl font-bold'>اضافة عضو جديد</h1>
      }

      <section>
        <ImgUpload defaultVal={addUserProx.info.img_personal} ref={info.img_personal} titleClassName={INPUT_TITLE_WIDTH} title="صورة شخصية" onUploadImg={onUploadImg} />
        <ImgUpload defaultVal={addUserProx.info.img_card_personal} ref={info.img_card_personal} titleClassName={INPUT_TITLE_WIDTH} title="بطاقة التعريف" onUploadImg={onUploadImg} />
        <ImgUpload defaultVal={addUserProx.info.img_card_residency} ref={info.img_card_residency} titleClassName={INPUT_TITLE_WIDTH} title="بطاقة الطالب" onUploadImg={onUploadImg} />
        <ImgUpload defaultVal={addUserProx.info.img_school_certificate} ref={info.img_school_certificate} titleClassName={INPUT_TITLE_WIDTH} title="شهادة مدرسية" onUploadImg={onUploadImg} />
      </section>
      <ActionButtons onAddUser={onClickStep3} onDeleteUser={onDeleteUser} onSaveUser={onClickStep3} />
    </div>
  }



  const registerSteps = [
    AddUserStep1,
    AddUserStep2,
    AddUserStep3,
  ];




  return <div className='filter-popup rounded shadow w-2/4' onClick={(e) => e.stopPropagation()} >
    <BgPattern />
    {(() => {
      const RegisterStep = registerSteps[addUserProx.step]
      return <RegisterStep />
    })()}
  </div>
}




function ActionButtons({ onAddUser, onDeleteUser, onSaveUser, onClickNext }: { onAddUser?: any, onDeleteUser: any, onSaveUser: any, onClickNext?: any }) {
  useSnapshot(addUserProx);

  if (addUserProx.step < 2) {
    return <div className="flex flex-row-reverse justify-between">
      <div className="flex flex-row gap-2 self-end items-center justify-center">
        <button onClick={onClickNext} className='interactive-button flex gap-2 rounded py-1 px-4 text-white text-lg shadow' >
          <p>التالي</p>
          <img src={nextIMG} height={16} width={16} alt="addIMG" className="self-center" />
        </button>
      </div>
      <p className="text-lg self-center flex-1 justify-self-center text-center">{addUserProx.step + 1}/3</p>

      {
        addUserProx.step > 0 && <div className="flex flex-row gap-2 self-end items-center justify-center">
          <button onClick={() => { addUserProx.step -= 1 }} className='interactive-button flex gap-2 rounded py-1 px-4 text-white text-lg shadow' >
            <img src={backIMG} height={16} width={16} alt="addIMG" className="self-center" />
            <p>السابق</p>
          </button>
        </div>
      }
    </div>

  } else {
    return <div className="flex flex-row-reverse justify-between">
      <button onClick={popupState.popupType == 'edit-user' ? onSaveUser :  onAddUser} className='interactive-button flex gap-2  self-end  rounded py-1 px-4 text-white text-lg shadow' >

        {popupState.popupType == 'edit-user' ? <p>حفظ</p> : <p>اضافة</p>}
        <img src={popupState.popupType == 'edit-user' ? saveIMG : addIMG} height={16} width={16} alt="IMG" className="self-center" />
      </button>
      <p className="text-lg self-center flex-1 justify-self-center text-center">{addUserProx.step + 1}/3</p>

      {
        addUserProx.step > 0 && <div className="flex flex-row gap-2 self-end items-center justify-center">
          <button onClick={() => { addUserProx.step -= 1 }} className='interactive-button flex gap-2 rounded py-1 px-4 text-white text-lg shadow' >
            <img src={backIMG} height={16} width={16} alt="addIMG" className="self-center" />
            <p>السابق</p>
          </button>
        </div>
      }
    </div>

  }

  return <section className="flex gap-2 self-end">
    <button onClick={onDeleteUser} className='delete-book flex gap-2  self-end  rounded py-1 px-4 text-white text-lg shadow' >
      <img src={addIMG} height={16} width={16} alt="addIMG" className="self-center" />
      <p>حدف</p>
    </button>

    <button onClick={onSaveUser} className='interactive-button flex gap-2  self-end  rounded py-1 px-4 text-white text-lg shadow' >
      <img src={addIMG} height={16} width={16} alt="addIMG" className="self-center" />
      <p>حفظ</p>
    </button>
  </section>
}