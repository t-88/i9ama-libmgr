import BgPattern from "../BgPattern";

import closeIMG from "../../assets/close.png";
import "./AddAdminPopup.css"
import { hidePopup, popupState, toggleEditBookID } from "../../libs/popup";




export default function HelpPopup() {


  return <div className='filter-popup rounded shadow w-2/4' onClick={(e) => e.stopPropagation()} >
    <BgPattern />
    <div className='relative z-10 w-full flex flex-col gap-2 px-6 py-8' >

      <div className='self-end cursor-pointer w-fit h-fit' onClick={() => hidePopup()}>
        <img src={closeIMG} alt="closeIMG" width={16} />
      </div>

      <h1 className='text-2xl font-bold'>معلومات حول المطورين</h1>
      <br />
      <ul style={{listStyle : "disc"}}>
        <li className="text-xl p-1 mr-12 font-medium">ذويبي تقي الدين</li>
        <li className="text-xl p-1 mr-12 font-medium">حجاج داوود</li>
        <li className="text-xl p-1 mr-12 font-medium">بوخاري ايمن</li>
      </ul>



    </div>
  </div>
}
