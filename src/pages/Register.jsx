import React, { useState } from 'react'
import logo from "../assets/logo.png"
import Add from "../assets/addAvatar.png"
import { createUserWithEmailAndPassword , updateProfile} from "firebase/auth";
import { auth ,storage} from "../firebase";
import {  ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export const Register = () => {

    const [err, setErr] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault()

        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];

        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);


            
            const storageRef = ref(storage, displayName);

            const uploadTask = uploadBytesResumable(storageRef, file);

            // Register three observers:
            // 1. 'state_changed' observer, called any time the state changes
            // 2. Error observer, called on failure
            // 3. Completion observer, called on successful completion
            uploadTask.on('state_changed',
                
                (error) => {
                    // Handle unsuccessful uploads
                    setErr(true);

                },
                () => {
                    // Handle successful uploads on complete
                    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                    getDownloadURL(uploadTask.snapshot.ref).then( async (downloadURL) => {
                        await updateProfile(
                            res.user,{

                                displayName,
                                photoURL:downloadURL,
                            }
                        ); 
                    });
                }
            );


        }
        catch (err) {
            setErr(true);

        }

    };

    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <img src={logo} style={{ width: 130, height: 100 }} alt="Image Loading..." />
                {/* <span className='logo'>Chit-Chat</span> */}
                <span className='title'>Register</span>
                <form onSubmit={handleSubmit}>
                    <input type='text' placeholder='Your Full Name'></input>
                    <input type='email' placeholder='Your Email'></input>
                    <input type='password' placeholder='Password'></input>
                    <input style={{ display: "none" }} type='file' id='file'></input>
                    <label htmlFor="file">
                        <img src={Add} alt=''></img>
                        <span>Add an Avatar</span>
                    </label>
                    <button>Sign-Up</button>
                    {err && <span>Something went Wrong</span>}
                </form>
                <p>You do have an account? Login</p>
            </div>
        </div>
    )
}
