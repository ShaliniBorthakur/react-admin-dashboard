import "./sidebar.css"
import {RiHomeLine} from "react-icons/ri"
import {BsFileBarGraph} from "react-icons/bs"
import {BiEnvelope} from "react-icons/bi"
import {TbNotes} from "react-icons/tb"
import {IoSettingsOutline} from "react-icons/io5"

function SideBar(){
  return(
    <div className="sidebar">
      <div className="logo">ACME</div>
      <div className="menubar"><RiHomeLine/><span className="menuText">Home</span></div>
      <div className="menubar"><BsFileBarGraph/><span className="menuText">Dashboard</span></div>
      <div className="menubar"><BiEnvelope/><span className="menuText">Inbox</span></div>
      <div className="menubar"><TbNotes/><span className="menuText">Product</span></div>
      <div className="menubar"><IoSettingsOutline/><span className="menuText">Admin</span></div>

    </div>
  )
}
export default SideBar;