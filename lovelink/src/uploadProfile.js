import React, { useContext,useState } from 'react';
import { UserContext } from './Context';
import "./upload_Profile.css"
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import ImageIcon from '@mui/icons-material/Image';
import DeleteIcon from '@mui/icons-material/Delete';
import { imgDB, textDB } from './firebase';
import { v4 } from "uuid"
import { getDownloadURL,uploadBytes,ref} from 'firebase/storage';
import { addDoc, collection } from 'firebase/firestore';
import "./Fullname.js"
// import {UserProvider} from './UserProvider';

function Uploadprofile() {
 
  const [image,setImage]= useState(null)
  const [filename,setFilename] = useState("No file selected")
  const[img, setImg] = useState('')

  // This will send data to database
  const sendData=(e)=>{

    console.log(e.target.files[0])
    const imgs = ref(imgDB,`imgs/${v4()}`)

    uploadBytes(imgs,e.target.files[0]).then(data=>{
      console.log(data,"imgs")
      getDownloadURL(data.ref).then(val=>{
        setImg(val);
      })
    })
  }
  const handleSubmit= async ()=>{
    const valRef = collection(textDB,'UserData')
    await addDoc(valRef,{ImgUrl:img})
  }
  return (
    <div className='whole'>

      <div className="upload_Section">
      <img src={require('./Images/lovelink.png')} alt="logo" className='lovelink-logo' />
      <h2 className='selectgender_Title'>Upload your photo</h2>
        <form className='upload_Form' onClick={()=>document.querySelector(".upload_Field").click()}>
          <input type='file' accept='image/*' className='upload_Field' hidden onChange={(e)=>
            sendData(e)}></input>
         
          {image? 
            <img src={image} width="150px" height="150px" className='image_uploaded'/>
          :
          <>
          <CloudUploadIcon fontSize='large' className='upload_Image'/>
          <p className='upload_para'>Browse your files to upload.</p>
          </>
        }
      
        </form>
        <section className='upload_Details'>
          <ImageIcon className='upload_Image'/>
          {filename}
          <DeleteIcon className='upload_Delete' onClick={()=>{
            setFilename("No file selected")
            setImage(null)
          }}/>
        </section>
        <button className="next-button" onClick={handleSubmit}>Submit</button>
      
      </div>
    </div>
  )
}

export default Uploadprofile
