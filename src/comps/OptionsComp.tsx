import { useSnapshot } from "valtio";
import moreIMG from "../assets/more.png";
import { useEffect, useRef } from "react";
import GState from "../libs/gstate";

export default function OptionsComp({ idx, onClick }: { idx: number, onClick? : any }) {

    function onClickMore() {
        onClick(idx);
    }


    useSnapshot(GState.bookMoreOptionsMenu);
    const ref = useRef<HTMLDivElement | null>(null);
    onClick = onClick ?? function() {}; 

    return <div ref={ref}>
            <img src={moreIMG} alt="moreIMG" className="w-4 cursor-pointer" onClick={onClickMore} />


    </div>
}