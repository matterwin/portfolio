import React from "react"
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "./Navbar.css"
import "./resume.pdf"

function Navbar() {

    return (  
        <div className="nav-bar">           
            <div className="container">
                <NavLink end to="/" className="name">Matt Erwin</NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/Portfolio">PORTFOLIO</NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/About">ABOUT</NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/Contact">CONTACT</NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'resumeActive' : 'resumeInactive')} to="/Resume" >RESUME</NavLink>
            </div>
            <div className="socials">
                <a href="https://github.com/matterwin"><i class="fa-brands fa-square-github"></i></a>
                <a href="https://www.linkedin.com/in/matthew-erwin-71a3971b5"><i class="fa-brands fa-linkedin"></i></a>
                <a href="https://www.youtube.com/@matthewerwine8333/videos"><i class="fa-brands fa-square-youtube"></i></a>
                <a href="https://www.instagram.com/m3ttwin/?hl=en"><i class="fa-brands fa-square-instagram"></i></a>
            </div>
        </div> 
    )
}

export default Navbar