import GState from "../../libs/gstate";
import BgPattern from "../BgPattern";
import Input, { InputRef } from "../Input";

import closeIMG from "../../assets/close.png";
import addIMG from "../../assets/add.png";
import { validate_inputNotEmpty } from "../../libs/validation";
import "./AddUserPopup.css"
import ImgUpload from "../ImgUpload";
import { useEffect, useRef } from "react";
import UsersState, { UserAction } from "../../libs/users";
import { popupState } from "../../libs/popup";

const INPUT_TITLE_WIDTH = "w-48";


export default function AddUserPopup() {


  function onAddUser() {
    const fNameValid = fNameRef.current?.checkInput({ func: validate_inputNotEmpty, msg: "" });
    const lNameValid = lNameRef.current?.checkInput({ func: validate_inputNotEmpty, msg: "" });
    const collegeValid = collegeRef.current?.checkInput({ func: validate_inputNotEmpty, msg: "" });
    const mainImgValid = mainImgRef.current?.checkInput();
    const idImgValid = idImgRef.current?.checkInput();
    const idSchoolImgValid = idSchoolImgRef.current?.checkInput();
    const schoolImgValid = schoolImgRef.current?.checkInput();


    if (!(
      fNameValid && lNameValid && collegeValid &&
      mainImgValid && idImgValid && idSchoolImgValid && schoolImgValid
    )) { return; }


    UserAction.add(
      fNameRef.current!.getInput(),
      lNameRef.current!.getInput(),
      collegeRef.current!.getInput(),
      mainImgRef.current!.getInput()[0],
      idImgRef.current!.getInput()[0],
      idSchoolImgRef.current!.getInput()[0],
      schoolImgRef.current!.getInput()[0],
    );


    fNameRef.current!.setInput("");
    lNameRef.current!.setInput("");
    collegeRef.current!.setInput("");
    mainImgRef.current!.setInput([]);
    idImgRef.current!.setInput([]);
    idSchoolImgRef.current!.setInput([]);
    schoolImgRef.current!.setInput([]);
  }

  function onSaveUser() {
    const fNameValid = fNameRef.current?.checkInput({ func: validate_inputNotEmpty, msg: "" });
    const lNameValid = lNameRef.current?.checkInput({ func: validate_inputNotEmpty, msg: "" });
    const collegeValid = collegeRef.current?.checkInput({ func: validate_inputNotEmpty, msg: "" });
    const mainImgValid = mainImgRef.current?.checkInput();
    const idImgValid = idImgRef.current?.checkInput();
    const idSchoolImgValid = idSchoolImgRef.current?.checkInput();
    const schoolImgValid = schoolImgRef.current?.checkInput();


    if (!(
      fNameValid && lNameValid && collegeValid &&
      mainImgValid && idImgValid && idSchoolImgValid && schoolImgValid
    )) { return; }


    let user = UsersState.users[popupState.editedUserIdx];

    UserAction.update(
      user.id,
      user.imgsUUID,
      fNameRef.current!.getInput(),
      lNameRef.current!.getInput(),
      collegeRef.current!.getInput(),
      mainImgRef.current!.getInput()[0],
      idImgRef.current!.getInput()[0],
      idSchoolImgRef.current!.getInput()[0],
      schoolImgRef.current!.getInput()[0],
    );
    
  }

  function onDeleteUser() {

  }


  useEffect(() => {
    if(popupState.popupType == "edit-user") {
      let user = UsersState.users[popupState.editedUserIdx];
      fNameRef.current!.setInput(user.first_name);
      lNameRef.current!.setInput(user.last_name);
      collegeRef.current!.setInput(user.school);
      mainImgRef.current!.setInput([user.img]);
      idImgRef.current!.setInput([user.idImg]);
      idSchoolImgRef.current!.setInput([user.schoolIdImg]);
      schoolImgRef.current!.setInput([user.schoolPaper]);
    }
  });

  async function onUploadImg() {
    const imgBase64 = await (window as any).utils.open();
    return imgBase64;
  }



  const fNameRef = useRef<InputRef | null>(null);
  const lNameRef = useRef<InputRef | null>(null);
  const collegeRef = useRef<InputRef | null>(null);
  const mainImgRef = useRef<any | null>(null);
  const idImgRef = useRef<any | null>(null);
  const idSchoolImgRef = useRef<any | null>(null);
  const schoolImgRef = useRef<any | null>(null);


  return <div className='filter-popup rounded shadow w-2/4' onClick={(e) => e.stopPropagation()} >
    <BgPattern />
    <div className='relative z-10 w-full flex flex-col gap-5 px-6 py-8' >
      <div className='self-end -mb-6 cursor-pointer w-fit h-fit' onClick={() => popupState.popupVis = false}>
        <img src={closeIMG} alt="closeIMG" width={16} />
      </div>
      <h1 className='text-2xl font-bold'>اضافة عضو جديد</h1>
      <section>
        <Input titleClassName={INPUT_TITLE_WIDTH} ref={fNameRef} title="الاسم" placeholder="ادخل الاسم... " />
        <Input titleClassName={INPUT_TITLE_WIDTH} ref={lNameRef} title="اللقب" placeholder="ادخل اللقب... " />
        <Input titleClassName={INPUT_TITLE_WIDTH} ref={collegeRef} title="الجامعة" placeholder="ادخل اسم الجامعة... " />


        <ImgUpload ref={mainImgRef} titleClassName={INPUT_TITLE_WIDTH} title="صورة" onUploadImg={onUploadImg} />
        <ImgUpload ref={idImgRef} titleClassName={INPUT_TITLE_WIDTH} title="بطاقة التعريف" onUploadImg={onUploadImg} />
        <ImgUpload ref={idSchoolImgRef} titleClassName={INPUT_TITLE_WIDTH} title="بطاقة الطالب" onUploadImg={onUploadImg} />
        <ImgUpload ref={schoolImgRef} titleClassName={INPUT_TITLE_WIDTH} title="شهادة مدرسية" onUploadImg={onUploadImg} />

      </section>
      <ActionButtons onAddUser={onAddUser} onDeleteUser={onDeleteUser} onSaveUser={onSaveUser} />

    </div>
  </div>
}


function ActionButtons({onAddUser, onDeleteUser, onSaveUser} : {onAddUser : any,onDeleteUser : any, onSaveUser : any}) {
  if (popupState.popupType == 'add-user') {
    return <button onClick={onAddUser} className='interactive-button flex gap-2  self-end  rounded py-1 px-4 text-white text-lg shadow' >
      <img src={addIMG} height={16} width={16} alt="addIMG" className="self-center" />
      <p>اضافة</p>
    </button>
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