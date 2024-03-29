'use client'
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import HomePage from "./homePage";
import Header from './Header';
import ProfileCards from "./ProfileCards";
import Signup from "./signup";
import Mainpage from "./mainpage";
import { Provider } from 'react-redux';
import  Chat from "./Chat";
import Chatpage from "./Chatspage";
// import {store} from './store'
// import { Provider } from "react-redux";





function App() {
  // const user = useSelector(selectUsers);
  return (
    <>
     
      {/* <Provider store={store}>
        <View>
          <Text>Hiii</Text>
        </View>
      </Provider> */}
      <Router>
        <Routes>
          <Route path="/chatpage/:person">
            <Header backButton="/chatpage"/>
          </Route>
          <Route path="/mainpage" element={<Chat/>}></Route>
          <Route path="/mainpage" element={<Mainpage/>}></Route>
          <Route index element ={<Mainpage />} />
          <Route path="/mainpage" element={<Mainpage/>}></Route>
        </Routes>
      </Router>
</>
)}
export default App;
