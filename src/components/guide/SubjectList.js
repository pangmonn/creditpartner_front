import React from "react";

const SubjectList = ({ selectedSemesterData, handleButtonClick, majorData }) => {
    const subjectMap = new Map(); // 과목별 데이터를 저장할 Map 생성

    // Use majorData.subjectData instead of subjectData
    majorData.subjectData.forEach((subj) => {
        if (!subjectMap.has(subj.subject)) {
            subjectMap.set(subj.subject, []);
        }
        subjectMap.get(subj.subject).push(subj);
    });

    // Calculate creditMap based on majorData.subjectData
    const creditMap = new Map();

    majorData.subjectData.forEach((subj) => {
        if (!creditMap.has(subj.subject)) {
            creditMap.set(subj.subject, 0);
        }
        creditMap.set(subj.subject, creditMap.get(subj.subject) + subj.credit);
    });

    const subjectList = Array.from(subjectMap.keys()).map((subject) => (
        <tr key={subject}>
            <td>{subject}</td>
            <td>
                {subjectMap.get(subject).map((subj) => (
                    <span key={subj.class} style={{ fontWeight: selectedSemesterData.includes(subj.class) ? "bold" : "normal" }}>
                        {subj.class}
                    </span>
                ))}
            </td>
            <td>{creditMap.get(subject)}/10</td>
        </tr>
    ));

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>과목</th>
                        <th>과목명</th>
                        <th>학점</th>
                    </tr>
                </thead>
                <tbody>{subjectList}</tbody>
            </table>
        </div>
    );
};

export default SubjectList;