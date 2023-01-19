import React, { useState } from "react"

import "./Portfolio.css"

function Portfolio() {

    const [popup, setPopup] = useState({})
    
    const [popupWord, setPopupWord] = useState({})

    const [popupPort, setPopupPort] = useState({})

    const [fitText, setFitText] = useState({
        opacity: '0'
    })

    const [wordText, setWordText] = useState({
        opacity: '0'
    })

    const [portText, setPortText] = useState({
        opacity: '0'
    })

    function handleClick() {

        setPopup({
            backgroundImage: 'none',
            backgroundColor: '#3f203b',
            cursor: 'pointer',
            animation: 'none'
        })

        setFitText({
            opacity: '100'
        })
    }

    function closePop() {
        setPopup({animation: 'none'})
        setFitText({
            opacity: '0'
        })
    }

    function handleClickWord() {

        setPopupWord({
            backgroundImage: 'none',
            backgroundColor: '#3f203b',
            cursor: 'pointer',
            animation: 'none'
        })

        setWordText({
            opacity: '100'
        })
    }

    function closePopWord() {
        setPopupWord({animation: 'none'})
        setWordText({
            opacity: '0'
        })
    }

    function handleClickPort() {

        setPopupPort({
            backgroundImage: 'none',
            backgroundColor: '#3f203b',
            cursor: 'pointer',
            animation: 'none'
        })

        setPortText({
            opacity: '100'
        })
    }

    function closePopPort() {
        setPopupPort({animation: 'none'})
        setPortText({
            opacity: '0'
        })
    }


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
    
                <div className="Fithappens" onClick={handleClick} onMouseLeave={closePop} style={popup}>
                    <div style={fitText}>
                        <p>This was a group project, and this website allows users to post/edit/delete their own workouts and make their own accounts to do so. I did a lot of work on the frontend of this project.</p>
                        <p>Tools: ASP.NET Core, React, MSSQL, Apache</p>
                        <a href='https://github.com/matterwin/csc3380'><button  className='fit-button'>Github</button></a>
                    </div>
                </div>
                <div className="WordJustWord" onClick={handleClickWord} onMouseLeave={closePopWord} style={popupWord}>
                    <div style={wordText}>
                        <p>I created a forum based website, like a mini "reddit", where I used MySQL to store all of the users' data. This however wasn't a completed project.</p>
                        <p>Tools: Java, Java Servlets, HTML/CSS/JS, MySQL, Apache</p>
                        <a href='https://github.com/matterwin/wordjustwordWebsite'><button  className='fit-button'>Github</button></a>
                        <a href='https://youtu.be/pkejclj3zN4'>&nbsp;<button  className='fit-button'>YouTube</button></a>
                    </div>
                </div>
                <div className="Portfolio" onClick={handleClickPort} onMouseLeave={closePopPort} style={popupPort}>
                    <div style={portText} >
                        <p>Well, you're on my site right now. The SS says "portfolio," but I just didn't have a better SS to put up here. Any questions, just contact me.</p>
                        <p>Tools: React, CSS</p>
                        <a href='https://github.com/matterwin/portfolio'><button  className='fit-button'>Github</button></a>
                    </div>
                </div>

            </div>
        </div>
            
    )
}

export default Portfolio