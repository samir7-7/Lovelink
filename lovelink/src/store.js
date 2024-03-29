import {configureStore} from '@reduxjs/toolkit';
import usersReducer from './usersSlice.js';
// import reducer from './usersSlice'

// const store= createStore(reducer)
export default configureStore({
   reducer:{
    users: usersReducer
   }  
})
