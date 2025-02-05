import GState from "../../libs/gstate";
import BgPattern from "../BgPattern";
import Input, { InputRef } from "../Input";
import closeIMG from "../../assets/close.png";
import userIMG from "../../assets/user.png";
import addIMG from "../../assets/add.png";
import { validate_inputNotEmpty } from "../../libs/validation";
import "./AddUserPopup.css";
import ImgUpload from "../ImgUpload";
import { useEffect, useRef, useState } from "react";
import UsersState, { UserAction } from "../../libs/users";
import { hidePopup, popupState } from "../../libs/popup";
import { BookingAction } from "../../libs/booking";
import { showToast } from "../../libs/utils";
import { toast } from "react-toastify";
import { BookAction } from "../../libs/books";

const INPUT_TITLE_WIDTH = "w-48";

export default function AddUserPopup() {
    const [currentStage, setCurrentStage] = useState(1);
    const fNameRef = useRef<InputRef | null>(null);
    const lNameRef = useRef<InputRef | null>(null);
    const collegeRef = useRef<InputRef | null>(null);
    const phoneNumberRef = useRef<InputRef | null>(null);
    const dateOfBirthRef = useRef<InputRef | null>(null);
    const emailRef = useRef<InputRef | null>(null);
    const stateRef = useRef<InputRef | null>(null);
    const placeOfAccommodationRef = useRef<InputRef | null>(null);
    const roomNumberRef = useRef<InputRef | null>(null);
    const specialityRef = useRef<InputRef | null>(null);
    const yearOfStudyRef = useRef<InputRef | null>(null);

    const [mainImg, setMainImg] = useState<any>([]);
    const idImgRef = useRef<any | null>(null);
    const idSchoolImgRef = useRef<any | null>(null);
    const schoolImgRef = useRef<any | null>(null);
    useEffect(() => {
      console.log("the main useefect");
      console.log("fNameRef:", fNameRef.current);
      console.log("lNameRef:", lNameRef.current);
      console.log("collegeRef:", collegeRef.current);
      console.log("phoneNumberRef:", phoneNumberRef.current);
      if (currentStage === 2) {
      console.log("dateOfBirthRef:", dateOfBirthRef.current);
      console.log("emailRef:", emailRef.current);
      console.log("stateRef:", stateRef.current);
      console.log("placeOfAccommodationRef:", placeOfAccommodationRef.current);
      console.log("roomNumberRef:", roomNumberRef.current);
      console.log("specialityRef:", specialityRef.current);
      console.log("yearOfStudyRef:", yearOfStudyRef.current);
      console.log("idImgRef:", idImgRef.current);
      console.log("idSchoolImgRef:", idSchoolImgRef.current);
      console.log("schoolImgRef:", schoolImgRef.current);
      console.log("mainImg:", mainImg);
      }
      // Add similar logs for other refs
  }, []);
    useEffect(() => {
        if (popupState.popupType == "edit-user") {
            let user = UsersState.users[popupState.editedUserIdx];
            fNameRef.current!.setInput(user.first_name);
            lNameRef.current!.setInput(user.last_name);
            collegeRef.current!.setInput(user.school);
            phoneNumberRef.current!.setInput(user.phone_number);
            dateOfBirthRef.current!.setInput(user.date_of_birth);
            emailRef.current!.setInput(user.email);
            stateRef.current!.setInput(user.state);
            placeOfAccommodationRef.current!.setInput(
                user.place_of_accommodation,
            );
            roomNumberRef.current!.setInput(user.room_number);
            specialityRef.current!.setInput(user.speciality);
            yearOfStudyRef.current!.setInput(user.year_of_study.toString());
            idImgRef.current!.setInput([user.idImg]);
            idSchoolImgRef.current!.setInput([user.schoolIdImg]);
            schoolImgRef.current!.setInput([user.schoolPaper]);
            setMainImg([user.img]);
        }
        setCurrentStage(1);
    }, [popupState.popupType, popupState.editedUserIdx]);

    async function onUploadImg() {
        const imgBase64 = await (window as any).utils.open();
        return [imgBase64];
    }

    function validateStage1() {
        const fNameValid = fNameRef.current?.checkInput({
            func: validate_inputNotEmpty,
            msg: "",
        });
        const lNameValid = lNameRef.current?.checkInput({
            func: validate_inputNotEmpty,
            msg: "",
        });
        const collegeValid = collegeRef.current?.checkInput({
            func: validate_inputNotEmpty,
            msg: "",
        });
        const phoneNumberValid = phoneNumberRef.current?.checkInput({
            func: validate_inputNotEmpty,
            msg: "",
        });

        return fNameValid && lNameValid && collegeValid && phoneNumberValid;
    }

    function handleNextStage() {
        if (validateStage1()) {
        
            setCurrentStage(2);
        }
    }

    function onAddUser() {
      if (
          !fNameRef.current ||
          !lNameRef.current ||
          !collegeRef.current ||
          !phoneNumberRef.current ||
          !dateOfBirthRef.current ||
          !emailRef.current ||
          !stateRef.current ||
          !placeOfAccommodationRef.current ||
          !roomNumberRef.current ||
          !specialityRef.current ||
          !yearOfStudyRef.current ||
          !idImgRef.current ||
          !idSchoolImgRef.current ||
          !schoolImgRef.current
      ) {
        console.log("the add user function")
        console.log(currentStage);
        console.log(fNameRef.current);
        console.log(lNameRef.current);
        console.log(collegeRef.current);
        console.log(phoneNumberRef.current);
        console.log(dateOfBirthRef.current);
        console.log(emailRef.current);
        console.log(stateRef.current);
        console.log(placeOfAccommodationRef.current);
        console.log(roomNumberRef.current);
        console.log(specialityRef.current);
        console.log(yearOfStudyRef.current);
        console.log(idImgRef.current);
        console.log(idSchoolImgRef.current);
        console.log(schoolImgRef.current);

          console.error("One or more refs are null");
          return;
      }
  
      const stage2Valid = validateStage2();
      if (!stage2Valid) {
          console.log('Form is not valid');
          return;
      }
  
      UserAction.add(
          fNameRef.current.getInput(),
          lNameRef.current.getInput(),
          collegeRef.current.getInput(),
          mainImg[0],
          idImgRef.current.getInput()[0],
          idSchoolImgRef.current.getInput()[0],
          schoolImgRef.current.getInput()[0],
          phoneNumberRef.current.getInput(),
          dateOfBirthRef.current.getInput(),
          emailRef.current.getInput(),
          stateRef.current.getInput(),
          placeOfAccommodationRef.current.getInput(),
          roomNumberRef.current.getInput(),
          specialityRef.current.getInput(),
          parseInt(yearOfStudyRef.current.getInput()),
      );
  
      resetForm();
  }

    function validateStage2() {
        const dateOfBirthValid = dateOfBirthRef.current?.checkInput({
            func: validate_inputNotEmpty,
            msg: "",
        });
        const emailValid = emailRef.current?.checkInput({
            func: validate_inputNotEmpty,
            msg: "",
        });
        const stateValid = stateRef.current?.checkInput({
            func: validate_inputNotEmpty,
            msg: "",
        });
        const placeOfAccommodationValid =
            placeOfAccommodationRef.current?.checkInput({
                func: validate_inputNotEmpty,
                msg: "",
            });
        const roomNumberValid = roomNumberRef.current?.checkInput({
            func: validate_inputNotEmpty,
            msg: "",
        });
        const specialityValid = specialityRef.current?.checkInput({
            func: validate_inputNotEmpty,
            msg: "",
        });
        const yearOfStudyValid = yearOfStudyRef.current?.checkInput({
            func: validate_inputNotEmpty,
            msg: "",
        });
        const idImgValid = idImgRef.current?.checkInput();
        const idSchoolImgValid = idSchoolImgRef.current?.checkInput();
        const schoolImgValid = schoolImgRef.current?.checkInput();

        return (
            dateOfBirthValid &&
            emailValid &&
            stateValid &&
            placeOfAccommodationValid &&
            roomNumberValid &&
            specialityValid &&
            yearOfStudyValid &&
            idImgValid &&
            idSchoolImgValid &&
            schoolImgValid
        );
    }

    function onSaveUser() {
        const stage2Valid = validateStage2();
        if (!stage2Valid) return;

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
            phoneNumberRef.current!.getInput(),
            dateOfBirthRef.current!.getInput(),
            emailRef.current!.getInput(),
            stateRef.current!.getInput(),
            placeOfAccommodationRef.current!.getInput(),
            roomNumberRef.current!.getInput(),
            specialityRef.current!.getInput(),
            parseInt(yearOfStudyRef.current!.getInput()),
        );
    }

    function resetForm() {
        
        if (currentStage === 2) {
        dateOfBirthRef.current!.setInput("");
        emailRef.current!.setInput("");
        stateRef.current!.setInput("");
        placeOfAccommodationRef.current!.setInput("");
        roomNumberRef.current!.setInput("");
        specialityRef.current!.setInput("");
        yearOfStudyRef.current!.setInput("");
        setMainImg([]);
        idImgRef.current!.setInput([]);
        idSchoolImgRef.current!.setInput([]);
        schoolImgRef.current!.setInput([]);
        }
    }

    function onDeleteUser() {
        const user = UserAction.getCurUser();
        const reserved = BookingAction.isUserReserving(user.id);
        if (reserved) {
            const book = BookAction.getBook(reserved.book_id);
            showToast(
                toast.error,
                `لا يمكن الحدف, العضو يملك كتاب ${book.title}`,
            );
        } else {
            UserAction.remove(user.id);
            hidePopup();
            showToast(toast.success, "تم حدف العضو بنجاح");
        }
    }

    return (
        <div
            className="filter-popup rounded shadow w-2/4"
            onClick={(e) => e.stopPropagation()}
        >
            <BgPattern />
            <div className="relative z-10 w-full flex flex-col gap-5 px-6 py-8">
                <div
                    className="self-end -mb-6 cursor-pointer w-fit h-fit"
                    onClick={() => (popupState.popupVis = false)}
                >
                    <img
                        src={closeIMG}
                        alt="closeIMG"
                        width={16}
                        onClick={() => hidePopup()}
                    />
                </div>
                {popupState.popupType == "edit-user" ? (
                    <h1 className="text-2xl font-bold">تعديل معلومات العضو</h1>
                ) : (
                    <h1 className="text-2xl font-bold">اضافة عضو جديد</h1>
                )}

                <div
                    onClick={async () => {
                        if (popupState.popupType !== "edit-user") {
                            setMainImg(await onUploadImg());
                        }
                    }}
                    className={`img-frame flex items-center justify-center  
                    w-28 h-28 bg-white self-center rounded-full overflow-hidden border-4
                    ${
                        popupState.popupType == "edit-user"
                            ? ""
                            : "cursor-pointer bg-zinc-200"
                    }`}
                >
                    {popupState.popupType == "edit-user" ||
                    mainImg.length != 0 ? (
                        <img src={mainImg} alt="img" />
                    ) : (
                        <img src={userIMG} width={50} alt="img" />
                    )}
                </div>
                <section>
                    {currentStage === 1 ? (
                        <>
                            <Input
                                titleClassName={INPUT_TITLE_WIDTH}
                                ref={fNameRef}
                                title="الاسم"
                                placeholder="ادخل الاسم... "
                            />
                            <Input
                                titleClassName={INPUT_TITLE_WIDTH}
                                ref={lNameRef}
                                title="اللقب"
                                placeholder="ادخل اللقب... "
                            />
                            <Input
                                titleClassName={INPUT_TITLE_WIDTH}
                                ref={collegeRef}
                                title="الجامعة"
                                placeholder="ادخل اسم الجامعة... "
                            />
                            <Input
                                titleClassName={INPUT_TITLE_WIDTH}
                                ref={phoneNumberRef}
                                title="رقم الهاتف"
                                placeholder="ادخل رقم الهاتف... "
                            />
                        </>
                    ) : (
                        <>
                            <Input
                                titleClassName={INPUT_TITLE_WIDTH}
                                ref={dateOfBirthRef}
                                title="تاريخ الميلاد"
                                placeholder="ادخل تاريخ الميلاد... "
                            />  
                            <Input
                                titleClassName={INPUT_TITLE_WIDTH}
                                ref={emailRef}
                                title="البريد الإلكتروني"
                                placeholder="ادخل البريد الإلكتروني... "
                            />
                            <Input
                                titleClassName={INPUT_TITLE_WIDTH}
                                ref={stateRef}
                                title="الولاية"
                                placeholder="ادخل الولاية... "
                            />
                            <Input
                                titleClassName={INPUT_TITLE_WIDTH}
                                ref={placeOfAccommodationRef}
                                title="مكان الإقامة"
                                placeholder="ادخل مكان الإقامة... "
                            />
                            <Input
                                titleClassName={INPUT_TITLE_WIDTH}
                                ref={roomNumberRef}
                                title="رقم الغرفة"
                                placeholder="ادخل رقم الغرفة... "
                            />
                            <Input
                                titleClassName={INPUT_TITLE_WIDTH}
                                ref={specialityRef}
                                title="التخصص"
                                placeholder="ادخل التخصص... "
                            />
                            <Input
                                titleClassName={INPUT_TITLE_WIDTH}
                                ref={yearOfStudyRef}
                                title="سنة الدراسة"
                                placeholder="ادخل سنة الدراسة... "
                            />
                            <ImgUpload
                                ref={idImgRef}
                                titleClassName={INPUT_TITLE_WIDTH}
                                title="بطاقة التعريف"
                                onUploadImg={onUploadImg}
                            />
                            <ImgUpload
                                ref={idSchoolImgRef}
                                titleClassName={INPUT_TITLE_WIDTH}
                                title="بطاقة الطالب"
                                onUploadImg={onUploadImg}
                            />
                            <ImgUpload
                                ref={schoolImgRef}
                                titleClassName={INPUT_TITLE_WIDTH}
                                title="شهادة مدرسية"
                                onUploadImg={onUploadImg}
                            />
                        </>
                    )}
                </section>
                {currentStage === 1 ? (
                    <button
                        onClick={handleNextStage}
                        className="interactive-button flex gap-2 self-end rounded py-1 px-4 text-white text-lg shadow"
                    >
                        <p>التالي</p>
                    </button>
                ) : (
                    <div className="flex gap-2 self-end">
                        <button
                            onClick={() => setCurrentStage(1)}
                            className="interactive-button flex gap-2 rounded py-1 px-4 text-white text-lg shadow"
                        >
                            <p>السابق</p>
                        </button>
                        {popupState.popupType === "edit-user" ? (
                            <>
                                <button
                                    onClick={onDeleteUser}
                                    className="delete-book flex gap-2 rounded py-1 px-4 text-white text-lg shadow"
                                >
                                    <p>حذف</p>
                                </button>
                                <button
                                    onClick={onSaveUser}
                                    className="interactive-button flex gap-2 rounded py-1 px-4 text-white text-lg shadow"
                                >
                                    <p>حفظ</p>
                                </button>
                            </>
                        ) : (
                            <button
                                onClick={onAddUser}
                                className="interactive-button flex gap-2 rounded py-1 px-4 text-white text-lg shadow"
                            >
                                <img
                                    src={addIMG}
                                    height={16}
                                    width={16}
                                    alt="addIMG"
                                    className="self-center"
                                />
                                <p>اضافة</p>
                            </button>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}