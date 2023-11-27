import React from 'react'

export const Register = () => {
  return (
   <div className='formContainer'>
    <div className='formWrapper'>
    <form>
        <input type='text' placeholder='Your Full Name'></input>
        <input type='email' placeholder='Your Email'></input>
        <input type='password' placeholder='Password'></input>
        <input type='file'></input>
    </form>
    </div>
   </div>
  )
}
