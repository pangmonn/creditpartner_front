import React, { useState, useEffect } from "react";
import "./styles/subjecttemplate.css"
import SemesterButton from "./SemesterButton";
import AddButton from "./AddButton";
import DeleteButton from "./DeleteButton";

const SubjectTemplate = ({subjectByMajor, selectedMajor}) => {
    const [selectedSemesterData, setSelectedSemesterData] = useState([]); // 선택 학기
    const [majorData, setMajorData] = useState(
        subjectByMajor.find((data) => data.major === selectedMajor)
    );
    const [filteredSubjectData, setFilteredSubjectData] = useState([]);

    useEffect(() => {
        // 선택한 학과에 대한 majorData 업데이트
        const updatedMajorData = subjectByMajor.find((data) => data.major === selectedMajor);
        setMajorData(updatedMajorData);
    }, [selectedMajor]);

    useEffect(() => {
        // majorData가 업데이트되면 filteredSubjectData를 업데이트
        if (majorData) {
        const updatedFilteredSubjectData = majorData.subjectData.filter((subject) => subject.chosen === true);
        setFilteredSubjectData(updatedFilteredSubjectData);
        }
    }, [majorData]);

    console.log(majorData.major);
    // console.log(majorData.subjectData);
    // console.log(majorData);
    console.log(filteredSubjectData);
    
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

    console.log(selectedMajor);

    const handleButtonClick = (selectedData) => {
        // 버튼 재클릭시 해제
        setSelectedSemesterData(prevSelectedData => prevSelectedData === selectedData ? [] : selectedData);
    };

    // 각 카테고리별로 이수학점을 계산하는 함수
    const calculateTotalCredit = (categorySubjects) => {
        let totalCredit = 0;
        for (const subj of categorySubjects) {
            if (subj.complete) {
                totalCredit += subj.credit;
            }
        }
        return totalCredit;
    };

    // 모든 카테고리의 이수 학점 합계 계산 함수
    const calculateTotalCreditAllCategories = () => {
        let totalCredit = 0;
        subjectsCredit.forEach((subjectCredit) => {
        const categorySubjects = filteredSubjectData.filter((subj) => subj.category === subjectCredit.category);
        totalCredit += calculateTotalCredit(categorySubjects);
        });
        return totalCredit;
    };
    
    // 모든 카테고리의 예상 이수학점을 계산하는 함수
    const calculateTotalExpectedCredit = () => {
        let totalCredit = 0;
        for (const subj of filteredSubjectData) {
        totalCredit += subj.credit;
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
    const handleDeleteSubject = (subjectClass) => {
        // Remove the subject from majorData
        const updatedMajorData = { ...majorData };
        const updatedSubjectData = [...filteredSubjectData];
        const updatedFilteredSubjectData = updatedSubjectData.filter(
            (subj) => subj.class !== subjectClass
        );

        // Update chosen to false for the subjectToDelete in majorData.subjectData
        updatedMajorData.subjectData = updatedMajorData.subjectData.map((subj) => {
            if (subj.class === subjectClass) {
                return { ...subj, chosen: false };
            }
            return subj;
        });

        // Update filteredSubjectData and majorData
        setFilteredSubjectData(updatedFilteredSubjectData);
        setMajorData(updatedMajorData);

        // Clear the subjectToDelete state
        setSubjectToDelete(null);
    };
  
    // 과목 리스트 출력
    const subjectList = subjectsCredit.map((subjectCredit) => {
        const categorySubjects = filteredSubjectData.filter((subj) => subj.category === subjectCredit.category);
    
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
                                        <DeleteButton onDelete={handleDeleteSubject} subjectClass={subj.class} />
                                    )
                                )}
                            </span>
                        ))}
                        <AddButton category={subjectCredit.category} majorData={majorData} setFilteredSubjectData={setFilteredSubjectData} setMajorData={setMajorData} />
                    </div>
                </td>
                <td style={{ color: calculateTotalCredit(categorySubjects) < subjectCredit.total ? 'red' : 'inherit' }}>
                    {calculateTotalCredit(categorySubjects)}/{subjectCredit.total}
                </td>
            </tr>
        );
    });

    // subjectData를 semesterData 형태로 변형하는 함수
    const SemesterData = (subjectByMajor) => {
        const subjectBySemester = [];
      
        if (subjectByMajor && subjectByMajor.subjectData) {
          const semesters = {};
      
          subjectByMajor.subjectData.forEach((subject) => {
            const { complete, class: subjectClass } = subject;
      
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
          console.error("subjectByMajor is not properly defined");
        }
      
        return subjectBySemester;
    }

    // console.log(SemesterData(majorData));
    
    return (
        <div className="subject_template">
            {SemesterData(majorData).map((semesterData, index) => (
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
                        <br />

                        <tr className="subjectTotal">
                            <th>합계</th>
                            <th></th>
                            <th className="subjectTotal-diagonal">
                                <span
                                    style={{ 
                                        color: calculateTotalCreditAllCategories() <= 174 ? 'red' : 'inherit',
                                        fontSize: "20px",
                                        fontFamily: calculateTotalCreditAllCategories() <= 174 ? "NanumSquareNeo-Heavy" : 'inherit'
                                    }}
                                >
                                    {calculateTotalCreditAllCategories()}
                                </span>
                                <span
                                    style={{
                                        fontSize: "32px",
                                        fontFamily: "NanumSquareNeo-Light",
                                        transform: "rotate(-30deg)"
                                    }}
                                >/</span>
                                <span>174</span>
                            </th>
                        </tr>

                        <tr className="subjectExpected">
                            <th
                                style={{lineHeight: '125%'}}
                            >
                                예상
                                <br />
                                이수학점
                            </th>
                            <th></th>
                            <th
                                style={{
                                    fontSize: '21px', 
                                    fontFamily: "NanumSquareNeo-Heavy"
                                }}
                            >
                                {calculateTotalExpectedCredit()}
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SubjectTemplate;
