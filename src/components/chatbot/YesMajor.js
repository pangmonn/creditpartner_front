import React, {useRef, useState} from 'react';
import BotBubble from './BotBubble';
import './styles/YesMajor.css'
import Field1 from './questionList/yes/Field1';
import save from '../../images/save.png';
import { useNavigate } from 'react-router-dom';
import client from '../auth/api/client'

const config = { headers : { "Content-Type": 'application/json', Authorization: localStorage.getItem("login-token") } };

const YesMajor = () => {
    const navigate = useNavigate();

    const txt = '희망하는 학과의 분야를 선택해줘.'

    const b1 = useRef();
    const b2 = useRef();
    const b3 = useRef();
    const b4 = useRef();
    const b5 = useRef();
    const b6 = useRef();
    
    const [selectFButton, setSelectFButton] = useState(false);
    const [yesHopeField, setYesHopeField] = useState(0);
    const [hopeMajorName, setHopeMajorName] = useState('');

    if(selectFButton) {
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
        setSelectFButton(true);
        setYesHopeField(Number(e.target.id));
    }

    const onClickSave = () => {
        const data = { 'hopeMajor': hopeMajorName }
        client.post('/api/chatbot1', data, config).then(function (response) {
            console.log(response);
    
        }).catch(function (error) {
            console.log(error);
        });
       alert('저장되었습니다.');
       navigate('/');
    }

    const ment1 = hopeMajorName+"를 희망하는 구나!";
    const ment2 = "추천하는 선택과목들을 '학과별 이수 가이드' 에서 확인하고 싶다면 아래 버튼을 눌러줘.";

    return (
        <>
            <BotBubble text={txt} />
            <div className='Field'>
                    <div></div>
                    <button className='fButton' id={1} onClick={onClick} ref={b1}>인문</button>
                    <button className='fButton' id={2} onClick={onClick} ref={b2}>사회</button>
                    <button className='fButton' id={3} onClick={onClick} ref={b3}>자연과학</button>
                    <div></div>
                    <div></div>
                    <button className='fButton' id={4} onClick={onClick} ref={b4}>공학</button>
                    <button className='fButton' id={5} onClick={onClick} ref={b5}>보건·의약학</button>
                    <button className='fButton' id={6} onClick={onClick} ref={b6}>교육</button>
                    <div></div>
            </div>
            {yesHopeField===1 ? <Field1 setHopeMajorName={setHopeMajorName} /> : ''}
            {hopeMajorName!=='' ? <BotBubble text={[ment1,<br/>,ment2]} /> : ''}
            {hopeMajorName!=='' ? <div className='imgdiv'><img src={save} onClick={onClickSave} className='save' /></div> : ''}
        </>
    );
};

export default YesMajor;