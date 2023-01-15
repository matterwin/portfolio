import React from "react"
import { NavLink } from "react-router-dom";

import "./Navbar.css"

function Navbar() {

    //const navigate = useNavigate();

    return (      
        <div className="container">
            <NavLink end to="/" className="name">Matt Erwin</NavLink>
            <NavLink>Portfolio</NavLink>
            <NavLink>About</NavLink>
            <NavLink>Contact</NavLink>
            <NavLink>Resume</NavLink>
        </div>       
    )
}

export default Navbar