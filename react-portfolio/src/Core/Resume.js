import React from "react"
import resume from "./resume.pdf"
import resumeSS from "../pictures/ss_resume.png"

import "./Resume.css"

function Resume() {
    return (
        <div className="fornav">
            <div className="resume-container">
                <a href={resume} target="_blank" rel="noreferrer" className="resume-pic" ><img alt="resume" src={resumeSS} className="resume-ss"></img></a>
            </div>
        </div>
    )
}

export default Resume