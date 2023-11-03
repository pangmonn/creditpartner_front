import React from "react";
import './styles/majorbutton.css'

const MajorButton = ({ majorList, selectedMajor, setSelectedMajor, handleMajorButtonClick, guideNum }) => {
    const handleButtonClick = (major) => {
        setSelectedMajor(major); // 선택한 major로 업데이트
        handleMajorButtonClick(major, guideNum); // 부모 컴포넌트로 전달
    };

    console.log(majorList);
    console.log(selectedMajor);

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