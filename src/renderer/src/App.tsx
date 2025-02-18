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

import Papa from "papaparse";


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
        showToast(toast.error, "حدثت مشكلة, هل حملت db؟")
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
            <MenuItem disabled >مسؤول</MenuItem>
            <MenuItem disabled>كتب</MenuItem>
            <MenuItem onClick={async () => {
              const data = await (window as any).utils.openForCsv();

              const csv = Papa.parse(data, {
                header: true, // Set to false if the CSV has no headers
                skipEmptyLines: true,
              });

              for (let item of csv.data) {
                let parseItem = {};
                parseItem["first_name"] = item["الاسم"] ?? "Unknown";
                parseItem["last_name"] = item["اللقب"] ?? "Unknown";
                parseItem["date_of_birth"] = item["تاريخ الميلاد"] ?? "Unknown";
                parseItem["al_wilaya"] = item["الولاية"] ?? "Unknown";
                parseItem["phone_number"] = item["رقم الهاتف"] ?? "Unknown";
                parseItem["email"] = item["البريد الإلكتروني"] ?? "Unknown";
                parseItem["residense_block_number"] = item["الجناح"] ?? "Unknown";
                parseItem["residense_room_number"] = item["الغرفة"] ?? "Unknown";
                if(Number.parseInt(item["رقم الطالب (Matricule)"])) {
                  parseItem["school_matericule"] = Number.parseInt(item["رقم الطالب (Matricule)"]) ?? "Unknown";
                } else {
                  parseItem["school_matericule"] = item["رقم الطالب (Matricule)"] ?? "Unknown";
                }
                parseItem["school"] = item["المؤسسة الجامعية"] ?? "Unknown";
                parseItem["year_of_study"] = item["السنة الدراسية"] ?? "Unknown";
                parseItem["study_specialty"] = item["التخصص الدراسي"] ?? "Unknown";
                parseItem["img_card_personal_url"] = item["صورة شخصية"] ?? "Unknown";
                parseItem["img_card_residency_url"] = item["بطاقة الإقامة"] ?? "Unknown";
                parseItem["img_school_certificate_url"] = item["شهادة مدرسية"] ?? "Unknown";
                UserAction.add(parseItem);
              }

            }}>اعضاء</MenuItem>
          </SubMenu>
          <MenuItem onClick={() => toggleHelpPopup()}>مساعدة</MenuItem>

        </Menu>
      </div>




    </div>



  </section >
}

export default App;
