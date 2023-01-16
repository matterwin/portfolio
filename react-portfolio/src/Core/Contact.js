import React, { useState, useEffect } from "react"

import "./Contact.css"

function Contact() {
    
    const [flagName, setFlagName] = useState(0)
    const [flagMsg, setFlagMsg] = useState(0)
    const [name, setName] = useState('');
    const [message, setMessage] = useState(''); 

    const nameStyle = {
        opacity: flagName
    }

    const msgStyle = {
        opacity: flagMsg
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

    const handleClick = event => {
        event.preventDefault();
    
        if (message.trim().length !== 0) {
          console.log('input value is NOT empty');
        } else {
          console.log('input value is empty');
        }
    };

    return (
        <div>
            <div className="contact-container">
                <form>
                    <div>
                        <label style={nameStyle}>NAME</label>
                        <input
                            onFocus={e => e.currentTarget.select()}
                            type="text"
                            placeholder="Name"
                            className="name-box"
                            onChange={handleChangeName}
                        />
                    </div>
                    <div><p></p></div>
                    <div>
                        <label style={msgStyle}>MESSAGE</label>
                        <textarea
                            type="text"
                            placeholder="Message"
                            className="msg-box"
                            onChange={handleChangeMsg}
                        />
                    </div> 
                    <div><p></p></div>
                    <div>
                        <button onClick={handleClick} className="button-box">SEND</button>
                    </div>                
                </form>
            </div>
        </div>
    )
}

export default Contact