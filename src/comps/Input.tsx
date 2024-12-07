import { ForwardedRef, forwardRef } from "react";

const Input = forwardRef(function ({ title, placeholder  }: { title: string, placeholder: string },ref  : ForwardedRef<HTMLInputElement>) {
  return <div className='popup-input flex  gap-2 text-lg m-4 bg-white rounded shadow overflow-hidden'>
    <p className='text-white flex items-center justify-center cursor-default w-32 font-bold'  >{title}</p>
    <input ref={ref} type="text" placeholder={placeholder} className='p-2 w-full outline-none' />
  </div>;
});
export default Input;