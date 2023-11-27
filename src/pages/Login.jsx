import React from 'react'
import logo from "../assets/logo.png"
import Add from "../assets/addAvatar.png"

export const Login = () => {
    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <img src={logo} style={{ width: 130, height: 100 }} alt="Image Loading..." />
                {/* <span className='logo'>Chit-Chat</span> */}
                <span className='title'>Login</span>
                <form>
                    
                    <input type='email' placeholder='Your Email'></input>
                    <input type='password' placeholder='Password'></input>
                    
                    <button>Sign-In</button>
                </form>
                <p>You don't have an account? Register</p>
            </div>
        </div>
    )
}
