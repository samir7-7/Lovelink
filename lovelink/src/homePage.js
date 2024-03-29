// import React from 'react';
// import "./homePage.css";
// import {Link} from "react-router-dom";

// function homePage() {
//   return (
       
//            <div className='banner'>
//             <div className='navbar'>
//               <img className='logo' src='https://1000logos.net/wp-content/uploads/2018/07/Tinder-logo.png'>
//               </img>
//             </div>
//             <div className="content">
//               <h1>Find your patner.</h1>
//               <p>Please login or signup below to explore the world of dating <br/> and have a wonderful experience.</p>
//               <div>
//                 <Link to="/login">
//                   <button className='btn'>Login</button>
//                 </Link>
    
//                 <Link to="/signup">
//                   <button className='btn'>Signup</button>
//                 </Link>
    
//               </div>
//             </div>
//           </div>
         
//       );
//     }

// export default homePage

import React, { useState } from "react";
import "./Modal.css";
import CloseIcon from '@mui/icons-material/Close';
import "./homePage.css"
import Signup from "./signup"
import { Link} from "react-router-dom";
// import Mainpage from "./mainpage";
// import OtpVerification from './otpVerification';

function HomePage(){
  return (

    <div className='homepage-banner'>
                <div className='navbar'>
                  <img className='full-logo' src={require('./Images/lovelinkfull.png')}>
                  </img>
                </div>
                <div className="content">
                  <h1>Find your partner.</h1>
                  <p className="p">Please login or signup below to explore the world of dating <br/> and have a wonderful experience.</p>
                  <div>
                      <Link to="/mainpage">
                        <button className='buton'>Login</button>
                      </Link>
                    <Link to="/signup">
                    <button className='buton'>Signup</button>
                    </Link>
                      
                  </div>
                </div>
              </div>
        
    );
}

export default HomePage;

