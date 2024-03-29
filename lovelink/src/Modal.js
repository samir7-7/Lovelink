import React, { useState } from "react";
import "./Modal.css";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>

       <button className='btn' onClick={toggleModal}>Login</button>
       <button className='btn' onClick={toggleModal}>Signup</button>
        <div className="modal">
          <div className="overlay"></div>
          <div className="modal-content">
            
          </div>
        </div>
      
    </>
  );
}
