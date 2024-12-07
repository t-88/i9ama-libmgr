
import searchIMG from "../assets/search.png";
import filterIMG from "../assets/slider.png";
import addIMG from "../assets/add.png";
import  { toggleAddBook, toggleFilterBooks } from "../libs/gstate";

export default function SearchBar() {
    return <section className="search-bar-container">
        <h1 className="text-3xl font-bold">الكتب:</h1>
        <br />
        <div className="px-16 flex flex-row justify-between">
            <div className="search-bar bg-white rounded flex gap-4  w-4/6 shadow">
                <div className="self-center icon-r px-4 h-full flex">
                    <img src={searchIMG} alt="searchIMG" className="self-center" />
                </div>
                <input type="text" className=" w-full text-2sm" placeholder="ابحث عن كتاب..." />
                <div className="self-center hoverable cursor-pointer icon-l px-4 h-full flex" onClick={() => toggleFilterBooks()}>
                    <img src={filterIMG} alt="filterIMG" className="self-center" />
                </div>


            </div>
            <button className="px-4 mx-16 py-3 rounded shadow text-white flex gap-4 align-center justify-center h-fit" onClick={() => toggleAddBook()}>
                <img src={addIMG} height={16} width={16} alt="addIMG" className="self-center" />
                <p className="text-2sm text-bold ">اضف كتاب</p>
            </button>
        </div>
    </section>;
}