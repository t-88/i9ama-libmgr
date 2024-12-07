import { useSnapshot } from "valtio";
import moreIMG from "../../assets/more.png";
import GState, { toggleEditBook } from "../../libs/gstate";
import { useRef } from "react";

export default function OptionsComp({ id,idx }: { id : number,idx: number }) {

    function onClickMore() {
        toggleEditBook(idx);
    }
    useSnapshot(GState.bookMoreOptionsMenu);

    return <section>
            <img src={moreIMG} alt="moreIMG" className="cursor-pointer" onClick={onClickMore} />


    </section>
}