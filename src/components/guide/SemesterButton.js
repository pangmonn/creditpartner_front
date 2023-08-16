import React from "react";
import "./styles/semesterbutton.css";

const SemesterButton = ({ onClick, label, isSelected }) => {
    return (
        <div className="semesterButtonContainer">
            <button 
                className={`semesterButton ${isSelected ? 'selected' : ''}`} 
                onClick={onClick}
            >
                {label}
            </button>
        </div>
    )  
};

export default SemesterButton;