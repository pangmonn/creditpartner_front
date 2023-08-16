import React from "react";
import "./styles/subjectlist.css"

const SubjectList = ({ selectedSemesterData, handleButtonClick, majorData }) => {
    const subjectMap = new Map(); // 과목별 데이터를 저장할 Map 생성
    majorData.subjectData.forEach((subj) => {
        if (!subjectMap.has(subj.subject)) {
            subjectMap.set(subj.subject, []);
        }
        subjectMap.get(subj.subject).push(subj);
    });

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
    const subjectList = Array.from(subjectMap.keys()).map((subject) => (
        <tr key={subject}>
            <td>{subject}</td>
            <td style={{ textAlign: "left" }}>
                {subjectMap.get(subject).map((subj) => (
                    <span key={subj.class}> 
                        <button
                            className={`subject_button ${subj.complete ? 'subject_complete' : 'subject_incomplete'} ${selectedSemesterData.includes(subj.class) ? 'semester_selected' : ''}`}
                        >
                            {subj.class}
                        </button>
                    </span>
                ))}
            </td>
            <td style={{ color: creditMap.get(subject) < 10 ? 'red' : 'inherit' }}>{creditMap.get(subject)}/10</td>
        </tr>
    ));

    return (
        <div>
            <table className="subjectListTable">
            <colgroup>
                <col style={{ width: "15%" }} />
                <col style={{ width: "75%" }} />
                <col style={{ width: "10%" }} />
            </colgroup>
                <thead>
                    <tr>
                        <th>과목</th>
                        <th >과목명</th>
                        <th>학점</th>
                    </tr>
                </thead>
                <tbody>{subjectList}</tbody>
            </table>
        </div>
    );
};

export default SubjectList;