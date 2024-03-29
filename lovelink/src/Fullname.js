import React, { useState,useContext } from 'react';
import "./Fullname.css"
import PersonIcon from '@mui/icons-material/Person';
import { textDB } from './firebase'
import { v4 } from "uuid"
// import {getDatabase, ref,set, get, child } from "firebase/database";
import { addDoc, collection } from 'firebase/firestore';
import { Link, useNavigate } from 'react-router-dom';
import { app } from "./firebase"
import Uploadphoto from "./uploadProfile.js"
import { UserContext } from './Context';


function Fullname() {

  const navigate = useNavigate();
  const [fullname, setFullname] = useState('')

  const getName = (e) => {
    setFullname(e.target.value);
  } 

  const handleNext = () => {
    if (fullname.length >= 3) {
      navigate("/dob")
    }
    else {
      alert("Please enter your name.")
    }
  }



  return (
    <div className='whole'>
      <div className="fullname-container">
        <div className="fullname-header">
          <img src={require('./Images/lovelink.png')} alt="logo" className='fullnamelovelink-logo' />
          <div className="text">
            Enter your name
            <div className="fullname-underline"></div>
          </div>
          <div className="fullname-para">
            <p>Enter your real name because it will be shown on your profile.</p>
          </div>
        </div>
        <form action="">
          <div className="fullname-inputs">
            <div className="fullname-input">
              <PersonIcon className='picon' fontSize='medium' />
              <input type='text' name='Name' id='fullname' placeholder='Name' required
                onChange={getName}
              ></input>
            </div>
          </div>
        </form>
        <div className="fullname-submit">
          <div className="fullname-next" onClick={handleNext} id='Nextt'>Next</div>

        </div>
      </div>
      <div className="hidden">
      <Uploadphoto name={fullname}/>
      </div>
     
    </div>
    
  )
}

export default Fullname