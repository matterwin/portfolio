import React from "react"
import { NavLink } from "react-router-dom";

function Navbar() {

    //const navigate = useNavigate();

    return (      
        <div className="container">
            <NavLink end to="/">Matt Erwin</NavLink>
            <NavLink>Portfolio</NavLink>
            <NavLink>About</NavLink>
            <NavLink>Contact</NavLink>
            <NavLink>Resume</NavLink>
        </div>       
    )
}

export default Navbar