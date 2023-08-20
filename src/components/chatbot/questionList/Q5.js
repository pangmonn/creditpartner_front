import React, { useRef, useState } from 'react';
import BotBubble from '../BotBubble';
import '../styles/Q5.css';

const Q5 = ({username, batchim, setAbleSend}) => {
    const name = username.substring(1) + (batchim ? '이':'')
    const q5_1 = name + '가 강점영역이라고 생각하는 지능들을 아래에서 선택해줄래?';
    const q5_2 = '여러 개 선택해도 되니 신중하게 고민해서 골라줘.'

    setAbleSend(false);

    const s1 = useRef();
    const s2 = useRef();
    const s3 = useRef();
    const s4 = useRef();
    const s5 = useRef();
    const s6 = useRef();
    const s7 = useRef();
    const s8 = useRef();

    const [s1click, sets1click] = useState(false);
    const [s2click, sets2click] = useState(false);
    const [s3click, sets3click] = useState(false);
    const [s4click, sets4click] = useState(false);
    const [s5click, sets5click] = useState(false);
    const [s6click, sets6click] = useState(false);
    const [s7click, sets7click] = useState(false);
    const [s8click, sets8click] = useState(false);

    const onClick = (e) => {
        switch(Number(e.target.id)) {
            case 1:
                if(s1click) {
                    sets1click(false);
                    s1.current.style.backgroundColor = 'white';
                }
                else {
                    sets1click(true);
                    s1.current.style.backgroundColor = '#E7EDFD';
                }
                break;
                case 2:
                if(s2click) {
                    sets2click(false);
                    s2.current.style.backgroundColor = 'white';
                }
                else {
                    sets2click(true);
                    s2.current.style.backgroundColor = '#E7EDFD';
                }
                break;
                case 3:
                if(s3click) {
                    sets3click(false);
                    s3.current.style.backgroundColor = 'white';
                }
                else {
                    sets3click(true);
                    s3.current.style.backgroundColor = '#E7EDFD';
                }
                break;
                case 4:
                if(s4click) {
                    sets4click(false);
                    s1.current.style.backgroundColor = 'white';
                }
                else {
                    sets4click(true);
                    s4.current.style.backgroundColor = '#E7EDFD';
                }
                break;
                case 5:
                if(s5click) {
                    sets5click(false);
                    s5.current.style.backgroundColor = 'white';
                }
                else {
                    sets5click(true);
                    s5.current.style.backgroundColor = '#E7EDFD';
                }
                break;
                case 6:
                if(s6click) {
                    sets6click(false);
                    s6.current.style.backgroundColor = 'white';
                }
                else {
                    sets6click(true);
                    s6.current.style.backgroundColor = '#E7EDFD';
                }
                break;
                case 7:
                if(s7click) {
                    sets7click(false);
                    s7.current.style.backgroundColor = 'white';
                }
                else {
                    sets7click(true);
                    s7.current.style.backgroundColor = '#E7EDFD';
                }
                break;
                case 8:
                if(s8click) {
                    sets8click(false);
                    s8.current.style.backgroundColor = 'white';
                }
                else {
                    sets8click(true);
                    s8.current.style.backgroundColor = '#E7EDFD';
                }
                break;
            default:
                break;
        }
    }

    return (
        <div>
            <BotBubble text={[q5_1, <br />, q5_2]} />
            <div className='strongField'>
                <div></div>
                <button className='strongButton' id={1} onClick={onClick} ref={s1}>언어적 지능</button>
                <button className='strongButton' id={2} onClick={onClick} ref={s2}>논리·수학적 지능</button>
                <button className='strongButton' id={3} onClick={onClick} ref={s3}>자연친화 지능</button>
                <div></div>
                <div></div>
                <button className='strongButton' id={4} onClick={onClick} ref={s4}>시공간적 지능</button>
                <button className='strongButton' id={5} onClick={onClick} ref={s5}>음악적 지능</button>
                <button className='strongButton' id={6} onClick={onClick} ref={s6}>신체운동·감각적 지능</button>
                <div></div>
                <div></div>
                <button className='strongButton' id={7} onClick={onClick} ref={s7}>대인관계 지능</button>
                <button className='strongButton' id={8} onClick={onClick} ref={s8}>자기이해 지능</button>
            </div>
            <div className='selectDone'>선택 완료</div>
        </div>
    );
};

export default Q5;