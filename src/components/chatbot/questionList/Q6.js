import React from 'react';
import BotBubble from '../BotBubble';

const Q6 = ({username, batchim}) => {
    const name = username.substring(1) + (batchim ? '이':'')
    const q6_1 = '계속 잘 답해줘서 너무 고마워.';
    const q6_2 = '그러면 '+name+'는 스스로 잘 한다고 생각하는 게 있어?';
    const q6_3 = '나는 학생들 얘기 들어주고 방향을 선택해주는게 장점이거든.'
    const q6_4 = '일상의 사소한 것들이라도 좋으니까 편하게 알려줘.';
    const q6_5 = ' 여러 개 적어줘도 좋아!';
    return (
        <div>
            <BotBubble text={[q6_1,<br />,q6_2,<br />,q6_3,<br />,q6_4,q6_5]} />
        </div>
    );
};

export default Q6;