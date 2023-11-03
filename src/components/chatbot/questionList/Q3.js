import React, { useEffect } from 'react';
import BotBubble from '../BotBubble';

const Q3 = ({inputText, setAbleSend, field, setQuestionNum}) => {
    let firstMent;
    switch (field) {
        case 0:
            firstMent = '아직 희망하는 분야가 없구나!';
            break;
        case 1:
            firstMent = '인문 분야를 희망하는 구나!'
            break;
        case 2:
            firstMent = '사회 분야를 희망하는 구나!'
            break;
        case 3:
            firstMent = '자연과학 분야를 희망하는 구나!'
            break;
        case 4:
            firstMent = '공학 분야를 희망하는 구나!'
            break;
        case 5:
            firstMent = '보건·의약학 분야를 희망하는 구나!'
            break;
        case 6:
            firstMent = '교육 분야를 희망하는 구나!'
            break;
        default:
            break;
    }
    const q3_2 = '좋아하는 과목은 뭐야?'

    useEffect(()=> {
        setAbleSend(true);
        setQuestionNum(3);
    },[]);
    
    //console.log('input : ' + inputText)

    return (
        <div>
            <BotBubble text={[firstMent, <br />, q3_2]} />
            
        </div>
    );
};

export default Q3;