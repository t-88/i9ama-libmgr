import GState from "../../libs/gstate";
import BgPattern from "../BgPattern";
import Input, { InputRef } from "../Input";
import closeIMG from "../../assets/close.png";
import userIMG from "../../assets/user.png";
import addIMG from "../../assets/add.png";
import nextIMG from "../../assets/next.png";
import backIMG from "../../assets/back.png";
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
    first_name: "a",
    last_name: "a",
    date_of_birth: "a",
    al_wilaya: "a",
    phone_number: "1",
    facebook: "a",
    school: "a",
    email: "a",
    residense_block_number: "a",
    residense_room_number: "a",
    school_matericule: "a",
    year_of_study: "1",
    study_specialty: "a",
    img_personal: ["data:image/png;base64, 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"],
    img_card_personal: ["data:image/png;base64, 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"],
    img_card_residency: ["data:image/png;base64, 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"],
    img_school_certificate: ["data:image/png;base64, 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"],
  },
});


export default function AddUserPopup() {
  function onAddUser() {
    console.log("jkasdhjahjsdjhasd");
    // const fNameValid = fNameRef.current?.checkInput({ func: validate_inputNotEmpty, msg: "" });
    // const lNameValid = lNameRef.current?.checkInput({ func: validate_inputNotEmpty, msg: "" });
    // const collegeValid = collegeRef.current?.checkInput({ func: validate_inputNotEmpty, msg: "" });
    // // const mainImgValid =  mainImgRef.current?.checkInput();
    // const idImgValid = idImgRef.current?.checkInput();
    // const idSchoolImgValid = idSchoolImgRef.current?.checkInput();
    // const schoolImgValid = schoolImgRef.current?.checkInput();


    // if (!(
    //   fNameValid && lNameValid && collegeValid &&
    //   idImgValid && idSchoolImgValid && schoolImgValid
    // )) { return; }


    UserAction.add(
      addUserProx.info
      // fNameRef.current!.getInput(),
      // lNameRef.current!.getInput(),
      // collegeRef.current!.getInput(),
      // mainImg[0],
      // // mainImgRef.current!.getInput()[0],
      // idImgRef.current!.getInput()[0],
      // idSchoolImgRef.current!.getInput()[0],
      // schoolImgRef.current!.getInput()[0],
    );


    // fNameRef.current!.setInput("");
    // lNameRef.current!.setInput("");
    // collegeRef.current!.setInput("");
    // // mainImgRef.current!.setInput([]);
    // setMainImg([]);
    // idImgRef.current!.setInput([]);
    // idSchoolImgRef.current!.setInput([]);
    // schoolImgRef.current!.setInput([]);
  }
  function onSaveUser() {
    const fNameValid = fNameRef.current?.checkInput({ func: validate_inputNotEmpty, msg: "" });
    const lNameValid = lNameRef.current?.checkInput({ func: validate_inputNotEmpty, msg: "" });
    const collegeValid = collegeRef.current?.checkInput({ func: validate_inputNotEmpty, msg: "" });
    const idImgValid = idImgRef.current?.checkInput();
    const idSchoolImgValid = idSchoolImgRef.current?.checkInput();
    const schoolImgValid = schoolImgRef.current?.checkInput();


    if (!(
      fNameValid && lNameValid && collegeValid && idImgValid && idSchoolImgValid && schoolImgValid
    )) { return; }


    let user = UsersState.users[popupState.editedUserIdx];

    UserAction.update(
      user.id,
      user.imgsUUID,
      fNameRef.current!.getInput(),
      lNameRef.current!.getInput(),
      collegeRef.current!.getInput(),
      mainImg[0],
      idImgRef.current!.getInput()[0],
      idSchoolImgRef.current!.getInput()[0],
      schoolImgRef.current!.getInput()[0],
    );

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
  function onClickNext() {
    if (addUserProx.step < 3) {
      addUserProx.step += 1;
    }
  }

  async function onUploadImg() {
    const imgBase64 = await (window as any).utils.open();
    return [imgBase64];
  }

  useEffect(() => {
    if (popupState.popupType == "edit-user") {
      let user = UsersState.users[popupState.editedUserIdx];
      fNameRef.current!.setInput(user.first_name);
      lNameRef.current!.setInput(user.last_name);
      collegeRef.current!.setInput(user.school);
      idImgRef.current!.setInput([user.idImg]);
      idSchoolImgRef.current!.setInput([user.schoolIdImg]);
      schoolImgRef.current!.setInput([user.schoolPaper]);
    }

    addUserProx.step = 0;

  }, []);

  // for(let key of Object.keys(addUserProx.info)) {
  //   addUserProx.info[key] = useRef<any>(null);
  // }   
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

  const fNameRef = useRef<InputRef | null>(null);
  const lNameRef = useRef<InputRef | null>(null);
  const collegeRef = useRef<InputRef | null>(null);
  const [mainImg, setMainImg] = useState<any>([]);
  if (popupState.popupType == 'edit-user' && mainImg.length == 0) {
    let user = UsersState.users[popupState.editedUserIdx];
    setMainImg([user.img]);
  }




  const idImgRef = useRef<any | null>(null);
  const idSchoolImgRef = useRef<any | null>(null);
  const schoolImgRef = useRef<any | null>(null);



  useSnapshot(addUserProx);



  // insert first name , second name , date of birth , al_wilaya , phone number ,school 
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
        <Input defaultVal={addUserProx.info.first_name} titleClassName={INPUT_TITLE_WIDTH} ref={info.last_name} title="اللقب" placeholder="ادخل اللقب... " />
        <Input defaultVal={addUserProx.info.al_wilaya} titleClassName={INPUT_TITLE_WIDTH} ref={info.al_wilaya} title="الولاية" placeholder="ادخل اسم الولاية... " />
        <Input defaultVal={addUserProx.info.phone_number} titleClassName={INPUT_TITLE_WIDTH} type={"number"} ref={info.phone_number} title="رقم الهاتف" placeholder="ادخل رقم الهاتف... " />
        <Input defaultVal={addUserProx.info.facebook} titleClassName={INPUT_TITLE_WIDTH} ref={info.facebook} title="الفيسبوك" placeholder="ادخل رابط او اسم الفيسبوك... " />
        <Input defaultVal={addUserProx.info.school} titleClassName={INPUT_TITLE_WIDTH} ref={info.school} title="الجامعة" placeholder="ادخل اسم الجامعة... " />

      </section>
      <ActionButtons onAddUser={onAddUser} onDeleteUser={onDeleteUser} onSaveUser={onSaveUser} onClickNext={onClickStep1} />
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
      <ActionButtons onAddUser={onAddUser} onDeleteUser={onDeleteUser} onSaveUser={onSaveUser} onClickNext={onClickStep2} />
    </div>
  }


  function AddUserStep3() {
    const keys = ["img_personal","img_card_personal","img_card_residency","img_school_certificate"];

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
        UserAction.add(addUserProx.info);
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

      {/* <div
        onClick={async () => setMainImg(await onUploadImg())}
        className={`img-frame flex items-center justify-center  
                  w-28 h-28 bg-white self-center rounded-full overflow-hidden border-4
                  ${popupState.popupType == "edit-user" ? "" : "cursor-pointer bg-zinc-200"}
                `}>
        {
          popupState.popupType == "edit-user" || mainImg.length != 0 ?
            <img src={mainImg} alt="img" />
            :
            <img src={userIMG} width={50} alt="img" />
        }


      </div> */}
      <section>

        <ImgUpload defulatVal={addUserProx.info.img_personal} ref={info.img_personal} titleClassName={INPUT_TITLE_WIDTH} title="صورة شخصية" onUploadImg={onUploadImg} />
        <ImgUpload defulatVal={addUserProx.info.img_card_personal} ref={info.img_card_personal} titleClassName={INPUT_TITLE_WIDTH} title="بطاقة التعريف" onUploadImg={onUploadImg} />
        <ImgUpload defulatVal={addUserProx.info.img_card_residency} ref={info.img_card_residency} titleClassName={INPUT_TITLE_WIDTH} title="بطاقة الطالب" onUploadImg={onUploadImg} />
        <ImgUpload defulatVal={addUserProx.info.img_school_certificate} ref={info.img_school_certificate} titleClassName={INPUT_TITLE_WIDTH} title="شهادة مدرسية" onUploadImg={onUploadImg} />

      </section>
      <ActionButtons onAddUser={onClickStep3} onDeleteUser={onDeleteUser} onSaveUser={AddUserStep3} onClickNext={onClickNext} />
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




function ActionButtons({ onAddUser, onDeleteUser, onSaveUser, onClickNext }: { onAddUser: any, onDeleteUser: any, onSaveUser: any, onClickNext: any }) {
  useSnapshot(addUserProx);



  if (addUserProx.step < 2 && popupState.popupType == 'add-user') {
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
      <button onClick={onAddUser} className='interactive-button flex gap-2  self-end  rounded py-1 px-4 text-white text-lg shadow' >
        <img src={addIMG} height={16} width={16} alt="addIMG" className="self-center" />
        <p>اضافة</p>
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