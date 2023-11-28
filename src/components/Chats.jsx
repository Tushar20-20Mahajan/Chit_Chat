import React from 'react'
import imageMy from "../assets/myImage.jpg"

export const Chats = () => {
  return (
    <div className='chats'>
         <div className="userChat">
                <img src={imageMy} alt='Image Loading...' />
                <div className="userChatInfo">
                    <span>Tushar</span>
                    <p>Hello</p>
                </div>
            </div>

            <div className="userChat">
                <img src={imageMy} alt='Image Loading...' />
                <div className="userChatInfo">
                    <span>Tushar</span>
                    <p>Hello</p>
                </div>
            </div>

            <div className="userChat">
                <img src={imageMy} alt='Image Loading...' />
                <div className="userChatInfo">
                    <span>Tushar</span>
                    <p>Hello</p>
                </div>
            </div>

            <div className="userChat">
                <img src={imageMy} alt='Image Loading...' />
                <div className="userChatInfo">
                    <span>Tushar</span>
                    <p>Hello</p>
                </div>
            </div>
    </div>
  )
}
