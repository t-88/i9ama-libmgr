import { useSnapshot } from "valtio";
import moreIMG from "../assets/more.png";
import { useEffect, useRef } from "react";
import GState, { toggleEditBook } from "../libs/gstate";

export default function OptionsComp({ id,idx }: { id : number,idx: number }) {

    function onClickMore() {
        toggleEditBook(idx);
    }


    useSnapshot(GState.bookMoreOptionsMenu);
    const ref = useRef<HTMLDivElement | null>(null);


    return <div ref={ref}>
            <img src={moreIMG} alt="moreIMG" className="cursor-pointer" onClick={onClickMore} />


    </div>
}