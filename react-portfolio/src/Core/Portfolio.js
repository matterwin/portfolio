import React, { useState } from "react"

import "./Portfolio.css"

function Portfolio() {

    //do a simple grid like in mw2 and at the bottom have a div that gives us a link to how I made this site.
    //Title it like How I made this site? {link}

    const [popup, setPopup] = useState({
        backgroundImage: "../pictures/fithappens.JPG",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        cursor: 'pointer'
    })


    function handleClick() {
        setPopup({
            backgroundImage: 'none',
            backgroundColor: '#ff0000',
            cursor: 'pointer'
        })
    }

    function closePop() {
        setPopup(prev => {
            return {
                ...prev
            }
        })
    }

    // function closePop() {
    //     setPopup(prev => {
    //         return {
    //             ...prev
    //         }
    //     })
    // }
    

    return (
        <div className="port-box">
            <div>
                <h1 className="about">My Collection</h1>
                <div className="special">
                    <h1 className="block1">&nbsp;</h1>
                    <h1 className="block">&nbsp;</h1>
                    <h1 className="block1">&nbsp;</h1>
                </div>
            </div>
            
            <div className="port-container-grid">
    
                <div className="Fithappens" onClick={handleClick} onMouseLeave={closePop} style={popup}></div>
                <div className="WordJustWord"></div>
                <div className="Portfolio"></div>
            </div>
        </div>
            
    )
}

export default Portfolio