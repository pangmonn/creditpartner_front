import React, {useRef, useState} from 'react';
import '../../styles/Field1.css'
import BotBubble from '../../BotBubble';


const Field5 = ({setHopeMajorName}) => {

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
        e.target.style.backgroundColor = '#E7EDFD';
        setSelectFButton(true);
        setHopeMajorName(e.target.textContent);
    }

    return (
        <>
        <BotBubble text={'희망하는 학과를 선택해줘.'} />
            <div className='majors'>
                <div></div>
                <button className='majorButton' id={1} onClick={onClick} ref={b1}>간호학과</button>
                <button className='majorButton' id={2} onClick={onClick} ref={b2}>물리치료학과</button>
                <button className='majorButton' id={3} onClick={onClick} ref={b3}>응급구조학과</button>
                <button className='majorButton' id={4} onClick={onClick} ref={b4}>임상병리학과</button>
                <div></div>
                <div></div>
                <button className='majorButton' id={5} onClick={onClick} ref={b5}>재활치료학과</button>
                <button className='majorButton' id={6} onClick={onClick} ref={b6}>치기공학과</button>
                <button className='majorButton' id={7} onClick={onClick} ref={b7}>치위생학과</button>
                <button className='majorButton' id={8} onClick={onClick} ref={b8}>수의학과</button>
                <div></div>
                <div></div>
                <button className='majorButton' id={9} onClick={onClick} ref={b9}>약학과</button>
                <button className='majorButton' id={10} onClick={onClick} ref={b10}>의예과</button>
                <button className='majorButton' id={11} onClick={onClick} ref={b11}>치의예과</button>
                <button className='majorButton' id={12} onClick={onClick} ref={b12}>한의예과</button>
                <div></div>
            </div>
        </>
        
    );
};

export default Field5;