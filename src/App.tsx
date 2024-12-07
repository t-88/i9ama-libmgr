import './App.css';
import nav_bg from "./assets/nav-bg.jpg";
import text_logo from "./assets/text-logo.png";
import logout from "./assets/logout.png";
import NavBar from './pages/index/Nav';
import PopUp from './comps/popups/Popup';
import BgPattern from './comps/BgPattern';
import { Outlet } from 'react-router';

// TODO: logout animations


function App() {



  return (
    <div id="app" className='w-full h-full flex flex-col gap-5'>

      <PopUp />
      <TopBar />

      <section className='w-full h-full relative'>
        <BgPattern />
        <div className='absolute z-10 w-full flex flex-col gap-5'>
          <NavBar />
          <Outlet />
        </div>
      </section>
    </div>
  );
}


function TopBar() {
  return <section className='navbar w-full relative'>
    <div className='z-0 absolute nav-bg w-full h-full opacity-10' style={{ backgroundImage: `url(${nav_bg})` }} />
    <div className='navbar-content flex items-center justify-between px-20 z-10 absolute w-full h-full'>
      <img src={text_logo} alt="text_logo" width={300} />
      <img src={logout} alt="logout" width={28} className='logout-icon cursor-pointer' />
    </div>
  </section>
}

export default App;
