import React from 'react';
import Header from './Header';
import ProfileCards from './ProfileCards';
import "./mainpage.css"


function mainpage() {
  return (
    <div id='overflow_hidden'>
       <Header backButton="/mainpage"/>
        <ProfileCards/>
    </div>
      
  );
}

export default mainpage;