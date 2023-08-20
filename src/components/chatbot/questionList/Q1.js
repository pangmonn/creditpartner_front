import React, { useState, useRef, useContext, useEffect } from 'react';
import BotBubble from '../BotBubble';
import { MyContext } from '../ChatbotTemplate';
import '../styles/Q1.css'

const Q1 = ({setHopeField}) => {
    const {setQuestionNum} = useContext(MyContext);

    const q1_1 = '첫 번째 질문이야.'
    const q1_2 = '희망하는 분야가 있어?'

    const yes = useRef();
    const no = useRef();
    const [selectButton, setSelectButton] = useState(false);

    if(selectButton) {
        yes.current.disabled = true;
        no.current.disabled = true;
    }

    useEffect(() => {
        setQuestionNum(1);
    },[]);

    const onClickYES = () => {
        yes.current.style.backgroundColor = '#E7EDFD';
        yes.current.style.cursor = 'default';
        no.current.style.cursor = 'default';
        no.current.style.backgroundColor = 'white';
        setSelectButton(true);
        setHopeField(1);
    }

    const onClickNO = (e) => {
        no.current.style.backgroundColor = '#E7EDFD';
        yes.current.style.cursor = 'default';
        no.current.style.cursor = 'default';
        yes.current.style.backgroundColor = 'white';
        setSelectButton(true);
        setHopeField(2);
    }
    
    return (
        <div>
            <BotBubble text={[q1_1, <br />, q1_2 ]} />
            <div className='hasHopeField'>
                <div></div>
                <button className='hopeFieldButton' onClick={onClickYES} ref={yes}>응, 있어</button>
                <button className='hopeFieldButton' onClick={onClickNO} ref={no}>아니, 아직 없어</button>
                <div></div>
            </div>
            
        </div>
    );
};

export default Q1;