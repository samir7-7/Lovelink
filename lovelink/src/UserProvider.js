// UserProvider.js
import React, { useState } from 'react';
import { UserContext } from './Context';


export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    fullname: '',
    // dob: '',
    // gender: '',
    // ImgURL: ''
  });

  return (
    <>
     <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
    <div>
        <button>
            haha
        </button>
    </div>
    </>
   
  );
};



