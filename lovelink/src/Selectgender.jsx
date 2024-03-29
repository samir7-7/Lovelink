import React, { useState } from 'react';
import './selectgender.css';
import {useNavigate} from "react-router-dom";
import Uploadphoto from "./uploadProfile"

const GenderSelection = () => {
  const navigate = useNavigate();
  const [gender, setGender] = useState('');
  const [showGender, setShowGender] = useState(false);

  const handleGenderSelect = (selectedGender) => {
    setGender(selectedGender);
    
  };

  const handleShowGenderChange = () => {
    setShowGender(!showGender);
  };

  const handleNext = () => {
    if(gender.length>=3){
      navigate("/uploadphoto")
    }
    else{
      alert("Please select your gender.")
    }
  };

  return (
    <div className="whole">
        <div className="gender-selection">
        <img src={require('./Images/lovelink.png')} alt="logo" className='lovelink-logo' />
      <h2 className='selectgender_Title'>What’s your gender?</h2>
      <div className="button-group">
        <button className={`gender-button ${gender === 'Man' ? 'selected' : ''}`} onClick={() => handleGenderSelect('Man')} >Man</button>
        <button className={`gender-button ${gender === 'Woman' ? 'selected' : ''}`} onClick={() => handleGenderSelect('Woman')}>Woman</button>
        <button className={`gender-button ${gender === 'Lesbian' ? 'selected' : ''}`} onClick={() => handleGenderSelect('Lesbian')}>Lesbian</button>
        <button className={`gender-button ${gender === 'Gay' ? 'selected' : ''}`} onClick={() => handleGenderSelect('Gay')}>Roshan</button>
      </div>
      
      
      <button className="next-button" onClick={handleNext}>Next</button>
      
    </div>
     <div className="hidden">
      {/* <Uploadphoto gender={gender}/> */}
    </div>
    </div>
    
  );
};

export default GenderSelection;
