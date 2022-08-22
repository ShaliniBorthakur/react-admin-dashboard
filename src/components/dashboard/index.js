import { useState } from "react";
import SideBar from "../sidebar";
import Content from "./content";
import "./dashboard.css"
import HeaderTop from "./header";
import Navbar from "./navbar";

function Dashboard(props){
   
    return(
  <div className="dashboardContainer">
   
        <Navbar isSidebarOpen={props.isSidebarOpen} setIsSidebarOpen={props.setIsSidebarOpen}/>
    <div className="innercontainer"><HeaderTop/></div>
   
        {/* content  */}
        <Content/>
    
  
  </div>
  
  
)
}

export default Dashboard;