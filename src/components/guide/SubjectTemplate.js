import React, { useState } from "react";
import SubjectList from "./SubjectList";
import SemesterButton from "./SemesterButton";

const subjectData_1_1 = ["공통국어1", "공통수학1", "공통영어1", "한국사1"];
const subjectData_1_2 = ["공통국어2", "공통수학2", "공통영어2"];

const SubjectTemplate = () => {
    const [selectedSubjectData, setSelectedSubjectData] = useState([]);

    const handleButtonClick = (selectedData) => {
        setSelectedSubjectData(selectedData);
    };

    return (
        <div>
            <SemesterButton onClick={() => handleButtonClick(subjectData_1_1)} label="1-1 버튼" />
            <SemesterButton onClick={() => handleButtonClick(subjectData_1_2)} label="1-2 버튼" />
            <SubjectList selectedSubjectData={selectedSubjectData} handleButtonClick={handleButtonClick} />
        </div>
    );
};

export default SubjectTemplate;
