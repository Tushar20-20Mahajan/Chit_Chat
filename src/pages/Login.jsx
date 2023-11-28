import React ,{useState}from 'react'
import logo from "../assets/logo.png"
import Add from "../assets/addAvatar.png"
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";


export const Login = () => {
   
        const [err, setErr] = useState(false);
        const navigate = useNavigate();
      
        const handleSubmit = async (e) => {
          e.preventDefault();
          const email = e.target[0].value;
          const password = e.target[1].value;
      
          try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/")
          } catch (err) {
            setErr(true);
          }
        };
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
                <p>You don't have an account? <Link to="/register">Register</Link></p>
            </div>
        </div>
    )
}
