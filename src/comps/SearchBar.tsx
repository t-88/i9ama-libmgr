
import searchIMG from "../assets/search.png";
import filterIMG from "../assets/slider.png";

import GState from "../libs/gstate";
import { useSnapshot } from "valtio";
import "./SearchBar.css";
import { ForwardedRef, forwardRef, useImperativeHandle, useRef } from "react";


const SearchBar = forwardRef(function ({ placeholder, showFilter, onEnter }: { placeholder?: string, showFilter?: boolean, onEnter?: any }, ref?: ForwardedRef<any>) {
    useSnapshot(GState.filterState);
    function onShowFilter() {
        GState.filterState.visible = !GState.filterState.visible;
    }

    placeholder = placeholder ?? "";
    showFilter = showFilter ?? true;

        useImperativeHandle(ref, () => {
            return {
                getInput: () => {
                    return localRef.current?.querySelector("input")?.value as string;
                }
            }
        })

    const localRef = useRef<HTMLInputElement | null>(null);
    onEnter = onEnter ?? function ()  {};

    return <section ref={localRef}  className="search-bar-container flex-1">
        <div className="search-bar bg-white rounded flex gap-4  shadow h-full w-full">
            <div className="self-center icon-r px-4 h-full flex">
                <img src={searchIMG} alt="searchIMG" className="self-center" />
            </div>
            <input onKeyDown={(e) => e.key =="Enter" ? onEnter() : "" } type="text" className=" w-full text-2sm" placeholder={placeholder} />
            {
                showFilter ?
                    <div className={`self-center hoverable cursor-pointer icon-l px-4 h-full flex ${GState.filterState.visible ? "filter-visible" : ""}`} onClick={onShowFilter}>
                        <img src={filterIMG} alt="filterIMG" className="self-center" />
                    </div>
                    :
                    <></>
            }
        </div>
    </section>;
})


export default SearchBar;