import React from 'react'
import "./navbar.css"
import { GiHamburgerMenu } from "react-icons/gi"
import {BiSearch} from "react-icons/bi"
import {IoNotificationsOutline} from "react-icons/io5"
import {RiAccountCircleLine} from "react-icons/ri"
import {TbNotes} from "react-icons/tb"
import {MdLogout} from "react-icons/md"
import "../content/content.css";

function Navbar(props){
  function handleSidebar(){
    props.setIsSidebarOpen(!props.isSidebarOpen);
  }
  return (
    <div className="navbarcontainer">
        <div className='hamburger' onClick={handleSidebar} ><GiHamburgerMenu size="1.5rem"/></div>
        <div  className="searchBar"><BiSearch size="1.5rem"/>
        </div>
        {/* notifications */}
        <div className='profileDropdown'><span><IoNotificationsOutline size="1.5rem"/></span>
        <div class="dropdown-content">
          <div className="menuList" >
           

          <div className='users'>
        <div className='profileImg1'><img className='graphImages' src='/images/profile-pic-02.jpg'></img></div>
        <div className='usersPlace'>Bavid Kames
        <div><small>Assigned you on the call with Sara</small></div>
        </div>
        <div>2 mins ago</div>
        <div className='profileImg1'><img className='graphImages' src='/images/profile-pic-06.jpg'></img></div>
        <div className='usersPlace'>Alexa Mary
        <div><small>Marked the task New UI as done</small></div>
        </div>
        <div>5 mins ago</div>
        <div className='profileImg1'><img className='graphImages' src='/images/profile-pic-05.jpg'></img></div>
        <div className='usersPlace'>Eva Maria
        <div><small>Added a new comment on Sales Task</small></div>
        </div>
        <div>10 mins ago</div>
      </div>


          </div>
        </div>
        </div>
        {/* profile */}
        <div className='profileDropdown'><span>John Doe</span>
        <div class="dropdown-content">
          <div className='menuList'>
          <div className='listItems' >
         <p><span><RiAccountCircleLine/></span>  My Profile</p> 
          </div>
          <div className='listItems' >
         <p><span><TbNotes/></span> Biling</p> 
          </div>
          <div className='listItems' >
         <p><span><MdLogout/></span> Logout</p> 
          </div>
        </div>
        </div>

    </div>
    <div className='profileImg' ><img className='graphImages' src='/images/profile-pic-01.jpg' /></div>

    </div>
  )
}

export default Navbar
