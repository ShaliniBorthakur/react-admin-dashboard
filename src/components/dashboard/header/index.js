import React from 'react'
import "./header.css"
const HeaderTop = () => {
  return (
    <div className='headerTop'>
        <div className='overview'><p>Overview</p></div>
        <div className='addfunds'><button>Add Funds <span className='icon'>+</span></button></div>
    </div>
  )
}

export default HeaderTop