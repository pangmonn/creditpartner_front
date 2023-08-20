import React, {useState, useRef, useEffect} from 'react';
import './styles/UserBubble.css';

const UserBubble = ({text}) => {
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
        <div className='userBubble' style={{height:bubbleHeight}}>
            <div className='userBubbleText' ref={bubbleTextStyles}>
                {text}
            </div>
        </div>
    );
};

export default UserBubble;