import React, {useRef, useState} from 'react';
import '../../styles/Field1.css'
import BotBubble from '../../BotBubble';


const Field6 = ({setHopeMajorName}) => {

    const b1 = useRef();
    const b2 = useRef();
    const b3 = useRef();
    const b4 = useRef();
    const b5 = useRef();
    const b6 = useRef();
    const b7 = useRef();
    const b8 = useRef();
    const b9 = useRef();
    const b10 = useRef();
    const b11 = useRef();
    const b12 = useRef();
    const b13 = useRef();
    const b14 = useRef();
    const b15 = useRef();
    const b16 = useRef();
    const b17 = useRef();
    const b18 = useRef();
    const b19 = useRef();
    const [selectFButton, setSelectFButton] = useState(false);

    if(selectFButton) {
        b1.current.disabled = true;
        b2.current.disabled = true;
        b3.current.disabled = true;
        b4.current.disabled = true;
        b5.current.disabled = true;
        b6.current.disabled = true;
        b7.current.disabled = true;
        b8.current.disabled = true;
        b9.current.disabled = true;
        b10.current.disabled = true;
        b11.current.disabled = true;
        b12.current.disabled = true;
        b13.current.disabled = true;
        b14.current.disabled = true;
        b15.current.disabled = true;
        b16.current.disabled = true;
        b17.current.disabled = true;
        b18.current.disabled = true;
        b19.current.disabled = true;
        b1.current.style.cursor = 'default';
        b2.current.style.cursor = 'default';
        b3.current.style.cursor = 'default';
        b4.current.style.cursor = 'default';
        b5.current.style.cursor = 'default';
        b6.current.style.cursor = 'default';
        b7.current.style.cursor = 'default';
        b8.current.style.cursor = 'default';
        b9.current.style.cursor = 'default';
        b10.current.style.cursor = 'default';
        b11.current.style.cursor = 'default';
        b12.current.style.cursor = 'default';
        b13.current.style.cursor = 'default';
        b14.current.style.cursor = 'default';
        b15.current.style.cursor = 'default';
        b16.current.style.cursor = 'default';
        b17.current.style.cursor = 'default';
        b18.current.style.cursor = 'default';
        b19.current.style.cursor = 'default';
    }

    const onClick = (e) => {
        b1.current.style.backgroundColor = 'white';
        b2.current.style.backgroundColor = 'white';
        b3.current.style.backgroundColor = 'white';
        b4.current.style.backgroundColor = 'white';
        b5.current.style.backgroundColor = 'white';
        b6.current.style.backgroundColor = 'white';
        b7.current.style.backgroundColor = 'white';
        b8.current.style.backgroundColor = 'white';
        b9.current.style.backgroundColor = 'white';
        b10.current.style.backgroundColor = 'white';
        b11.current.style.backgroundColor = 'white';
        b12.current.style.backgroundColor = 'white';
        b13.current.style.backgroundColor = 'white';
        b14.current.style.backgroundColor = 'white';
        b15.current.style.backgroundColor = 'white';
        b16.current.style.backgroundColor = 'white';
        b17.current.style.backgroundColor = 'white';
        b18.current.style.backgroundColor = 'white';
        b19.current.style.backgroundColor = 'white';
        e.target.style.backgroundColor = '#E7EDFD';
        setSelectFButton(true);
        setHopeMajorName(e.target.textContent);
    }

    return (
        <>
        <BotBubble text={'희망하는 학과를 선택해줘.'} />
            <div className='majors'>
                <div></div>
                <button className='chatmajorButton' id={1} onClick={onClick} ref={b1}>국어교육과</button>
                <button className='chatmajorButton' id={2} onClick={onClick} ref={b2}>영어교육과</button>
                <button className='chatmajorButton' id={3} onClick={onClick} ref={b3}>독어교육과</button>
                <button className='chatmajorButton' id={4} onClick={onClick} ref={b4}>불어교육과</button>
                <div></div>
                <div></div>
                <button className='chatmajorButton' id={5} onClick={onClick} ref={b5}>일어교육과</button>
                <button className='chatmajorButton' id={6} onClick={onClick} ref={b6}>중국어교육과</button>
                <button className='chatmajorButton' id={7} onClick={onClick} ref={b7}>한문교육과</button>
                <button className='chatmajorButton' id={8} onClick={onClick} ref={b8}>사회교육과</button>
                <div></div>
                <div></div>
                <button className='chatmajorButton' id={9} onClick={onClick} ref={b9}>역사교육과</button>
                <button className='chatmajorButton' id={10} onClick={onClick} ref={b10}>지리교육과</button>
                <button className='chatmajorButton' id={11} onClick={onClick} ref={b11}>윤리교육과</button>
                <button className='chatmajorButton' id={12} onClick={onClick} ref={b12}>수학교육과</button>
                <div></div>
                <div></div>
                <button className='chatmajorButton' id={13} onClick={onClick} ref={b13}>물리교육과</button>
                <button className='chatmajorButton' id={14} onClick={onClick} ref={b14}>화학교육과</button>
                <button className='chatmajorButton' id={15} onClick={onClick} ref={b15}>생물교육과</button>
                <button className='chatmajorButton' id={16} onClick={onClick} ref={b16}>지구과학교육과</button>
                <div></div>
                <div></div>
                <button className='chatmajorButton' id={17} onClick={onClick} ref={b17}>교육학과</button>
                <button className='chatmajorButton' id={18} onClick={onClick} ref={b18}>초등교육과</button>
                <button className='chatmajorButton' id={19} onClick={onClick} ref={b19}>유아교육과</button>
                <div></div>
                
            </div>
        </>
        
    );
};

export default Field6;