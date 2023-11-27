// import React from 'react'

// export const Chat = () => {
//   return (
//     <div className='chat'>Chat</div>
//   )
// }



import React from "react";
import Cam from "../assets/cam.png";
import Add from "../assets/add.png";
import More from "../assets/more.png";
import { Messages } from "./Messages";
// import Input from "./Input";
// import { ChatContext } from "../context/ChatContext";

export const Chat = () => {
  //const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Tushar</span>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
        <Messages />
      </div>
    </div>
  );
};

