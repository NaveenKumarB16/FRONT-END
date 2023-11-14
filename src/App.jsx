import React, { useState } from 'react';
import './App.css'
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import Home from './Pages/home';
import {Route, Routes} from "react-router-dom";
function App() {

  return (
  <>
  <Routes>
    <Route path="/" element={<SignUp/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/home" element={<Home/>} />
  </Routes>
  </>
 );
}

export default App;
