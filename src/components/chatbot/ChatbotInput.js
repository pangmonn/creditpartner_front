import React, {  useEffect, useRef, useState } from 'react';
import './styles/ChatbotInput.css';
import send from "../../images/send.png";

const ChatbotInput = ({ableSend, q, setq, seta3, seta4, seta6, seta9}) => {

    const inputRef = useRef();
    const [typing, setTyping] = useState('');

    const onChange = (e) => {
        setTyping(e.target.value)
    }

    const onClick = () => {
        if(q===3) {
            seta3(typing);
            setTyping('');
            inputRef.current.value='';
            setq(4);
        }
        else if(q===4) {
            seta4(typing);
            setTyping('');
            inputRef.current.value='';
            setq(5);
        }
        else if(q===6) {
            seta6(typing);
            setTyping('');
            inputRef.current.value='';
            setq(7);
        }
        /*
        else if(q===9) {
            seta9(typing);
            setTyping('');
            inputRef.current.value='';
        }
        */
    }

    const onKeyDown =(e) => {
        if(e.key==='Enter')
            onClick()
    }
    
    useEffect(()=> {
        if(ableSend) {
            inputRef.current.disabled = false;
        }
        else {
            inputRef.current.disabled = true;
        }
    })

    return (
        <div className='inputContainer'>
            <div className='inputForm'>
                <input className='textInput' ref={inputRef} onChange={onChange} onKeyDown={onKeyDown} />
                <img className='send' src={send} onClick={onClick} />
            </div>
        </div>
    );
};

export default ChatbotInput;