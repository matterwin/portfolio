import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./Core/Home"
import Navbar from "./Core/Navbar"
import Hitmarker from "./Core/Hitmarker"

import "./App.css"

function App() {

  return (
    <div>
        <Router>
          
          <Hitmarker />
          <Navbar /> 
        
          <Routes>
            <Route path="/" element={<Home/>}/>
          </Routes>

        </Router>

    </div>
  );
}

export default App;
