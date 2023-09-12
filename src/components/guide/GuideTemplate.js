import React, { useState } from "react";
import Top from "./Top";
import MajorButton from "./MajorButton";
import SubjectTemplate from "./SubjectTemplate";
import subjectByMajorData from "./subjectByMajorData.json"

const desktop = {
    width: "800px",
    marginLeft: "auto",
    marginRight: "auto",
};

const GuideTemplate = () => {
    // Default: 첫 번째 버튼
    const [selectedMajor, setSelectedMajor] = useState(subjectByMajorData[0].major);

    const handleMajorButtonClick = (major) => {
        setSelectedMajor(major);
    };

    console.log(selectedMajor);

    return (
        <div style={desktop}>
            <Top />
            <MajorButton majorList={subjectByMajorData.map(data => data.major)} selectedMajor={selectedMajor} setSelectedMajor={setSelectedMajor} handleMajorButtonClick={handleMajorButtonClick} />
            <SubjectTemplate selectedMajor={selectedMajor} />
        </div>
    );
};

export default GuideTemplate;
