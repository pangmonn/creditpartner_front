import React, {useState, useRef, useEffect} from 'react';
import './styles/BotBubble.css'

const BotBubble = ({text}) => {
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
        <div className='afterBotBubble' style={{height:bubbleHeight}}>
            <div className='afterBotBubbleText' ref={bubbleTextStyles}>
                {text}
            </div>
        </div>
    );
};

export default BotBubble;