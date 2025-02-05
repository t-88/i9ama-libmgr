import { useNavigate } from "react-router";
import GState, { NavTabName } from "../../libs/gstate";

import group from "../../assets/group.png";
import books from "../../assets/books.png";
import { useSnapshot } from "valtio";
import "./Nav.css";

function NavBar() {
    function to(path : NavTabName) {
        GState.tabIdx = path;
        switch (path) {
            case "books": navigator("/"); break;
            case "users": navigator("users"); break;
            case "admins": navigator("admins"); break;
        }
    }

    let navigator = useNavigate();
    useSnapshot(GState);

    return  <div id='nav-bar' className='flex gap-8 justify-self-start flex-1 self-center items-center'>
        <br />
    <p onClick={() => to("admins")} className={`${GState.tabIdx == "admins" ? "nav-active" : ""} text-lg text-white cursor-pointer py-1 w-28 text-center rounded-2xl hover:font-bold`}>المسؤولين</p>
    <p onClick={() => to("books")} className={`${GState.tabIdx == "books" ? "nav-active" : ""}      text-lg text-white cursor-pointer py-1 w-28 text-center rounded-2xl hover:font-bold`}>الكتب</p>
    <p onClick={() => to("users")} className={`${GState.tabIdx == "users" ? "nav-active" : ""}      text-lg text-white cursor-pointer py-1 w-28 text-center rounded-2xl hover:font-bold`}>الاعضاء</p>

  </div>


}

export default NavBar;