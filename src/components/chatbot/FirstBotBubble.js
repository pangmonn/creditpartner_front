import React, { useEffect, useRef, useState } from 'react';
import './styles/FirstBotBubble.css';
import logo from '../../images/logo.png';



const FirstBotBubble = ({username, batchim}) => {
    const firstMent = username.substring(1) + (batchim ? '아':'야') + ' 안녕!' ;
    
    const bubbleTextStyles = useRef();
    const [bubbleHeight, setBubbleHeight] = useState('');

    useEffect(() => {
    /* 모든 CSS 속성 값을 담은 객체 생성*/
    let bubble_Ref_style = window.getComputedStyle(bubbleTextStyles.current);
    /* test4 출력 */
    let bubble_Ref_height = bubble_Ref_style.getPropertyValue('height');
    setBubbleHeight(bubble_Ref_height);
    }, []);

    return (
        <div className='firstBotBubble' style={{height:bubbleHeight}}>
            <img src={logo} className='logoBubble' />
            <div className='botBubble'>
                <div className='botBubbleText' ref={bubbleTextStyles}>
                    {firstMent}
                    <br />
                    나는 너의 학점 이수를 도와줄 크레딧<br />파트너야.<br />우리 남은 기간 알차게 학점을 채워보자.
                    <br />혹시 희망하는 학과가 있어?
                </div>
            </div>
        </div>
    );
        
        
};

export default FirstBotBubble;