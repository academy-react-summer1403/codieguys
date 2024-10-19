<<<<<<< HEAD
import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "../screens/Login";
import CorsesList from "../screens/CorsesList";
import { CardWithTopLogo } from "../components/CorseListHolder/CardWithTopLogo";
import { HeaderList } from "../components/CorseListHolder/HeaderList";
import { GridHolder } from "../components/CorseListHolder/GridHolder/GridHolder";
import { Filter } from "../components/CorseListHolder/filter/Filter";
import CorseListHolder from "../components/CorseListHolder";

function App() {
  return (
    <>
      <CorseListHolder />

      {/* <CardWithTopLogo /> */}

      {/* <HeaderList /> */}

      {/* <GridHolder /> */}

      {/* <Filter /> */}
    </>
  );
=======
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




>>>>>>> develop
}

export default App;
