import React from "react";
import Dashboard from "../dashboard";
import SideBar from "../sidebar";

import "./layout.css"
function Layout(props) {
  return props.isSidebarOpen ?(
    <div className="layout2">
        <SideBar/>
        <Dashboard isSidebarOpen={props.isSidebarOpen} setIsSidebarOpen={props.setIsSidebarOpen}/>    
    </div>
  ):( <div className="layout1">
    
  <Dashboard isSidebarOpen={props.isSidebarOpen} setIsSidebarOpen={props.setIsSidebarOpen}/>    
  </div>)}
  

  


export default Layout;