import { ForwardedRef, forwardRef, useImperativeHandle, useRef } from "react";
import "./Input.css";
import infoIMG from "../assets/info.png";

interface InputRef {
  checkInput: (callback? : (text : string) => boolean) => boolean,
  getInput: () => string,
  setInput: (text : string) => null,
};
const Input = forwardRef(function ({ title , placeholder, onEnter, className, errorMsg }: { title?: string, placeholder: string, className?: string, onEnter?: any,  errorMsg?: string }, ref: ForwardedRef<InputRef>) {
  function onChange() {
    localRef.current?.classList.remove("popup-error");
    localRef.current?.classList.remove("popup-error-same");
  }





  useImperativeHandle(ref, (): InputRef => {
    return {
      checkInput(callback? : (text : string) => boolean) {
        callback = callback ?? function(text : string) {return true;};
        if (!callback(localRef.current!.querySelector("input")!.value)) {

          if (localRef.current?.classList.contains("popup-error")) {
            localRef.current?.classList.remove("popup-error");
            localRef.current?.classList.add("popup-error-same");
          } else {
            localRef.current?.classList.add("popup-error");
            localRef.current?.classList.remove("popup-error-same");
          }
          return false;
        }
        localRef.current?.classList.remove("popup-error");
        localRef.current?.classList.remove("popup-error-same");
        return true;
      },
      getInput() {
        return localRef.current?.querySelector("input")?.value as string;
      },
      setInput(text  : string) {
        localRef.current!.querySelector("input")!.value = text; 
        return null;
      },
      
    }

  });




  const localRef = useRef<HTMLInputElement | null>(null);
  onEnter = onEnter ?? function () { };
  className = className ?? "";
  errorMsg = errorMsg ?? "";
  title = title ?? "";


  return <div ref={localRef} className={'popup-input relative flex  gap-2 text-lg m-4 bg-white rounded shadow overflow-hidden ' + className}>
    {
      title == "" ? <></> : <p className='text-white flex items-center justify-center cursor-default w-32 font-bold rounded-r'  >{title}</p>
    }
    
    <input  onChange={onChange} type="text" placeholder={placeholder} className='p-2 w-full outline-none' onKeyDown={(e) => e.key == "Enter" ? onEnter() : function () { }} />

    <img src={infoIMG} width={35} className="info-icon self-center px-2 cursor-pointer" alt="infoIMG" />

    {
      !errorMsg ? <></> :
        <div className="bubble arrow-bottom">
          <div className="bubble-wrapper ">
            <span>{errorMsg}</span>
          </div>
        </div>
    }



  </div>
});

export default Input;
export {type InputRef};