'use client'
import React, { useState, useEffect } from 'react';
import "./signup.css";
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import { auth } from './firebase.js';
import { createUserWithEmailAndPassword,
         sendPasswordResetEmail,
         signInWithEmailAndPassword
    } from "firebase/auth";

import { Link, useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux'; 
import { setUser } from './usersSlice.js';
import { Provider } from 'react-redux'; // Import the Redux Provider

// import {setUser} from './usersSlice.js';


 

const Signup = () => {
    const dispatch = useDispatch();
    const navigate= useNavigate();
    const [action, setAction] = useState("Sign Up");
    console.log(auth);
    const [userCredentials, setuserCredentials] = useState({});

    // Function to handle inputs
    function handleuserCredentials(e) {
        setuserCredentials({ ...userCredentials, [e.target.name]: e.target.value });
        console.log(userCredentials);
    }

    function handleSignUp(e) {
        e.preventDefault();
        createUserWithEmailAndPassword(auth,userCredentials.email, userCredentials.password)
        .then((userCredential) => {
                // Signed up 
                console.log(userCredential.user);
                dispatch(setUser({id: userCredential.user.uid, email: userCredential.user.email}));
                navigate("/fullname")
            })
        .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
                alert(errorMessage);
                // ..
            });
    }

    function handleLogin(e,userCredential){
        e.preventDefault();
        signInWithEmailAndPassword(auth, userCredentials.email, userCredentials.password)
        .then((userCredentials) => {
            // Signed in 
            dispatch(setUser({id: userCredential.user.uid, email: userCredential.user.email}));
            const user = userCredentials.user;
            console.log(user)
            navigate("/mainpage")

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        });
    }

    function handleReset(){
        const email = prompt('Please enter your email');
        sendPasswordResetEmail(auth,email);
        alert('Email Sent! Check your inbox for password reset instructions.');
    }


    return (
     
      <div className="whole">
            <div className='signup-container'>
                <img src={require('./Images/lovelink.png')} alt="logo" className='lovelinkfull-logo' />
                <div className="header">
                    <div className="text">

                        {action}
                    </div>
                    <div className="underline"></div>
                </div>
                <form action="">
                    <div className="inputs">
                        {/* {action === "Login" ? <div></div> :
                            <div className="input">
                                <PersonIcon className='iconss' fontSize='small' />
                                <input type='text' name='name' onChange={(e) => { handleuserCredentials(e) }} placeholder='Name'></input>
                            </div>} */}

                        <div className="input">
                            <EmailIcon className='iconss' fontSize='small' />
                            <input type='Email' name='email' onChange={(e) => { handleuserCredentials(e) }} placeholder='Email Id'></input>
                        </div>

                        <div className="input">
                            <LockIcon className='iconss' fontSize='small' />
                            <input type='password' name='password' onChange={(e) => { handleuserCredentials(e) }} placeholder='Password'></input>
                        </div>
                    </div>
                </form>

                {action === "Sign Up" ? <div></div> :
                    <div className="forgot-password">Forgot password?<p className="ppp"onClick={handleReset}>Click Here!</p></div>
                }

                <div className="submit-container">
                    <div className={action === "Login" ? "submit gray" : "submit"} onClick={(e) => { setAction("Sign Up"); { handleSignUp(e) } }}>
                        Sign Up
                    </div>
                    <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={(e) => { setAction("Login"); { handleLogin(e) } }}>
                        Login
                    </div>

                   
                </div>
            </div>
        </div>

        

    )
}

export default Signup