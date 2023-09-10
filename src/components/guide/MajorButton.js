import React from "react";
import './styles/majorbutton.css'

const MajorButton = ({ majorList, selectedMajor, handleMajorButtonClick }) => {
    const handleButtonClick = (major) => {
        handleMajorButtonClick(major);
    };

    // console.log(selectedMajor);

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