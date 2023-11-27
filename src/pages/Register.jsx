import React from 'react'
import logo from "../assets/logo.png"
import Add from "../assets/addAvatar.png"

export const Register = () => {
    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <img src={logo} style={{ width: 130, height: 100 }} alt="Image Loading..." />
                {/* <span className='logo'>Chit-Chat</span> */}
                <span className='title'>Register</span>
                <form>
                    <input type='text' placeholder='Your Full Name'></input>
                    <input type='email' placeholder='Your Email'></input>
                    <input type='password' placeholder='Password'></input>
                    <input style={{ display: "none" }} type='file' id='file'></input>
                    <label htmlFor="file">
                        <img src={Add} alt=''></img>
                        <span>Add an Avatar</span>
                    </label>
                    <button>Sign-Up</button>
                </form>
                <p>You do have an account? Login</p>
            </div>
        </div>
    )
}
