import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./Core/Home"
import Navbar from "./Core/Navbar"
import Hitmarker from "./Core/Hitmarker"

import "./App.css"

function App() {

  const createCursor = (x,y) => {
    const cursor = document.createElement('div');
    cursor.className = 'cursor';
    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';
    return cursor;
}

const removerCursor = cursor => {
    const timeout = setTimeout(() => {
        cursor.remove();
        clearTimeout(timeout);
    }, 1000)
}

window.addEventListener('click', e => {
    const cursor = createCursor(e.pageX, e.pageY);
    document.body.appendChild(cursor);
    removerCursor(cursor);
    console.log(e.pageX, e.pageY);
})

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
