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
import { BookingAction } from './libs/booking';
import { toast, ToastContainer } from 'react-toastify';
import { showToast } from './libs/utils';
// TODO: logout animations


function loadAll() {
  BookAction.loadAll();
  UserAction.loadAll();
  AdminAction.loadAll();
  BookingAction.loadAll();
}

function App() {

  useEffect(() => {
    loadAll();
  }, [])


  return (
    <div id="app" className='w-full h-full flex flex-col gap-5'>

    <div className='absolute'>
    <ToastContainer
        position='bottom-center'
        stacked={true}
      />
    </div>

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
      
      <div>
        <button onClick={async () =>  { 
          showToast(toast.loading,"جاري ملأ البيانات");
          (window as any).db.db_fake.books_fillDB(); 
          (window as any).db.db_fake.users_fillDB();
          showToast(toast.success,"تم ملأ البيانات");
          loadAll();
        }} className='p-2 hover:bg-gray-200 bg-white rounded-lg font-bold cursor-pointer'>املاء بمعلومات تجريبية</button>

      </div>
      {/* <div className='logout-icon cursor-pointer w-fit flex  justify-end' > */}
        {/* <img src={logout} alt="logout" width={28} /> */}
      {/* </div> */}
    </div>
  </section >
}

export default App;
