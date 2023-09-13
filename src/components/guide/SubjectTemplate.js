import React, { useState, useEffect } from "react";
import "./styles/subjecttemplate.css"
import SemesterButton from "./SemesterButton";
import AddButton from "./AddButton";

import subjectBySemesterData from "./subjectBySemesterData.json";
import subjectByMajorData from "./subjectByMajorData.json";

const SubjectTemplate = ({selectedMajor}) => {
    const [selectedSemesterData, setSelectedSemesterData] = useState([]); // 선택 학기
    const [majorData, setMajorData] = useState(
        subjectByMajorData.find((data) => data.major === selectedMajor)
    );

    // 선택한 학과에 대한 과목 정보 업데이트
    useEffect(() => {
        const updatedMajorData = subjectByMajorData.find((data) => data.major === selectedMajor);
        setMajorData(updatedMajorData);
    }, [selectedMajor]); // selectedMajor가 변경될 때마다 실행

    console.log(selectedMajor);
    console.log(majorData);

    const handleButtonClick = (selectedData) => {
        // 버튼 재클릭시 해제
        setSelectedSemesterData(prevSelectedData => prevSelectedData === selectedData ? [] : selectedData);
    };

    // 학점 계산
    const creditMap = new Map(); // 과목별 학점 데이터를 저장
    majorData.subjectData.forEach((subj) => {
        if (!creditMap.has(subj.subject)) {
            creditMap.set(subj.subject, 0);
        }
        if (subj.complete) {
            creditMap.set(subj.subject, creditMap.get(subj.subject) + subj.credit);
        }
    });

    // 과목 리스트 출력
    const subjectList = Object.keys(majorData.subjectData.reduce((idx, subj) => {
        if (!idx[subj.subject]) {
            idx[subj.subject] = [];
        }
        idx[subj.subject].push(subj.class);
        return idx;
    }, {})).map((subject) => (
        <tr key={subject}>
            <td>{subject}</td>
            <td style={{ textAlign: "left" }}>
            <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap"}}>
                    {majorData.subjectData
                        .filter((subj) => subj.subject === subject)
                        .map((subj) => (
                            <span key={subj.class} > 
                                <button
                                    className={`subject_button ${subj.complete ? 'subject_complete' : 'subject_incomplete'} ${selectedSemesterData.includes(subj.class) ? 'semester_selected' : ''}`}
                                >
                                    {subj.class}
                                </button>
                            </span>
                        ))
                    }
                    <AddButton subject={subject} majorData={majorData} setMajorData={setMajorData} />
                </div>
            </td>
            <td style={{ color: creditMap.get(subject) < 10 ? 'red' : 'inherit' }}>{creditMap.get(subject)}/10</td>
        </tr>
    ));

    return (
        <div>
            {subjectBySemesterData.map((semesterData, index) => (
                <SemesterButton
                    key={index}
                    onClick={() => handleButtonClick(semesterData.subjectData)}
                    label={`${Math.floor((semesterData.semester+1)/2)}-${(semesterData.semester+1)%2+1}`}
                    isSelected={selectedSemesterData === semesterData.subjectData}
                />
            ))}

            <div>
                <table className="subjectListTable">
                <colgroup>
                    <col style={{ width: "12%" }} />
                    <col style={{ width: "70%" }} />
                    <col style={{ width: "18%" }} />
                </colgroup>
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th>이수학점/최소학점</th>
                        </tr>
                    </thead>
                    <tbody>
                        {subjectList}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SubjectTemplate;
