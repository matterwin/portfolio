import React, { useState, useEffect } from "react"

import "./Contact.css"

function Contact() {
    
    const [flagName, setFlagName] = useState(100);
    const [flagMsg, setFlagMsg] = useState(0);
    const [name, setName] = useState('');
    const [message, setMessage] = useState(''); 

    const [colorName, setColorName] = useState("white");
    const [colorMsg, setColorMsg] = useState("white");

    const [nameAnimation, setNameAnimation] = useState("noAni");
    const [msgAnimation, setMsgAnimation] = useState("noAni");

    const [buttonClass, setButtonClass] = useState("validInput")

    var flag = 0;

    const nameStyle = {
        opacity: flagName,
        color: colorName
    };

    const msgStyle = {
        opacity: flagMsg,
        color: colorMsg
    };

    useEffect(() => {
        if (name.trim().length === 0){
            setFlagName(0);
            setNameAnimation("inputIsNotThere");
        }
        else {
            setFlagName(100);
            setNameAnimation("inputIsThere");
        }
    }, [name])

    useEffect(() => {
        if (message.trim().length === 0){
            setFlagMsg(0);
            setMsgAnimation("inputIsNotThere");
        }
        else {
            setFlagMsg(100);
            setMsgAnimation("inputIsThere");
        }
    }, [message])

    useEffect(() => {
        if(flag === 0) {
            setNameAnimation("noAni");
            setMsgAnimation("noAni");
        }
    }, [])

    const handleChangeName = event => {
        setName(event.target.value);
        flag = 1;
    };

    const handleChangeMsg = event => {
        setMessage(event.target.value);
        flag = 1;
    };

    function handleFocusName() {
        setColorName("yellow");
        setColorMsg("white");
    };

    function handleFocusMsg() {
        setColorMsg("yellow");
        setColorName("white");
    };

    const handleClick = event => {
        event.preventDefault();
    
        if ((message.trim().length !== 0) && (name.trim().length !== 0)) {
            fetch("https://formsubmit.co/ajax/baseborns@gmail.com", {
                method: "POST",
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: JSON.stringify(name),
                    message: JSON.stringify(message)
                })
            })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.log(error));

        } else { 

            const intervalId = setInterval(() => {
                setButtonClass("inputInvalid");
            }, 0);

            setTimeout(() => {
                clearInterval(intervalId);
                setButtonClass("validInput");
            }, 500);

        }
    }

    return (
        <div>
            <div className="contact-container">
            <h1 className="about">Contact me</h1>
            <div className="special">
                    <h1 className="block1">&nbsp;</h1>
                    <h1 className="block">&nbsp;</h1>
                    <h1 className="block1">&nbsp;</h1>
            </div>
                <form action="https://formsubmit.co/baseborns@gmail.com" method="POST">
                    <div className="all-contact-container">
                        <label style={nameStyle} className={nameAnimation}>NAME</label>
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
                        <label style={msgStyle} className={msgAnimation}>MESSAGE</label>
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
                        <button onClick={handleClick} className={buttonClass} type="submit" >SEND</button>
                    </div>                
                </form>
            </div>
            <div className="added-space"></div>
        </div>
    )
}

export default Contact