import { Flip, toast } from "react-toastify";

type DateSelOption = "manual" | "week" | "2week" | "month";


function getDate(offset?: any) {
    offset = offset ?? 0;
    const today = new Date();
    const offseted = new Date();
    offseted.setDate(today.getDate() + offset);
    return offseted.toISOString().replace('T', ' ').split(" ")[0].replaceAll("-","/");
}

export function showToast(type,msg) {
    toast.dismiss();
    type(msg, {
      position: "bottom-center",
      autoClose: 800,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      transition: Flip, 
    });    
}

export {
    getDate
};
export type {
    DateSelOption
}