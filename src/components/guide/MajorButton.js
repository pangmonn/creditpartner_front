import React from "react";

const MajorButton = () => {
    const majorButtonList = ['컴퓨터공학과', '인공지능학과', '소프트웨어학과'];

    return (
        <div>
            <button>{majorButtonList[0]}</button>
            <button>{majorButtonList[1]}</button>
            <button>{majorButtonList[2]}</button>
        </div>
    );
};

export default MajorButton;