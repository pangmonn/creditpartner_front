import React, { useState } from "react";
import SubjectList from "./SubjectList";
import SemesterButton from "./SemesterButton";
import ModifyButton from "./ModifyButton";
import subjectBySemesterData from "./subjectBySemesterData.json"
import subjectByMajorData from "./subjectByMajorData.json"

const SubjectTemplate = ({selectedMajor}) => {
    const [selectedSubjectData, setSelectedSemesterData] = useState([]);

    const handleButtonClick = (selectedData) => {
        // 버튼 재클릭시 해제
        setSelectedSemesterData(prevSelectedData => prevSelectedData === selectedData ? [] : selectedData);
    };

    const majorData = subjectByMajorData.find(data => data.major === selectedMajor);

    // ModifyButton을 이용하여 majorData 수정
    const handleModifyMajorData = (modifiedMajorData) => {
        
    };

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
            <ModifyButton ownSubjectList={majorData} />
            <SubjectList selectedSemesterData={selectedSubjectData} handleButtonClick={handleButtonClick} majorData={majorData} />
        </div>
    );
};

export default SubjectTemplate;
