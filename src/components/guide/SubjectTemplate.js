import React, { useState, useEffect, useCallback } from "react";
import "./styles/subjecttemplate.css";
import SemesterButton from "./SemesterButton";
import AddButton from "./AddButton";
import DeleteButton from "./DeleteButton";
import CaptureButton from "./CaptureButton";

const SubjectTemplate = ({ guideData, selectedMajor, addMode }) => {
    const [selectedSemesterData, setSelectedSemesterData] = useState([]); // 선택 학기
    const [majorData, setMajorData] = useState(null); // 초기값 null
    const [filteredSubjectData, setFilteredSubjectData] = useState([]);

    // console.log(majorData);

    // 과목 분류별 필수 이수 학점
    const subjectsCredit = [
        { category: "국어", total: 10 },
        { category: "수학", total: 10 },
        { category: "영어", total: 10 },
        { category: "한국사", total: 6 },
        { category: "사회", total: 10 },
        { category: "과학", total: 12 },
        { category: "체육", total: 10 },
        { category: "예술", total: 10 },
        { category: "기타", total: 16 },
    ];

    // 학기별 수강 과목 저장
    const SemesterData = useCallback((guideData) => {
        const subjectBySemester = [];

        if (guideData && guideData.subjectData) {
        const semesters = {};

        guideData.subjectData.forEach((subject) => {
            const { complete, classes: subjectClass } = subject;

            if (complete > 0) {
            if (!semesters[complete]) {
                semesters[complete] = [];
            }
            semesters[complete].push(subjectClass);
            }
        });

        for (const semester in semesters) {
            subjectBySemester.push({ semester: parseInt(semester), subjectData: semesters[semester] });
        }
        } else {
        console.error("guideData is not properly defined");
        }

        return subjectBySemester;
    }, []);

    // 선택한 학과에 대한 majordata 업데이트
    useEffect(() => {
        if (selectedMajor && guideData) {
            const updatedMajorData = guideData.find((data) => data.major === selectedMajor);
            if (updatedMajorData) {
                setMajorData(updatedMajorData);
            }
        }
    }, [selectedMajor, guideData]);

    useEffect(() => {
        if (majorData) {
        const updatedFilteredSubjectData = majorData.subjectData.filter((subject) => subject.chosen === true);
        setFilteredSubjectData(updatedFilteredSubjectData);
        }
    }, [majorData]);

    /* 계산 기능 */
    // 각 카테고리별로 이수학점을 계산하는 함수
    const calculateTotalCredit = (categorySubjects) => {
        return categorySubjects.reduce((totalCredit, subj) => (subj.complete ? totalCredit + subj.credit : totalCredit), 0);
    };

    // 모든 카테고리의 이수 학점 합계 계산 함수
    const calculateTotalCreditAllCategories = () => {
        return subjectsCredit.reduce((totalCredit, subjectCredit) => {
        const categorySubjects = filteredSubjectData.filter((subj) => subj.category === subjectCredit.category);
        return totalCredit + calculateTotalCredit(categorySubjects);
        }, 0);
    };

    // 모든 카테고리의 예상 이수학점을 계산하는 함수
    const calculateTotalExpectedCredit = () => {
        return filteredSubjectData.reduce((totalCredit, subj) => totalCredit + subj.credit, 0);
    };

    /* SemesterButton Handler */
    // 버튼 클릭 핸들러
    const handleButtonClick = useCallback((selectedData) => {
        setSelectedSemesterData((prevSelectedData) => (prevSelectedData === selectedData ? [] : selectedData));
    }, [setSelectedSemesterData]);

    // 학기 초기화
    const handleClearClick = () => {
        setSelectedSemesterData([]);
    };

    /* Rendering */
    // 학기 버튼 렌더링
    const renderSemesterButtons = () => {
        return SemesterData(majorData).map((semesterData, index) => (
        <SemesterButton
            key={index}
            onClick={() => handleButtonClick(semesterData.subjectData)}
            label={`${Math.floor((semesterData.semester + 1) / 2)}-${(semesterData.semester + 1) % 2 + 1}`}
            isSelected={selectedSemesterData.length > 0 && semesterData.subjectData.every((item) => selectedSemesterData.includes(item))}
        />
        ));
    };

    // 추가/삭제 모드 렌더링
    const renderModeButton = (subjectCredit) => {
        if (addMode === true) {
            return (
                <AddButton
                    category={subjectCredit.category}
                    guideData={guideData}
                    majorData={majorData}
                    setFilteredSubjectData={setFilteredSubjectData}
                    setMajorData={setMajorData}
                    selectedMajor={selectedMajor}
                />
            );
        } else {
            return (
                <DeleteButton
                    category={subjectCredit.category}
                    guideData={guideData}
                    majorData={majorData}
                    setFilteredSubjectData={setFilteredSubjectData}
                    setMajorData={setMajorData}
                    selectedMajor={selectedMajor}
                />
            );
        }
    };

    // 과목 리스트 렌더링
    const renderSubjectCategory = () => {
        return subjectsCredit.map((subjectCredit) => {
            let categorySubjects = filteredSubjectData
                .filter((subj) => subj.category === subjectCredit.category)
                .sort((a, b) => {
                    // '공통' < '일반' < '진로' 순서대로 정렬
                    const courseOrder = {
                        '공통': 1,
                        '일반': 2,
                        '진로': 3,
                    };

                    if (a.course === b.course) {
                        // course가 같은 경우 classes로 정렬
                        const classOrder = {
                            '공통': 1,
                            '일반': 2,
                            '진로': 3,
                        };
                        return classOrder[a.classes] - classOrder[b.classes];
                    }

                    return courseOrder[a.course] - courseOrder[b.course];
                });

            return (
                <tr key={subjectCredit.category}>
                    <td>{subjectCredit.category}</td>
                    <td style={{ textAlign: "left" }}>
                        <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
                            {categorySubjects.map((subj) => (
                                <span key={subj.classes} className="subject_button_container">
                                    <button
                                        className={`subject_button ${subj.complete ? "subject_complete" : "subject_incomplete"} ${
                                            selectedSemesterData.includes(subj.classes) ? "semester_selected" : ""
                                        }`}
                                    >
                                        {subj.classes}
                                    </button>
                                </span>
                            ))}
                            {renderModeButton(subjectCredit)}
                        </div>
                    </td>
                    <td style={{ color: calculateTotalCredit(categorySubjects) < subjectCredit.total ? "red" : "inherit" }}>
                        {calculateTotalCredit(categorySubjects)}/{subjectCredit.total}
                    </td>
                </tr>
            );
        });
    };

    return (
        <div className="subject_template">
        {renderSemesterButtons()}
        <button onClick={handleClearClick} className="semester_clear">
            학기 초기화
        </button>
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
                    <th style={{"lineHeight": "1.5"}}>
                        이수학점/
                        <br/>
                        최소학점
                    </th>
                    </tr>
                </thead>
                <tbody>
                    {/* 과목 목록 */}
                    {renderSubjectCategory()}
                    <br />
                </tbody>
            </table>
        </div>

        <div className="subject_result">
            {/* 합계 */}
            <div className="subjectTotal">
                <div>합계</div>
                <div className="subjectTotal-diagonal">
                    <span
                    style={{
                        color: calculateTotalCreditAllCategories() <= 174 ? "red" : "inherit",
                        fontFamily: calculateTotalCreditAllCategories() <= 174 ? "NanumSquareNeo-Heavy" : "inherit",
                    }}
                    >
                    {calculateTotalCreditAllCategories()}
                    </span>
                    <span>/174</span>
                </div>
            </div>
                
            {/* 예상 학점 */}
            <div className="subjectExpected">
                <div style={{ lineHeight: "125%" }}>예상 이수학점</div>
                <div>{calculateTotalExpectedCredit()}</div>
            </div>

            {/* 캡쳐 버튼 */}
            <div>
                <CaptureButton selectedMajor={selectedMajor} />
            </div>
        </div>

        </div>
    );
};

export default SubjectTemplate;
