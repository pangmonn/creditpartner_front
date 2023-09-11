import React, { useState, useRef, useContext , useEffect} from 'react';
import Q3 from './questionList/Q3';
import Q1 from './questionList/Q1';
import Q2 from './questionList/Q2';
import { MyContext } from './ChatbotTemplate';
import UserBubble from './UserBubble';
import Q4 from './questionList/Q4';
import Q5 from './questionList/Q5';
import './styles/Questions.css';
import Q6 from './questionList/Q6';
import Q7 from './questionList/Q7';
import LastMent from './questionList/LastMent';
import Result from './questionList/Result';
import BotBubble from './BotBubble';

const Questions = ({inputText, setAbleSend, username, batchim}) => {
    const {answer3, answer4, answer6, answer9, questionNum, setQuestionNum} = useContext(MyContext);
    const [hopeField, setHopeField] = useState(0); // 0: 미클릭 1: 희망 계열 있 2: 없
    const [field, setField] = useState(0); // 0: 없 1: 인문 ~
    const [strongs, setStrongs] = useState([]);
    const [selectPersonality, setSelectPersonality] = useState(null);
    const [resultMajor, setResultMajor] = useState('');

    const messageEndRef = useRef();

    useEffect(() => {
        messageEndRef.current.scrollIntoView({ behavior: 'smooth' });
      }, [questionNum, hopeField, field, messageEndRef]);

    console.log('q:'+questionNum);

    return (
        <div>
            <Q1 setHopeField={setHopeField} />
            {hopeField===1 ? <Q2 hopeField={hopeField} setField={setField} /> : console.log('q2')}
            {hopeField===2 || (hopeField===1 && field!==0) ? <Q3 field={field} inputText={inputText} setAbleSend={setAbleSend} setQuestionNum={setQuestionNum} /> : console.log('q3')}
            {answer3!=='' ? <UserBubble text={answer3} /> : console.log('error1')}
            {questionNum>3 ? <Q4 /> : ''}
            {answer4!=='' ? <UserBubble text={answer4} /> : console.log('error2')}
            {questionNum>4 ? <Q5 username={username} batchim={batchim} strongs={strongs} setStrongs={setStrongs} setAbleSend={setAbleSend} setQuestionNum={setQuestionNum} /> : ''}
            {questionNum>5 ? <Q6 username={username} batchim={batchim} /> : ''}
            {answer6!=='' ? <UserBubble text={answer6} /> : console.log('error6')}
            {questionNum>6 ? <Q7 username={username} batchim={batchim} setQuestionNum={setQuestionNum} selectPersonality={selectPersonality} setSelectPersonality={setSelectPersonality} /> : ''}
            {questionNum>7 ? <LastMent username={username} batchim={batchim} setQuestionNum={setQuestionNum} /> : ''}
            {questionNum>8 ? <Result answers={[field, answer3, answer4, strongs, answer6, selectPersonality]} setResultMajor /> : ''}
            {resultMajor!=='' ? <BotBubble text={resultMajor} /> : ''}
            <div className='last' ref={messageEndRef}></div>
        </div>
    );
};

export default Questions;