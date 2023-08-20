import React, { useContext, useEffect, useRef, useState } from 'react';
import BotBubble from './FirstBotBubble';
import BubbleList from './BubbleList';
import './styles/Container.css'
import UserBubble from './UserBubble';



const Container = ({inputText, setAbleSend}) => {
    
    const messageEndRef = useRef();
    const [containerHeight, setContainerHeight] = useState('');
    const [contentHeight, setContentHeight] = useState('');
    function divResize() {
        setContainerHeight(document.documentElement.clientHeight - 125 + 'px');
    }

    useEffect(() => {
        setContainerHeight(document.documentElement.clientHeight - 125 + 'px');
        
    },[])

    useEffect(() => {

    }, [contentHeight])

    //divResize();

    // 브라우저 크기가 변할 시 동적으로 사이즈를 조절해야 하는경우
    window.addEventListener('resize', divResize);
    
    
    return (
        <div style={{'height':containerHeight}} className='chatbotContainer'>
            <div className='chatbotContent'>
                <BubbleList inputText={inputText} setAbleSend={setAbleSend} />
            </div>
            <div ref={messageEndRef}></div>
        </div>
    );
};

export default Container;