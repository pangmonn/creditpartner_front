import React from 'react';
import './styles/BotBubble.css';
import logo from '../../images/logo.png';

const BotBubble = () => {
    return (
        <div className='firstBotBubble'>
            <img src={logo} className='logoBubble' />
            <div className='botBubble'>
                <div className='botBubbleText'>
                    hello
                </div>
            </div>
        </div>
    );
        
        
};

export default BotBubble;