import React, { useState } from "react";
import './styles/majorbutton.css'

const MajorButton = ({ majorList, handleMajorButtonClick }) => {
    const [selectedMajor, setSelectedMajor] = useState(majorList[0]); // 첫 번째 항목을 선택 상태로 설정

    const handleButtonClick = (major) => {
        setSelectedMajor(major);
        handleMajorButtonClick(major);
    };

    return (
        <div className="majorButtonContainer">
            {majorList.map((major, index) => (
                <button
                    className={`majorButton ${selectedMajor === major ? 'selected' : ''}`}
                    key={index}
                    onClick={() => handleButtonClick(major)}
                >
                    {major}
                </button>
            ))}
        </div>
    );
};

export default MajorButton;

