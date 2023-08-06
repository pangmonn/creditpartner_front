import React, { useEffect, useState } from 'react';
import BotBubble from './BotBubble';
import './styles/Container.css'
import UserBubble from './UserBubble';



const Container = () => {
    const [containerHeight, setContainerHeight] = useState('');

    function divResize() {
        setContainerHeight(document.documentElement.clientHeight - 125 + 'px');
    }

    useEffect(() => {
        setContainerHeight(document.documentElement.clientHeight - 125 + 'px');
    },[])

    //divResize();

    // 브라우저 크기가 변할 시 동적으로 사이즈를 조절해야 하는경우
    window.addEventListener('resize', divResize);
    
    return (
        <div style={{'height':containerHeight}} className='chatbotContainer'>
            <div className='chatbotContent'>
                <BotBubble />
                <UserBubble />
            </div>
        </div>
    );
};

export default Container;