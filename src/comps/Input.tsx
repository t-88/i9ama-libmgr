import { ForwardedRef, forwardRef, useImperativeHandle, useRef, useState } from "react";
import "./Input.css";
import infoIMG from "../assets/info.png";


interface inputValid { func: (text: string) => boolean, msg?: string }

interface InputRef {
  checkInput: (callback?: inputValid | inputValid[]) => boolean,
  getInput: () => string,
  setInput: (text: string) => null,
};
const Input = forwardRef(function ({ title, placeholder, onEnter, className, titleClassName, children, onChange, callbacks }: { title?: string, placeholder: string, className?: string,titleClassName?: string, onEnter?: any, children?: any, onChange?: any, callbacks?: any }, ref: ForwardedRef<InputRef>) {
  function _onChange() {
    localRef.current?.classList.remove("popup-error");
    localRef.current?.classList.remove("popup-error-same");
    onChange(localRef.current?.querySelector("input")?.value);
  }





  useImperativeHandle(ref, (): InputRef => {
    return {
      checkInput(callback?: inputValid | inputValid[]) {
        callback = callback ?? { func: function (text: string) { return true; } };
        let callbacks : inputValid[] = []; 
        
        if ((callback as any).func != undefined) {
          // @ts-ignore
          callbacks = [callback];
        } else {
          // @ts-ignore
          callbacks = callback;
        }

        for (let callback of callbacks as inputValid[]) {
          if (!callback.func(localRef.current!.querySelector("input")!.value)) {
            if (localRef.current?.classList.contains("popup-error")) {
              localRef.current?.classList.remove("popup-error");
              localRef.current?.classList.add("popup-error-same");
            } else {
              localRef.current?.classList.add("popup-error");
              localRef.current?.classList.remove("popup-error-same");
            }
            setErrMsg(callback.msg ?? "");
            return false;
          }
        }

        localRef.current?.classList.remove("popup-error");
        localRef.current?.classList.remove("popup-error-same");
        return true;
      },
      getInput() {
        return localRef.current?.querySelector("input")?.value as string;
      },
      setInput(text: string) {
        localRef.current!.querySelector("input")!.value = text;
        return null;
      },

    }

  });




  const localRef = useRef<HTMLInputElement | null>(null);
  onEnter = onEnter ?? function () { };
  className = className ?? "";
  const [errMsg, setErrMsg] = useState("");
  title = title ?? "";
  children = children ?? <></>;
  onChange = onChange ?? function (title: string) { };
  callbacks = callbacks ?? [];


  return <div ref={localRef} className={'popup-input relative flex  gap-2 text-lg m-4 bg-white rounded shadow overflow-hidden ' + className}>
    {
      title == "" ? <></> : <p className={`title text-white flex items-center justify-center cursor-default w-32 font-bold rounded-r ${titleClassName}`}  >{title}</p>
    }

    <input onChange={_onChange}  {...callbacks} type="text" placeholder={placeholder} className='p-2 w-full outline-none' onKeyDown={(e) => e.key == "Enter" ? onEnter() : function () { }} />

    <img src={infoIMG} width={35} className="info-icon self-center px-2 cursor-pointer" alt="infoIMG" />

    {
      !errMsg ? <></> :
        <div className="bubble arrow-bottom">
          <div className="bubble-wrapper ">
            <span>{errMsg}</span>
          </div>
        </div>
    }


    {children}
  </div>
});

export default Input;
export { type InputRef, type inputValid };