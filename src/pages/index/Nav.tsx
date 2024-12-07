import { useNavigate } from "react-router";
import GState from "../../libs/gstate";

import group from "../../assets/group.png";
import books from "../../assets/books.png";
import { useSnapshot } from "valtio";


function NavBar() {


    function toBooks() {
        navigator("/");
        GState.tabIdx = 0;
    }
    function toUsers() {
        navigator("users");
        GState.tabIdx = 1;
    }

    let navigator = useNavigate();
    useSnapshot(GState);

    return <div className='flex flex-row'>
        <section className='drop-shadow drawer-container flex flex-row items-center justify-center overflow-hidden w-full scale-90'>
            <div onClick={toBooks} className={`nav-item ${GState.tabIdx == 0 ? "nav-active" : ""}  w-20 h-full rounded-r-lg cursor-pointer flex align-center  justify-center p-3`}>
                <img src={books} alt="books" />
            </div>
            <div onClick={toUsers} className={`nav-item  ${GState.tabIdx == 1 ? "nav-active" : ""}  w-20 h-full rounded-l-lg cursor-pointer flex align-center  justify-center p-3`} >
                <img src={group} alt="group" />
            </div>
    
        </section>
    </div>
}

export default NavBar;