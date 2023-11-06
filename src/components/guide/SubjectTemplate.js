import React, { useState, useEffect, useCallback } from "react";
import "./styles/subjecttemplate.css";
import SemesterButton from "./SemesterButton";
import AddButton from "./AddButton";
import DeleteButton from "./DeleteButton";
import * as guideAPI from "./api/guideAPI.js";

const SubjectTemplate = ({ guideData, selectedMajor }) => {
    const [selectedSemesterData, setSelectedSemesterData] = useState([]); // 선택 학기
    const [majorData, setMajorData] = useState(null); // 초기값 null
    const [filteredSubjectData, setFilteredSubjectData] = useState([]);

    console.log(majorData);

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

    // 버튼 클릭 핸들러
    const handleButtonClick = useCallback((selectedData) => {
        setSelectedSemesterData((prevSelectedData) => (prevSelectedData === selectedData ? [] : selectedData));
    }, [setSelectedSemesterData]);

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

    // 삭제 기능 구현
    // 삭제 버튼
    const [subjectToDelete, setSubjectToDelete] = useState(null);

    // 우클릭 이벤트
    const handleContextMenu = useCallback((e, subjClass) => {
        e.preventDefault();
        setSubjectToDelete((prevSubjectToDelete) => (prevSubjectToDelete === subjClass ? null : subjClass));
    }, [setSubjectToDelete]);

    // 과목 삭제 핸들러
    const handleDeleteSubject = useCallback((subjectClass) => {
        const updatedGuideData = [...guideData];
        const majorIndex = updatedGuideData.findIndex((data) => data.major === selectedMajor);

        if (majorIndex !== -1) {
        const updatedMajorData = { ...updatedGuideData[majorIndex] };
        const updatedSubjectData = [...updatedMajorData.subjectData];
        const updatedFilteredSubjectData = updatedSubjectData.filter((subj) => subj.classes !== subjectClass);

        updatedMajorData.subjectData = updatedMajorData.subjectData.map((subj) =>
            subj.classes === subjectClass ? { ...subj, chosen: false } : subj
        );

        updatedGuideData[majorIndex] = updatedMajorData;

        guideAPI.postGuide(updatedGuideData);

        setFilteredSubjectData(updatedFilteredSubjectData);
        setMajorData(updatedMajorData);
        setSubjectToDelete(null);
        }
    }, [guideData, selectedMajor]);

    // 과목 리스트 렌더링
    const renderSubjectCategory = () => {
        return subjectsCredit.map((subjectCredit) => {
        const categorySubjects = filteredSubjectData.filter((subj) => subj.category === subjectCredit.category);
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
                            onContextMenu={(e) => handleContextMenu(e, subj.classes)}
                        >
                            {subj.classes}
                        </button>
                        {!subj.complete && subj.classes === subjectToDelete && (
                            <DeleteButton onDelete={handleDeleteSubject} subjectClass={subj.classes} />
                        )}
                    </span>
                ))}
                <AddButton
                    category={subjectCredit.category}
                    guideData={guideData}
                    majorData={majorData}
                    setFilteredSubjectData={setFilteredSubjectData}
                    setMajorData={setMajorData}
                    selectedMajor={selectedMajor}
                />
                </div>
            </td>
            <td style={{ color: calculateTotalCredit(categorySubjects) < subjectCredit.total ? "red" : "inherit" }}>
                {calculateTotalCredit(categorySubjects)}/{subjectCredit.total}
            </td>
            </tr>
        );
        });
    };

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

    const handleClearClick = () => {
        setSelectedSemesterData([]);
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
                <th>이수학점/최소학점</th>
                </tr>
            </thead>
            <tbody>
                {renderSubjectCategory()}
                <br />
                <tr className="subjectTotal">
                <th>합계</th>
                <th></th>
                <th className="subjectTotal-diagonal">
                    <span
                    style={{
                        color: calculateTotalCreditAllCategories() <= 174 ? "red" : "inherit",
                        fontSize: "20px",
                        fontFamily: calculateTotalCreditAllCategories() <= 174 ? "NanumSquareNeo-Heavy" : "inherit",
                    }}
                    >
                    {calculateTotalCreditAllCategories()}
                    </span>
                    <span style={{ fontSize: "32px", fontFamily: "NanumSquareNeo-Light", transform: "rotate(-30deg)" }}>
                    /
                    </span>
                    <span>174</span>
                </th>
                </tr>
                <tr className="subjectExpected">
                <th style={{ lineHeight: "125%" }}>예상 이수학점</th>
                <th></th>
                <th style={{ fontSize: "21px", fontFamily: "NanumSquareNeo-Heavy" }}>{calculateTotalExpectedCredit()}</th>
                </tr>
            </tbody>
            </table>
        </div>
        </div>
    );
};

export default SubjectTemplate;
