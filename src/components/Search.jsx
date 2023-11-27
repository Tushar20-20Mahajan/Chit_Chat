import React from 'react'
import imageMy from "../assets/myImage.jpg"

export const Search = () => {
    return (
        <div className='search'>
            <div className="searchForm">
                <input type='text' placeholder='Find a user'></input>
            </div>
            <div className="userChat">
                <img src={imageMy} alt='Image Loading...' />
                <div className="userChatInfo">
                    <span>Tushar</span>
                </div>
            </div>

        </div>
    )
}
