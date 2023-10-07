import React, { useState } from "react";
import Top from "./Top";
import MajorButton from "./MajorButton";
import SubjectTemplate from "./SubjectTemplate";
import subjectByMajor from "./subjectByMajor.json"

const desktop = {
    width: "800px",
    marginLeft: "auto",
    marginRight: "auto",
};

const GuideTemplate = () => {
    // Default: 첫 번째 버튼
    const [selectedMajor, setSelectedMajor] = useState(subjectByMajor[0].major);

    const handleMajorButtonClick = (major) => {
        setSelectedMajor(major);
    };

    console.log(selectedMajor);

    return (
        <div style={desktop}>
            <Top />
            <MajorButton majorList={subjectByMajor.map(data => data.major)} selectedMajor={selectedMajor} setSelectedMajor={setSelectedMajor} handleMajorButtonClick={handleMajorButtonClick} />
            <SubjectTemplate selectedMajor={selectedMajor} />
        </div>
    );
};

export default GuideTemplate;