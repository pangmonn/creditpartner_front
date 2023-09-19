import React, {useRef, useState} from 'react';
import '../../styles/Field1.css'
import BotBubble from '../../BotBubble';


const Field4 = ({setHopeMajorName}) => {

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
    const b21 = useRef();
    const b22 = useRef();
    const b23 = useRef();
    const b24 = useRef();
    const b25 = useRef();
    const b26 = useRef();
    const b27 = useRef();
    const b28 = useRef();
    const b29 = useRef();
    const b30 = useRef();
    const b31 = useRef();
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
        b21.current.disabled = true;
        b22.current.disabled = true;
        b23.current.disabled = true;
        b24.current.disabled = true;
        b25.current.disabled = true;
        b26.current.disabled = true;
        b27.current.disabled = true;
        b28.current.disabled = true;
        b29.current.disabled = true;
        b30.current.disabled = true;
        b31.current.disabled = true;
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
        b21.current.style.cursor = 'default';
        b22.current.style.cursor = 'default';
        b23.current.style.cursor = 'default';
        b24.current.style.cursor = 'default';
        b25.current.style.cursor = 'default';
        b26.current.style.cursor = 'default';
        b27.current.style.cursor = 'default';
        b28.current.style.cursor = 'default';
        b29.current.style.cursor = 'default';
        b30.current.style.cursor = 'default';
        b31.current.style.cursor = 'default';
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
        b21.current.style.backgroundColor = 'white';
        b22.current.style.backgroundColor = 'white';
        b23.current.style.backgroundColor = 'white';
        b24.current.style.backgroundColor = 'white';
        b25.current.style.backgroundColor = 'white';
        b26.current.style.backgroundColor = 'white';
        b27.current.style.backgroundColor = 'white';
        b28.current.style.backgroundColor = 'white';
        b29.current.style.backgroundColor = 'white';
        b30.current.style.backgroundColor = 'white';
        b31.current.style.backgroundColor = 'white';
        e.target.style.backgroundColor = '#E7EDFD';
        setSelectFButton(true);
        setHopeMajorName(e.target.textContent);
    }

    return (
        <>
        <BotBubble text={'희망하는 학과를 선택해줘.'} />
            <div className='majors'>
                <div></div>
                <button className='majorButton' id={1} onClick={onClick} ref={b1}>기계공학과</button>
                <button className='majorButton' id={2} onClick={onClick} ref={b2}>미래자동차학과</button>
                <button className='majorButton' id={3} onClick={onClick} ref={b3}>자동차학과</button>
                <button className='majorButton' id={4} onClick={onClick} ref={b4}>전기공학과</button>
                <div></div>
                <div></div>
                <button className='majorButton' id={5} onClick={onClick} ref={b5}>전자공학과</button>
                <button className='majorButton' id={6} onClick={onClick} ref={b6}>제어계측공학과</button>
                <button className='majorButton' id={7} onClick={onClick} ref={b7}>항공우주공학과</button>
                <button className='majorButton' id={8} onClick={onClick} ref={b8}>항공운항학과</button>
                <div></div>
                <div></div>
                <button className='majorButton' id={9} onClick={onClick} ref={b9}>빅데이터공학과</button>
                <button className='majorButton' id={10} onClick={onClick} ref={b10}>멀티미디어학과</button>
                <button className='majorButton' id={11} onClick={onClick} ref={b11}>산업공학과</button>
                <button className='majorButton' id={12} onClick={onClick} ref={b12}>소프트웨어학과</button>
                <div></div>
                <div></div>
                <button className='majorButton' id={13} onClick={onClick} ref={b13}>융합학과</button>
                <button className='majorButton' id={14} onClick={onClick} ref={b14}>인공지능학과</button>
                <button className='majorButton' id={15} onClick={onClick} ref={b15}>정보보안학과</button>
                <button className='majorButton' id={16} onClick={onClick} ref={b16}>정보통신공학과</button>
                <div></div>
                <div></div>
                <button className='majorButton' id={17} onClick={onClick} ref={b17}>컴퓨터공학과</button>
                <button className='majorButton' id={18} onClick={onClick} ref={b18}>건축공학과</button>
                <button className='majorButton' id={19} onClick={onClick} ref={b19}>교통공학과</button>
                <button className='majorButton' id={20} onClick={onClick} ref={b20}>도시공학과</button>
                <div></div>
                <div></div>
                <button className='majorButton' id={21} onClick={onClick} ref={b21}>토목공학과</button>
                <button className='majorButton' id={22} onClick={onClick} ref={b22}>해양공학과</button>
                <button className='majorButton' id={23} onClick={onClick} ref={b23}>환경공학과</button>
                <button className='majorButton' id={24} onClick={onClick} ref={b24}>생명공학과</button>
                <div></div>
                <div></div>
                <button className='majorButton' id={25} onClick={onClick} ref={b25}>섬유공학과</button>
                <button className='majorButton' id={26} onClick={onClick} ref={b26}>식품공학과</button>
                <button className='majorButton' id={27} onClick={onClick} ref={b27}>신소재공학과</button>
                <button className='majorButton' id={28} onClick={onClick} ref={b28}>에너지자원공학과</button>
                <div></div>
                <div></div>
                <button className='majorButton' id={29} onClick={onClick} ref={b29}>재료공학과</button>
                <button className='majorButton' id={30} onClick={onClick} ref={b30}>화장품과학과</button>
                <button className='majorButton' id={31} onClick={onClick} ref={b31}>화학공학과</button>
                <div></div>
            </div>
        </>
        
    );
};

export default Field4;