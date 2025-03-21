import React from "react";
import Home from "./page/home/home";
import Navbar from "./page/navbar/navbar";
import './App.css';

function App (){
  return(
    <div className="background-container">
      <div className="container-fluid">
      <Navbar/>
      <Home/>
      </div>
   </div>
  )
}

export default App;

