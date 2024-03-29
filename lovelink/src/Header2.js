import React from 'react';
import "./Header.css";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import IconButton from '@mui/material/IconButton';
import {Link,useNavigate} from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos"

function Header2({backButtonn}) {
  const history = useNavigate();
 
  return (
    <div className='header-header'>
      {
        backButtonn ?(
            <IconButton>
            <ArrowBackIosIcon onClick={()=>history('/chatpage')} className='header_icon' fontSize='large'></ArrowBackIosIcon>
            </IconButton>
         
        ):
        (
          
            <IconButton>
           <PermIdentityIcon className='header_icon' fontSize='large' />
          </IconButton>
          
          
        )
      }

      
      <Link to="/">
        <img className='header_image' src={require('./Images/lovelink.png')} alt='logo'></img>
      </Link>
      
      <Link to="/chatpage">
        <IconButton>
          <MailOutlineIcon className='header_icon' fontSize='large' />
        </IconButton>
      </Link>

    </div>
  );
}

export default Header2;