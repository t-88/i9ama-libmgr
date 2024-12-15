import './App.css';
import nav_bg from "./assets/nav-bg.jpg";
import text_logo from "./assets/text-logo.png";
import logout from "./assets/logout.png";
import PopUp from './comps/popups/Popup';
import BgPattern from './comps/BgPattern';
import { Outlet } from 'react-router';
import { useEffect } from 'react';
import ImgViewer from './comps/img-viewer/ImgViewer';
import { UserAction } from './libs/users';
import GState from './libs/gstate';
import "./pages/index/Nav.css";
import NavBar from './pages/index/Nav';
import { AdminAction } from './libs/admins';
import { BookAction } from './libs/books';
// TODO: logout animations

function App() {

  useEffect(() => {
    BookAction.loadAll();
    UserAction.loadAll();
    AdminAction.loadAll();
    BookAction.loadAll();
  })

  return (
    <div id="app" className='w-full h-full flex flex-col gap-5'>
      <ImgViewer />
      <PopUp />
      <TopBar />

      <BgPattern />
      <div className='z-10 my-6 mx-20 h-0 grow flex flex-col gap-5'>
        <Outlet />
      </div>
    </div>
  );
}


function TopBar() {
  return <section className='navbar w-full relative'>
    <div className='z-0 absolute nav-bg w-full h-full opacity-10' style={{ backgroundImage: `url(${nav_bg})` }} />
    <div className='navbar-content flex items-center justify-between px-20 z-10 absolute w-full h-full'>
      <div className='flex-1 w-fit flex  justify-start gap-8'>
        <img src={text_logo} alt="text_logo" width={300} />
          <NavBar />

      </div>
      <div className='logout-icon cursor-pointer w-fit flex  justify-end' >
        <img src={logout} alt="logout" width={28} />

      </div>
    </div>
  </section >
}

export default App;
