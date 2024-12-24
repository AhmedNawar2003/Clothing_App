import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import SideButton from "../SideButton/SideButton";
export default function Layout() {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <SideButton/>
      <Footer/>
    </div>
  )
}
