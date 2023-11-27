import React from 'react'
import Img from "../assets/myImage.jpg"

export const Message = () => {
  return (
    <div className='message owner'>
      <div className='messageInfo'>
        <img src={Img} alt="" />
        <span>just now</span>
      </div>
      <div className='messageContent'>
        <p>hello</p>
        <img src={Img} alt="" />
      </div>
    </div>
  )
}
