import React, { useState } from "react";
import SubjectList from "./SubjectList";
import SemesterButton from "./SemesterButton";
import subjectBySemesterData from "./subjectBySemesterData.json"
import subjectByMajorData from "./subjectByMajorData.json"

const SubjectTemplate = ({selectedMajor}) => {
    const [selectedSubjectData, setSelectedSemesterData] = useState([]);

    const handleButtonClick = (selectedData) => {
        setSelectedSemesterData(selectedData);
    };

    const majorData = subjectByMajorData.find(data => data.major === selectedMajor);
    console.log(selectedSubjectData);

    return (
        <div>
            {subjectBySemesterData.map((semesterData, index) => (
                <SemesterButton
                    key={index}
                    onClick={() => handleButtonClick(semesterData.subjectData)}
                    label={`${Math.floor((semesterData.semester+1)/2)}-${(semesterData.semester+1)%2+1}`}
                    isSelected={selectedSubjectData === semesterData.subjectData}
                />
            ))}
            <SubjectList selectedSemesterData={selectedSubjectData} handleButtonClick={handleButtonClick} majorData={majorData} />
        </div>
    );
};

export default SubjectTemplate;
