import BgPattern from "../BgPattern";
import Input, { InputRef, inputValid } from "../Input";

import closeIMG from "../../assets/close.png";
import "./BackupDBOnline.css";
import { hidePopup, popupState } from "../../libs/popup";
import { toast } from "react-toastify";
import { loadAll } from "../../libs/books";



const INPUT_WIDTH = "w-40";


export default function BackupDBOnline() {
    function uploadDB() {
        toast.promise((window as any).db.mega.uploadDB(),
            {
                pending: 'Promise is pending',
                success: 'Promise resolved 👌',
                error: 'Promise rejected 🤯'
            }
        );        
    }
    function downloadDB() {
        toast.promise((window as any).db.mega.downloadDB(),
            {
                pending: 'Promise is pending',
                success: 'Promise resolved 👌',
                error: 'Promise rejected 🤯'
            }
        );
    }
    async function switchDB() {
        await (window as any).db.mega.switchDB();
        window.location.reload();
    }

    return <div className='flex-col p-4 filter-popup rounded shadow w-[600px]' >
        <BgPattern />


        <div className='relative z-10 w-full h-full flex flex-col gap-5 px-4 py-6' >
            <h1 className='text-2xl font-bold'>انسخ</h1>
            <div onClick={() => hidePopup()} className=' self-end -mt-12  cursor-pointer w-fit h-fit' >
                <img src={closeIMG} alt="closeIMG" width={16} />
            </div>
            <div className="h-4"></div>
            <button onClick={() => { uploadDB(); }} className='flex items-center justify-center interactive-button add-book  gap-2    rounded py-1 px-4 text-white text-lg shadow'>
                <p className="text-center">حفظ</p>
            </button>
            <button onClick={() => { downloadDB(); }} className='flex items-center justify-center interactive-button add-book  gap-2    rounded py-1 px-4 text-white text-lg shadow'>
                <p className="text-center">تحميل</p>
            </button>


            <button onClick={() => { switchDB(); }} className='flex items-center justify-center interactive-button add-book  gap-2    rounded py-1 px-4 text-white text-lg shadow'>
                <p className="text-center">تغير</p>
            </button>
        </div>


    </div>
}


