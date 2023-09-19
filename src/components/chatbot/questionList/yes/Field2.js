import React, {useRef, useState} from 'react';
import '../../styles/Field1.css'
import BotBubble from '../../BotBubble';


const Field2 = ({setHopeMajorName}) => {

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
    const b20 = useRef();
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
        b20.current.disabled = true;
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
        b20.current.style.cursor = 'default';
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
        b20.current.style.backgroundColor = 'white';
        e.target.style.backgroundColor = '#E7EDFD';
        setSelectFButton(true);
        setHopeMajorName(e.target.textContent);
    }

    return (
        <>
        <BotBubble text={'희망하는 학과를 선택해줘.'} />
            <div className='majors'>
            <div></div>
                <button className='majorButton' id={1} onClick={onClick} ref={b1}>경영학과</button>
                <button className='majorButton' id={2} onClick={onClick} ref={b2}>경제학과</button>
                <button className='majorButton' id={3} onClick={onClick} ref={b3}>금융보험학과</button>
                <button className='majorButton' id={4} onClick={onClick} ref={b4}>무역·유통학과</button>
                <div></div>
                <div></div>
                <button className='majorButton' id={5} onClick={onClick} ref={b5}>세무·회계학과</button>
                <button className='majorButton' id={6} onClick={onClick} ref={b6}>호텔·관광경영학과</button>
                <button className='majorButton' id={7} onClick={onClick} ref={b7}>광고홍보학과</button>
                <button className='majorButton' id={8} onClick={onClick} ref={b8}>언론정보학과</button>
                <div></div>
                <div></div>
                <button className='majorButton' id={9} onClick={onClick} ref={b9}>정보미디어학과</button>
                <button className='majorButton' id={10} onClick={onClick} ref={b10}>국제학과</button>
                <button className='majorButton' id={11} onClick={onClick} ref={b11}>사회학과</button>
                <button className='majorButton' id={12} onClick={onClick} ref={b12}>사회복지학과</button>
                <div></div>
                <div></div>
                <button className='majorButton' id={13} onClick={onClick} ref={b13}>심리학과</button>
                <button className='majorButton' id={14} onClick={onClick} ref={b14}>아동학과</button>
                <button className='majorButton' id={15} onClick={onClick} ref={b15}>정치외교학과</button>
                <button className='majorButton' id={16} onClick={onClick} ref={b16}>지리학과</button>
                <div></div>
                <div></div>
                <button className='majorButton' id={17} onClick={onClick} ref={b17}>항공서비스학과</button>
                <button className='majorButton' id={18} onClick={onClick} ref={b18}>법학과</button>
                <button className='majorButton' id={19} onClick={onClick} ref={b19}>보건행정학과</button>
                <button className='majorButton' id={20} onClick={onClick} ref={b20}>행정학과</button>
                <div></div>
            </div>
        </>
        
    );
};

export default Field2;