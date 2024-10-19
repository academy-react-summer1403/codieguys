import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from '../screens/Login'
import Landing from '../screens/Landing'

function App() {
  
  return(
    // <BrowserRouter>
    //     <Routes>
    //       <Route path="/" element={<Landing />} />
          
    //       {/* <Route path="/landing" element={<Landing />} /> */}
    //     </Routes>
    //   </BrowserRouter>
    <Landing />
  )




}

export default App
