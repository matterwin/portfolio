import React, { useState, useEffect } from "react"

import "./Contact.css"

function Contact() {
    
    const [flagName, setFlagName] = useState(0)
    const [flagMsg, setFlagMsg] = useState(0)
    const [name, setName] = useState('');
    const [message, setMessage] = useState(''); 

    const [colorName, setColorName] = useState("white")
    const [colorMsg, setColorMsg] = useState("white")

    const nameStyle = {
        opacity: flagName,
        color: colorName
    }

    const msgStyle = {
        opacity: flagMsg,
        color: colorMsg
    }


    useEffect(() => {
        if (name.trim().length === 0){
            setFlagName(0);
        }
        else
            setFlagName(100);
    }, [name])

    useEffect(() => {
        if (message.trim().length === 0){
            setFlagMsg(0);
        }
        else
            setFlagMsg(100);
    }, [message])

    const handleChangeMsg = event => {
        setMessage(event.target.value);
    }

    const handleChangeName = event => {
        setName(event.target.value);
    }

    function handleFocusName() {
        setColorName("yellow")
        setColorMsg("white")
    }

    function handleFocusMsg() {
        setColorMsg("yellow")
        setColorName("white")
    }

    const handleClick = event => {
        event.preventDefault();
    
        if ((message.trim().length !== 0) && (name.trim().length !== 0)) {
          console.log('input value is NOT empty');
        } else {
           alert('input value is empty');
        }
    };

    //have placeholder animation slide down and have label slide from top and add a delay to make it smooth.

    return (
        <div>
            <div className="contact-container">
                <form action="https://formsubmit.co/baseborns@gmail.com" method="POST">
                    <div>
                        <label style={nameStyle}>NAME</label>
                        <input
                            onFocus={handleFocusName}
                            type="text"
                            placeholder="Name"
                            className="name-box"
                            onChange={handleChangeName}
                            name="name"
                        />
                    </div>
                    <div><p></p></div>
                    <div>
                        <label style={msgStyle}>MESSAGE</label>
                        <textarea
                            onFocus={handleFocusMsg}
                            type="text"
                            placeholder="Message"
                            className="msg-box"
                            onChange={handleChangeMsg}
                            name="message"
                        />
                    </div> 
                    <div><p></p></div>
                    <div>
                        <button onClick={handleClick} className="button-box" type="submit" >SEND</button>
                    </div>                
                </form>
            </div>
            <div className="added-space"></div>
        </div>
    )
}

export default Contact