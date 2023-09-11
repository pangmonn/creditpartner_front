import React, { useEffect } from 'react';
import BotBubble from '../BotBubble';

const LastMent = ({username, batchim, setQuestionNum}) => {
    const name = username.substring(1) + (batchim ? '이':'');
    const last_1 = '열심히 대답 해줘서 고마워! ';
    const last_2 = '대답 해준 내용을 바탕으로 '+name+'와 잘 어울리는 top3 학과를 추천 해줄게.';
    
    useEffect(()=> {
        setQuestionNum(9);
    },[])
    return (
        <div>
            <BotBubble text={[last_1,<br />,last_2]} />
        </div>
    );
};

export default LastMent;