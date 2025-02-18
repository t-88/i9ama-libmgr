import './App.css';
import nav_bg from "./assets/nav-bg.jpg";
import text_logo from "./assets/text-logo.png";
import databaseIMG from "./assets/database.png";
import optionsIMG from "./assets/options.png";
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
import { popupState, toggleBackupPopup, toggleHelpPopup } from './libs/popup';
import { Menu, MenuButton, MenuDivider, MenuHeader, MenuItem, SubMenu } from '@szhsin/react-menu';
// TODO: logout animations

import '@szhsin/react-menu/dist/index.css';



function loadAll() {
  BookAction.loadAll();
  UserAction.loadAll();
  AdminAction.loadAll();
  BookingAction.loadAll();
}

function App() {

  useEffect(() => {
    loadAll();
  }, []);




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
  const CopyFuncs = {
    uploadToServer: () => {
      toast.promise((window as any).db.mega.uploadDB(),
        {
          pending: 'جاري نسخ البيانات',
          success: 'تم نسخ البيانات',
          error: 'حدثت مشكلة , يرجى اعادة المحاولة او الاتصال بخبير'
        }
      );
    },
    downloadFromServer: () => {
      toast.promise((window as any).db.mega.downloadDB(),
        {
          pending: 'جاري تحميل البيانات',
          success: 'تم تحميل البيانات بنجاح',
          error: 'حدثت مشكلة , يرجى اعادة المحاولة او الاتصال بخبير'
        }
      );
    },
    switchDB: async () => {
      const status = await (window as any).db.mega.switchDB();
      if (status == 0) {
        window.location.reload();
      } else {
        showToast(toast.error,"حدثت مشكلة, هل حملت db؟")
      }
    }
  };


  return <section className='navbar w-full relative z-[50]'>


    <div className='z-0 absolute nav-bg w-full h-full opacity-10' style={{ backgroundImage: `url(${nav_bg})` }} />



    <div className='navbar-content flex items-center justify-between pr-20 pl-4 z-10 absolute w-full h-full'>


      <div className='flex-1 w-fit flex  justify-start gap-8'>
        <img src={text_logo} alt="text_logo" width={300} />
        <NavBar />

      </div>


      <div className='z-[999]'>
        <Menu menuButton={<MenuButton className={"text-white cursor-pointer"}>القائمة</MenuButton>}>
          <SubMenu label="النسخ">
            <MenuItem onClick={() => CopyFuncs.uploadToServer()}>انسخ الى سرفر</MenuItem>
            <MenuItem onClick={() => CopyFuncs.downloadFromServer()}>حمل من سرفر</MenuItem>
            <MenuItem onClick={() => CopyFuncs.switchDB()}>فعل اخر db</MenuItem>
          </SubMenu>

          <SubMenu label="ادخل csv">
            <MenuItem>مسؤول</MenuItem>
            <MenuItem>كتب</MenuItem>
            <MenuItem>اعضاء</MenuItem>
          </SubMenu>
          <MenuItem onClick={() => toggleHelpPopup()}>مساعدة</MenuItem>

        </Menu>
      </div>




    </div>



  </section >
}

export default App;
