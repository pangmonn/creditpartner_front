import React, { useRef, useState } from 'react';
import BotBubble from '../BotBubble';
import '../styles/Q7.css'

const Q7 = ({username, batchim, setQuestionNum, selectPersonality, setSelectPersonality}) => {
    const name = username.substring(1) + (batchim ? '이':'');
    const q7_1 = '이번에는 성격에 대한 질문이야.';
    const q7_2 = '아래의 유형별 특징들을 읽고 '+name+'와 가장 비슷하다고 생각하는 성격 유형을 하나만 골라줘.';
    
    const b1 = useRef();
    const b2 = useRef();
    const b3 = useRef();
    const b4 = useRef();
    

    if(selectPersonality) {
        b1.current.disabled = true;
        b2.current.disabled = true;
        b3.current.disabled = true;
        b4.current.disabled = true;
        b1.current.style.cursor = 'default';
        b2.current.style.cursor = 'default';
        b3.current.style.cursor = 'default';
        b4.current.style.cursor = 'default';
    }
    const onClick = (e) => {
        if(selectPersonality) return false;
        b1.current.style.backgroundColor = 'white';
        b2.current.style.backgroundColor = 'white';
        b3.current.style.backgroundColor = 'white';
        b4.current.style.backgroundColor = 'white';
        if(e.target.className==='typeName'||e.target.className==='typeDetail') {
            e.target.parentElement.style.backgroundColor = '#E7EDFD';
            setSelectPersonality(e.target.parentElement.id);
        }
        else {
            e.target.style.backgroundColor = '#E7EDFD';
            setSelectPersonality(e.target.id);
        }
        setQuestionNum(8);
    }
    //console.log(selectPersonality)
    
    return (
        <div>
            <BotBubble text={[q7_1, <br />, q7_2]} />
            <div className='personality'>
                    <div></div>
                    <button className='personButton' id={1} onClick={onClick} ref={b1}>
                        <div className='typeName'>리더형</div>
                        <div className='typeDetail'>원칙주의자, 자기주장적인,<br /> 문제해결지향성, 집중력, 신중한,<br /> 도전적, 진취성, 경쟁욕구,주도적</div>
                    </button>
                    <button className='personButton' id={2} onClick={onClick} ref={b2}>
                        <div className='typeName'>사교형</div>
                        <div className='typeDetail'>자기표현, 친교관계, 솔직함, 인간적인</div>
                    </button>
                    <div></div>
                    <div></div>
                    <button className='personButton' id={3} onClick={onClick} ref={b3}>
                        <div className='typeName'>분석형</div>
                        <div className='typeDetail'>장기 집중력, 감정 통제력, 합리화, <br />신중성, 비사교성, 성취지향적</div>
                    </button>
                    <button className='personButton' id={4} onClick={onClick} ref={b4}>
                        <div className='typeName'>조화형</div>
                        <div className='typeDetail'>따뜻한, 친화적인, 순종적인, 겸손한, <br />조용한, 갈등회피, 친절함, 충동통제, <br />침착, 느림, 공감적이해, 상호협력적</div>
                    </button>
                    <div></div>
                </div>
        </div>
    );
};

export default Q7;