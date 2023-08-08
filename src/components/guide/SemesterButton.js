import React from "react";

const SemesterButton = ({ onClick, label }) => {
    return <button onClick={onClick}>{label}</button>;
};

export default SemesterButton;