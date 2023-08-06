import React from 'react';
import './styles/ChatbotInput.css';
import send from "../../images/send.png";

const ChatbotInput = () => {
    return (
        <div className='inputContainer'>
            <div className='inputForm'>
                <input className='textInput' />
                <img className='send' src={send} />
            </div>
        </div>
    );
};

export default ChatbotInput;