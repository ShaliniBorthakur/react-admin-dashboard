import React from 'react'
import "./content.css"
import Data from './data'
import {RiTwitterFill} from "react-icons/ri"
import {IoLogoFacebook} from "react-icons/io"
import {AiFillLinkedin} from "react-icons/ai"
import {FaWhatsapp} from "react-icons/fa"

const Content = () => {
  const src="https://youtu.be/bC6_FMqX_Y8"
  return (
    <div className="content">
    <div >
        <div className='div-left'>
        <div className='card'> 
            <img className='graphImages' src='/images/graph1.png'/>
        </div>
        <div className='card'> 
         <img className='graphImages' src='/images/graph2.png'/>
        </div>
        </div>
       <Data/>
    </div>
    <div className='div-right'>
    <div className='card'>
      {/* profile details */}
      <div className='profileDetails'>
    <div className='profileImage'><img className='graphImages' src="images/profile-pic-01.jpg"/></div>
    <div ><b> Nick Herasimenka</b></div>
    <div><small>United States</small></div>
    {/* icons */}
    <div ><RiTwitterFill className='pofileIcon'/>
        <IoLogoFacebook className='pofileIcon'/>
        <AiFillLinkedin className='pofileIcon'/>
        <FaWhatsapp className='pofileIcon'/>
    </div>
   
      </div>
   <div className='divider'>
    </div>
      {/* users */}
      <div>Our Users
      <div className='users'>
        <div className='usersImage'><img className='graphImages' src='/images/profile-pic-03.jpg'></img></div>
        <div className='usersPlace'>Drew James
        <div><small>United States</small></div>
        </div>
        <div>Mobile: 8715674877</div>
        <div className='usersImage'><img className='graphImages' src='/images/profile-pic-02.jpg'></img></div>
        <div className='usersPlace'>Brian Kames
        <div><small>United States</small></div>
        </div>
        <div>Mobile: 8715674877</div>
        <div className='usersImage'><img className='graphImages' src='/images/profile-pic-04.jpg'></img></div>
        <div className='usersPlace'>Lamid Emes
        <div><small>United States</small></div>
        </div>
        <div>Mobile: 8715674877</div>
      </div>
      </div>
    </div>

    <div className='card'>
      {/* <img src='images/video-thumbnail.png'></img> */}
      <video  controls width="100%"  poster='images/video-thumbnail.png' autoPlay>
        <source src={src}  type="video/mp4"/>
        </video>
        </div>

    </div>
    </div>
  )
}
// src='images/video-thumbnail.png'
export default Content