import { ForwardedRef, forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import { getDate } from "../libs/utils";

const DateInput = forwardRef(function ({ }, ref: ForwardedRef<any>) {
    useImperativeHandle(ref, (): any => {
        return {
            getInput: (): string => {
                const date =  new Date(yearRef.current!.value + "-" + monthRef.current!.value + "-"  + dayRef.current!.value);
                return date.toISOString().replace('T', ' ').split(" ")[0].replaceAll("-","/");
            },
            setInput: (year : string,month: string ,day: string) => {
                dayRef.current!.value = day; 
                monthRef.current!.value = month; 
                yearRef.current!.value = year;
            }            
        };
    });

    const dayRef = useRef<HTMLInputElement | null>(null);
    const monthRef = useRef<HTMLInputElement | null>(null);
    const yearRef = useRef<HTMLInputElement | null>(null);


    let limitInput = (ref: any, max: number) => {
        if(ref.current!.value == "" || Number.isNaN(Number.parseInt(ref.current!.value))) {
            ref.current!.value = "1";
        }
        ref.current!.value = Math.max(1, Math.min(max, Number.parseInt(ref.current!.value)));
    } 
    return <div className="w-64 flex flex-row gap-1">
        <input ref={dayRef} onChange={(e) => limitInput(dayRef, 30)} maxLength={2} className="w-12 text-center  border rounded px-2" placeholder="dd" type="text" />/
        <input ref={monthRef} onChange={(e) => limitInput(monthRef, 12)} maxLength={2} className="w-12 text-center  border rounded px-2" placeholder="mm" type="text" />/
        <input ref={yearRef}  onChange={(e) => limitInput(yearRef, 5000)} maxLength={4} className="w-16 text-center border rounded px-2" placeholder="yyyy" type="text" />
    </div>
});

export default DateInput;