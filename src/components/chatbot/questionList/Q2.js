import React, { useRef, useState } from 'react';
import BotBubble from '../BotBubble';
import '../styles/Q2.css'

const Q2 = ({hopeField, setField}) => {
    const q2_1 = '희망하는 분야를 선택해줘.';

    const b1 = useRef();
    const b2 = useRef();
    const b3 = useRef();
    const b4 = useRef();
    const b5 = useRef();
    const b6 = useRef();
    const [selectButton, setSelectButton] = useState(false);

    if(selectButton) {
        b1.current.disabled = true;
        b2.current.disabled = true;
        b3.current.disabled = true;
        b4.current.disabled = true;
        b5.current.disabled = true;
        b6.current.disabled = true;
        b1.current.style.cursor = 'default';
        b2.current.style.cursor = 'default';
        b3.current.style.cursor = 'default';
        b4.current.style.cursor = 'default';
        b5.current.style.cursor = 'default';
        b6.current.style.cursor = 'default';
    }
    const onClick = (e) => {
        b1.current.style.backgroundColor = 'white';
        b2.current.style.backgroundColor = 'white';
        b3.current.style.backgroundColor = 'white';
        b4.current.style.backgroundColor = 'white';
        b5.current.style.backgroundColor = 'white';
        b6.current.style.backgroundColor = 'white';
        e.target.style.backgroundColor = '#E7EDFD';
        setSelectButton(true);
        setField(Number(e.target.id));
    }

    return (
        <div>
            <BotBubble text={[q2_1]} />
                <div className='Field'>
                    <div></div>
                    <button className='fieldButton' id={1} onClick={onClick} ref={b1}>인문</button>
                    <button className='fieldButton' id={2} onClick={onClick} ref={b2}>사회</button>
                    <button className='fieldButton' id={3} onClick={onClick} ref={b3}>자연과학</button>
                    <div></div>
                    <div></div>
                    <button className='fieldButton' id={4} onClick={onClick} ref={b4}>공학</button>
                    <button className='fieldButton' id={5} onClick={onClick} ref={b5}>보건·의약학</button>
                    <button className='fieldButton' id={6} onClick={onClick} ref={b6}>교육</button>
                    <div></div>
                </div>
        </div>
    );
};

export default Q2;