import { ForwardedRef, forwardRef, useImperativeHandle, useRef } from "react";
import "./Input.css";
import infoIMG from "../assets/info.png";

const Input = forwardRef(function ({ title, placeholder, onEnter, className, inputConstraint, errorMsg }: { title: string, placeholder: string, className?: string, onEnter?: any, inputConstraint?: any, errorMsg?: string }, ref: ForwardedRef<HTMLInputElement>) {
  function onChange() {
    localRef.current?.classList.remove("popup-error");
    localRef.current?.classList.remove("popup-error-same");
  }


  useImperativeHandle(ref, (): any => ({
    checkInput() {
      if (!inputConstraint(localRef.current?.querySelector("input")?.value)) {
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
    }
  }));




  const localRef = useRef<HTMLInputElement | null>(null);
  onEnter = onEnter ?? function () { };
  className = className ?? "";
  errorMsg = errorMsg ?? "";
  inputConstraint = inputConstraint ?? function (text: string) { return true; }


  return <div ref={localRef} className={'popup-input relative flex  gap-2 text-lg m-4 bg-white rounded shadow overflow-hidden ' + className}>
    <p className='text-white flex items-center justify-center cursor-default w-32 font-bold rounded-r'  >{title}</p>
    <input ref={ref} onChange={onChange} type="text" placeholder={placeholder} className='p-2 w-full outline-none' onKeyDown={(e) => e.key == "Enter" ? onEnter() : function () { }} />
    
    <img src={infoIMG} width={35} className="info-icon self-center px-2 cursor-pointer" alt="infoIMG" />

    {
      !errorMsg ? <></> :
        <div className="bubble arrow-bottom">
          <div className="bubble-wrapper ">
            <span>{ errorMsg}</span>
          </div>
        </div>
    }



  </div>
});
export default Input;