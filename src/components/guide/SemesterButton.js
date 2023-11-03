import React, {useState, useCallback} from "react";
import "./styles/semesterbutton.css";

const SemesterButton = ({ onClick, label, isSelected }) => {
    const [isButtonSelected, setIsButtonSelected] = useState(isSelected);
    console.log(isSelected);
    console.log(label);

    const handleClick = useCallback(() => {
        setIsButtonSelected((prevIsButtonSelected) => !prevIsButtonSelected);
        onClick(!isButtonSelected);
    }, [isButtonSelected, onClick]);
    
    return (
        <div className="semesterButtonContainer">
            <button 
                className={`semesterButton ${isSelected ? 'selected' : ''}`} 
                onClick={handleClick}
            >
                {label}
            </button>
        </div>
    )  
};


export default SemesterButton;