import React, { useState, useEffect } from "react";
import "./styles/subjecttemplate.css"
import SemesterButton from "./SemesterButton";
import AddButton from "./AddButton";

import subjectBySemesterData from "./subjectBySemesterData.json";
import subjectByMajorData from "./subjectByMajorData.json";

const SubjectTemplate = ({selectedMajor}) => {
    const [selectedSemesterData, setSelectedSemesterData] = useState([]); // 선택 학기
    // 선택한 학과에 대해 저장된 과목 리스트 및 추천 과목
    const [majorData, setMajorData] = useState(
        subjectByMajorData.find((data) => data.major === selectedMajor)
    );

    // 과목 분류별 필수 이수 학점
    const subjectsCredit = 
    [
        {category: "국어", total: 10}, 
        {category: "수학", total: 10},
        {category: "영어", total: 10},
        {category: "한국사", total: 6},
        {category: "사회", total: 10},
        {category: "과학", total: 12},
        {category: "체육", total: 10},
        {category: "예술", total: 10},
        {category: "기타", total: 16},
    ];


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

    // 각 카테고리별로 학점을 계산하는 함수
    const calculateTotalCredit = (categorySubjects) => {
        let totalCredit = 0;
        for (const subj of categorySubjects) {
            if (subj.complete) {
                totalCredit += subj.credit;
            }
        }
        return totalCredit;
    };

    // 삭제 버튼
    const [subjectToDelete, setSubjectToDelete] = useState(null);

    // 우클릭 이벤트
    const handleContextMenu = (e, subjClass) => {
        e.preventDefault(); // Prevent the default context menu
        if (subjClass === subjectToDelete) {
            // If you right-click on the same subject again, clear the subjectToDelete
            setSubjectToDelete(null);
        } else {
            // Otherwise, set the subject to display the delete button for
            setSubjectToDelete(subjClass);
        }
    };

    // 삭제 핸들러
    const handleDeleteSubject = () => {
        // Remove the subject from majorData
        const updatedMajorData = { ...majorData };
        updatedMajorData.subjectData = updatedMajorData.subjectData.filter(
        (subj) => subj.class !== subjectToDelete
        );
        setMajorData(updatedMajorData);

        // Clear the subjectToDelete state
        setSubjectToDelete(null);
    };

    // 과목 리스트 출력
    const subjectList = subjectsCredit.map((subjectCredit) => {
        const categorySubjects = majorData.subjectData.filter((subj) => subj.category === subjectCredit.category);

        // 필요한 과목만 필터링하여 categorySubjects 배열을 생성합니다.

        return (
            <tr key={subjectCredit.category}>
                <td>{subjectCredit.category}</td>
                <td style={{ textAlign: "left" }}>
                    <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
                        {categorySubjects.map((subj) => (
                            <span key={subj.class} className="subject_button_container">
                                <button
                                    className={`subject_button ${subj.complete ? 'subject_complete' : 'subject_incomplete'} ${selectedSemesterData.includes(subj.class) ? 'semester_selected' : ''}`}
                                    onContextMenu={(e) => handleContextMenu(e, subj.class)}
                                >
                                    {subj.class}
                                </button>
                                {subj.complete ? null : (
                                    subj.class === subjectToDelete && (
                                        <button
                                            onClick={() => handleDeleteSubject(subj.class)} className="delete_button"
                                        >
                                            삭제
                                        </button>
                                    )
                                )}
                            </span>
                        ))}
                        <AddButton category={subjectCredit.category} majorData={majorData} setMajorData={setMajorData} />
                    </div>
                </td>
                <td style={{ color: calculateTotalCredit(categorySubjects) < subjectCredit.total ? 'red' : 'inherit' }}>
                    {calculateTotalCredit(categorySubjects)}/{subjectCredit.total}
                </td>
            </tr>
        );
    });


    return (
        <div>
            {subjectBySemesterData.map((semesterData, index) => (
                <SemesterButton
                    key={index}
                    onClick={() => handleButtonClick(semesterData.subjectData)}
                    label={`${Math.floor((semesterData.semester + 1) / 2)}-${(semesterData.semester + 1) % 2 + 1}`}
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
