import React from 'react'
import logo from "../assets/logo.png"
import imageMy from "../assets/myImage.jpg"

export const Navbar = () => {
  return (
    <div className='navbar'>
         <img src={logo} style={{ width: 90, height: 60 }} alt="Image Loading..." />
         <div className='user'>
            <img src={imageMy} alt='Image Loading...' />
            <span>Tushar</span>
            <button>Logout</button>
         </div>
    </div>
  )
}
