import React, { useState } from "react";
import "./styles/semesterbutton.css";

const SemesterButton = ({ onClick, label, isSelected }) => {
    return (
        <div>
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
