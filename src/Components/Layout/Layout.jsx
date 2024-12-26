import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import SideButton from "../SideButton/SideButton";
export default function Layout({user,setUser}) {
  return (
    <div>
      <Navbar user={user} setUser={setUser}/>
      <Outlet/>
      <SideButton/>
      <Footer/>
    </div>
  )
}
