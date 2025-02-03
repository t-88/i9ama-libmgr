import BgPattern from "../BgPattern";
import Input, { InputRef } from "../Input";

import closeIMG from "../../assets/close.png";
import addIMG from "../../assets/add.png";
import subIMG from "../../assets/sub.png";

import GState from "../../libs/gstate";
import { ForwardedRef, forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import { useSnapshot } from "valtio";
import "./AddBookPopup.css";
import { validate_inputNotEmpty, validate_inputNumber, validate_noComma } from "../../libs/validation";
import BookState, { BookAction } from "../../libs/books";
import { hidePopup, popupState, toggleEditUser, toggleEditUserID } from "../../libs/popup";
import { DateSelOption, getDate, showToast } from "../../libs/utils";
import DateInput from "../DateInput";
import moreIMG from "../../assets/more.png";
import BookingsState, { BookingAction } from "../../libs/booking";
import UsersState, { UserAction } from "../../libs/users";
import { toast } from "react-toastify";

const INPUT_WIDTH = "w-40";


export default function AddBookPopup() {
  function onAddBook() {
    let titleValid = titleRef.current?.checkInput({ func: validate_inputNotEmpty, msg: "تم ادخال اسم فارغ, يرجي ادخال اسم صحيح" });
    let authorValid = authorRef.current?.checkInput({ func: validate_inputNotEmpty, msg: "تم ادخال اسم فارغ, يرجي ادخال اسم صحيح" });
    let yearValid = yearRef.current?.checkInput({ func: validate_inputNumber, msg: "يرجى ادخال عام نشر صحيح" });
    if (!(titleValid && authorValid && yearValid)) return;

    BookAction.add(titleRef.current!.getInput(), authorRef.current!.getInput(), yearRef.current!.getInput(), tags);
    titleRef.current!.setInput("");
    authorRef.current!.setInput("");
    yearRef.current!.setInput("");
  }

  function onRemoveBook() {
    const book = BookAction.getCurBook();
    const reserved =  BookingAction.isBookReserved(book.id);
    if(reserved) {
      const user = UserAction.getUser(reserved.user_id);
      showToast(toast.error,`لا يمكن الحدف, الكتاب حاليا لدى ${user.first_name + ' ' + user.last_name}`);
    } else {
      BookAction.remove(book.id);
      hidePopup();
      showToast(toast.success,`تم حدف الكتاب بنجاح`);
    }    
  }

  async function onReturnBook() {
    await BookingAction.returnCurBook();
    showToast(toast.success,"تم ارسترجاع الكتاب بنجاح" );

    popupState.popupVis = false;
  }

  function onUpateBook() {
    let titleValid = titleRef.current?.checkInput({ func: validate_inputNotEmpty, msg: "تم ادخال اسم فارغ, يرجي ادخال اسم صحيح" });
    let authorValid = authorRef.current?.checkInput({ func: validate_inputNotEmpty, msg: "تم ادخال اسم فارغ, يرجي ادخال اسم صحيح" });
    let yearValid = yearRef.current?.checkInput({ func: validate_inputNumber, msg: "يرجى ادخال عام نشر صحيح" });
    if (!(titleValid && authorValid && yearValid)) return;

    BookAction.update(titleRef.current!.getInput(), authorRef.current!.getInput(), yearRef.current!.getInput(), tags,(dateRef.current! as any).getInput());
  }

  function onAddTag() {
    if (!tagRef.current?.checkInput({ func: validate_noComma, msg: "يرجي عدم اضافة فاصلة" })) return;

    const tag = tagRef.current!.getInput();
    if (!tag || tags.includes(tag)) return;
    setTags([...tags, tag]);
    tagRef.current!.setInput("");
  }
  function onRemoveTag(tag: string) {
    tags.splice(tags.indexOf(tag), 1);
    setTags([...tags]);
  }

  function ReservedBookExtraInfo() {
    if (popupState.popupType != "edit-book" || (popupState.popupType == "edit-book" && BookState.books[popupState.editedBookIdx].available)) { return <></>; }
    let user = UsersState.users.find(user => user.id == BookingAction.getFromBookId(BookState.books[popupState.editedBookIdx].id)?.user_id)!;
    return <>
      <hr />
      <BookDateInput ref={dateRef} />
      <div className={'popup-input relative flex  gap-2 text-lg m-4 bg-white rounded shadow overflow-hidden cursor-pointer'}
        onClick={() => toggleEditUserID(user.id)}
      >
        <p className={`title text-white flex items-center justify-center w-32 font-bold rounded-r ` + INPUT_WIDTH}>العضو</p>
        <p className="p-2 w-full">{user.first_name + " " + user.last_name}</p>
      </div>
    </>
  }

  useEffect(() => {
    if (popupState.popupType == "edit-book") {
      titleRef.current!.setInput(BookState.books[popupState.editedBookIdx].title);
      authorRef.current!.setInput(BookState.books[popupState.editedBookIdx].author);
      yearRef.current!.setInput(BookState.books[popupState.editedBookIdx].publish_year);
      setTags(BookState.books[popupState.editedBookIdx].tags);
    }
  }, [popupState.popupType]);






  const titleRef = useRef<InputRef | null>(null);
  const authorRef = useRef<InputRef | null>(null);
  const yearRef = useRef<InputRef | null>(null);
  const tagRef = useRef<InputRef>(null);
  const [tags, setTags] = useState<string[]>([]);
  const dateRef = useRef<any>(null);
  useSnapshot(GState);





  return <div id='book-add-edit-popup' className='filter-popup rounded shadow w-2/4' onClick={(e) => e.stopPropagation()} >
    <BgPattern />
    <div className='relative z-10 w-full h-full flex flex-col gap-5 px-4 py-6' >
      <div className='self-end -mb-6 cursor-pointer w-fit h-fit' onClick={() => popupState.popupVis = false}>
        <img src={closeIMG} alt="closeIMG" width={16} onClick={() => hidePopup()} />
      </div>

      {
        popupState.popupType == "edit-book" ?
          <h1 className='text-2xl font-bold'>تعديل معلومات الكتاب</h1>
          :
          <h1 className='text-2xl font-bold'>اضافة كتاب</h1>
      }
      <section>

        <Input titleClassName={INPUT_WIDTH} ref={titleRef} title="العنوان" placeholder="ادخل العنوان... " />
        <Input titleClassName={INPUT_WIDTH} ref={authorRef} title="الكاتب" placeholder="ادخل اسم الكاتب... " />
        <Input titleClassName={INPUT_WIDTH} ref={yearRef} title="سنة النشر" placeholder="ادخل سنة النشر..." />
        <ReservedBookExtraInfo />
      </section>

      <h1 className='text-2xl font-bold'>مواضيع</h1>
      <section className='flex flex-auto	 w-full flex-col gap-5'>
        <Input ref={tagRef} className={"my-0 shrink-0"} onEnter={onAddTag} title="موضوع" placeholder="ادخل موضوع..." />
        <div className=' tags-container bg-zinc-50	rounded p-2 flex flex-row flex-wrap gap-2 text-white w-full h-fit overflowy-scroll' style={{ maxHeight: "160px" }}>
          {tags.map(tag =>
            <section key={tag} className="tag-item relative">
              <p className='rounded px-6 py-2 cursor-default shadow' >{tag}</p>
              <img src={closeIMG} onClick={() => onRemoveTag(tag)} alt="closeIMG" className="tag-item-cancel absolute cursor-pointer" />
            </section>
          )}
        </div>
      </section>

      <ActionButtons onAddBook={onAddBook} onUpateBook={onUpateBook} onRemoveBook={onRemoveBook} onReturnBook={onReturnBook} />

    </div>
  </div>;
}


function ActionButtons({ onAddBook, onUpateBook, onRemoveBook, onReturnBook }: { onAddBook: any, onUpateBook: any, onRemoveBook: any, onReturnBook: any }) {

  if (popupState.popupType == "add-book") {
    return <button
      onClick={onAddBook}
      className='interactive-button add-book flex gap-2  self-end  cursor-pointer rounded py-1 px-4 text-white text-lg shadow'
    >
      <img src={addIMG} height={16} width={16} alt="addIMG" className="self-center" />
      <p>اضافة</p>
    </button>

  }

  return <div className="flex flex-row self-end gap-4">
    <button
      onClick={onUpateBook}
      className='interactive-button add-book  flex gap-2    rounded py-1 px-4 text-white text-lg shadow'
    >
      <img src={addIMG} height={16} width={16} alt="addIMG" className="self-center" />
      <p>حفظ</p>
    </button>
    {
      BookAction.getCurBook().available ?
        <button
          onClick={onRemoveBook}
          className='delete-book   flex gap-2  self-end  rounded py-1 px-4 text-white text-lg shadow'
        >
          <img src={addIMG} height={16} width={16} alt="addIMG" className="self-center" />
          <p>حدف</p>
        </button>


        : <button
          onClick={onReturnBook}
          className='interactive-button add-book flex gap-2  self-end  rounded py-1 px-4 text-white text-lg shadow'
        >
          <img src={subIMG} height={16} width={16} alt="subIMG" className="self-center" />
          <p>ارجاع</p>
        </button>

    }

  </div>
}


const BookDateInput = forwardRef(function({},ref : ForwardedRef<any> ) {
  function DateSelector() {
    function selectDate(option: DateSelOption) {
      setDateOption(option);
      switch (option) {
        case "week": setDateInput({ title: "بعد اسبوع", date: getDate(7) }); break;
        case "2week": setDateInput({ title: "بعد اسبوعين", date: getDate(14) }); break;
        case "month": setDateInput({ title: "بعد شهر", date: getDate(30) }); break;
      }
      setDateRec(false);
    }

    const sharedStyle = "border-gray-300 cursor-pointer py-2 px-4 border-b hover:bg-stone-100 flex items-center justify-between";
    return <div className="date-selection absolute top-12 left-0 z-10  w-full flex flex-col bg-white rounded shadow max-h-60 overflow-y-scroll">
      <p onClick={() => selectDate("manual")} className={sharedStyle}>اختر تاريخ محدد</p>
      <p onClick={() => selectDate("week")} className={sharedStyle}>بعد اسبوع</p>
      <p onClick={() => selectDate("2week")} className={sharedStyle}>بعد اسبوعين</p>
      <p onClick={() => selectDate("month")} className={sharedStyle}>بعد شهر</p>
    </div>
  }

  useEffect(() => {
    if(dateRef.current) {
      const [year, month, day] = BookingAction.getFromBookId(BookAction.getCurBook().id)?.return_date.split("/")!;
      (dateRef.current! as any).setInput(year, month, day);
      }
  })

  useImperativeHandle(ref,() => {
    return {
      getInput : () =>  {
        if(dateRef.current) {
          return (dateRef.current! as any).getInput();
        } else {
          return dateInput.date;
        }
      }
    }

  });

  const [dateRec, setDateRec] = useState(false);
  const [dateOption, setDateOption] = useState("manual");
  const dateRef = useRef<any>(null);
  const [dateInput, setDateInput] = useState({ title: "week", date: getDate(7) });

  return <div
    className={`popup-input relative flex  gap-2 text-lg m-4 pl-1 bg-white rounded shadow overflow-hidden`}
    onClick={(e: any) => e.stopPropagation()}
  >
    <p className={`title text-white font-bold flex items-center justify-center cursor-default  rounded-r ${INPUT_WIDTH}`}  >تاريخ الارجاع</p>
    <div className="flex item-center justify-between p-2 w-full" >
      {
        dateOption == "manual" ?
          <DateInput ref={dateRef} />
          : <>
            <p>{dateInput.title}</p>
            <p className="text-end flex-1 mx-2 justify-self-end">{dateInput.date.split(" ")[0]}</p>

          </>
      }
      {dateRec ? <DateSelector /> : <></>}
      <div className="self-center p-1 cursor-pointer" onClick={(e: any) => setDateRec(true)}>
        <img className="w-4" src={moreIMG} alt="moreIMG" />
      </div>

    </div>
  </div>
});



