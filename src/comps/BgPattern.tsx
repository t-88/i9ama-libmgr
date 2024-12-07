import mainbgIMG from "../assets/main-bg.png";

export default function BgPattern() {
    return <div className='main-bg z-0 absolute nav-bg w-full h-full' style={{ backgroundImage: `url(${mainbgIMG})` }} />;
}