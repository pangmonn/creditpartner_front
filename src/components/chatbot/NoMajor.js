import React from 'react';
import BotBubble from './BotBubble';
import Questions from './Questions';

const NoMajor = ({inputText, setAbleSend, username, batchim}) => {
    const txt1_1 = '아직 희망하는 학과가 없구나!'
    const txt1_2 = '그럼 여러 선택과목들 중에 어떤 과목을 들을 지 고민이 많겠다.. '
    const txt1_3 = username.substring(1) + (batchim?'이':'') + '의 고민을 덜어주기 위해 ' + username.substring(1)+ (batchim?'이':'') + '와 어울리는 학과와 선택과목들을 추천 해줄게.'
    const txt1_4 = '아래 질문들에 정성을 담아 대답해줘!'
    
    return (
        <div>
            <BotBubble text={[txt1_1, <br />, txt1_2, <br />, txt1_3, <br />, txt1_4]} />
            <Questions inputText={inputText} setAbleSend={setAbleSend} username={username} batchim={batchim} />
        </div>
    );
};

export default NoMajor;