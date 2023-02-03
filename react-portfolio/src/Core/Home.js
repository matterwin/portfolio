import React from "react"

import selfie from "../pictures/profile-pic.png"
import "./Home.css"
import tiger from "../pictures/tiger.png"

function Home() {
    return (
        <div className="fornav-home">
            <div className="pic-container"> 
                <div >
                    <img className="profile-pic" alt="Matthew Erwin" src={selfie}></img>
                </div>
                <div className="title">
                    <h1 className="title-name"><span className="slide">Matthew</span> &nbsp;<span className="slide">Erwin</span></h1>
                    <div className="special">
                        <h1 className="block1">&nbsp;</h1>
                        <h1 className="block">&nbsp;</h1>
                        <h1 className="block1">&nbsp;</h1>
                    </div>
                    <div className="school">
                        <img className="tiger" alt="tiger" src={tiger} />
                        <h3 className="title-me">
                            LSU 
                            Student -- Software Engineering
                        </h3>
                    </div>
                </div>
                <div className="more-space">&nbsp;</div>
            </div>
        </div>
    )
}

export default Home