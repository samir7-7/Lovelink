import React, { useState} from 'react';
import "./dob.css"
import { Link, useNavigate } from 'react-router-dom';
import { textDB } from './firebase'
import { addDoc, collection } from 'firebase/firestore';  
import Uploadphoto from "./uploadProfile"
function Dob() {
    const navigate = useNavigate();
    const [dob, setDob] = useState('');


    const getDob = (e)=>{
      setDob(e.target.value)
    }
    const handleNext = () => {
    
        // const names= e.target.value.length
        if(dob.length>=5){
          navigate("/selectgender")
        }
        else{
          alert("Please enter your birth date.")
        }
  
      }
  return (
    
        <div className="whole">
            <div className="dob-container">
            <div className="dob-header">
                <img src={require('./Images/lovelink.png')} alt="logo" className='lovelink-logo' />
                <div className="text">
                    Enter your DOB
                    <div className="underline"></div>
                </div>

                <div className="para">
                <p>Enter it freely because age is just a number.</p>
                </div>
                </div>

                <form action="" className='dobb'>
                    <input onChange={getDob} type="date" name="dob" id="Dob" placeholder='mm/dd/yyyy' />
                </form>

                <div className="dob-submit">
                <div className="Next"onClick={handleNext}>Next</div>
               
                </div>

        </div>
        <div className="hidden">
          {/* <Uploadphoto dob={dob}/> */}
        </div>
  
        </div>
  )
}

export default Dob