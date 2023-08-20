import React, { useState } from 'react';
import BotBubble from './BotBubble';
import FirstBotBubble from './FirstBotBubble';
import HasHopeMajor from './HasHopeMajor';
import NoMajor from './NoMajor';
import UserBubble from './UserBubble';
import YesMajor from './YesMajor';

function checkBatchimEnding(word) {
    if (typeof word !== 'string') return null;
   
    var lastLetter = word[word.length - 1];
    var uni = lastLetter.charCodeAt(0);
   
    if (uni < 44032 || uni > 55203) return null;
   
    return (uni - 44032) % 28 != 0;
  }

const BubbleList = ({inputText, setAbleSend}) => {
    const username = '김태형'
    const batchim = checkBatchimEnding(username);

    const [hopeMajor, setHopeMajor] = useState(0);

    const clickYES = e => {
        setHopeMajor(1);
        console.log('clickYES');
    }

    const clickNO = () => {
        setHopeMajor(2);
        console.log('clickNO');
        return <NoMajor />
    }

    return (
        <div>
            <FirstBotBubble username={username} batchim={batchim} />
            <HasHopeMajor clickYES={clickYES} clickNO={clickNO} />
            {hopeMajor===1 ? <YesMajor /> : console.log('yes')}
            {hopeMajor===2 ? <NoMajor inputText={inputText} setAbleSend={setAbleSend} username={username} batchim={batchim} /> : console.log('no')}
        </div>
    );
};

export default BubbleList;