import React from "react"
import resume from "./resume.pdf"
import resumeSS from "../pictures/ss_resume.png"

import "./Resume.css"

function Resume() {
    return (
        <div className="resume-container">
            <a href={resume} target="_blank" rel="noreferrer" ><img className="resume-pic" alt="resume" src={resumeSS}></img></a>
        </div>
    )
}

export default Resume