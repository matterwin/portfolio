import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import Home from "./Home"

import "./App.css"

function App() {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
