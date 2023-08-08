import React, { useState } from "react";
import subjectData from "./subjectData.json";

const subjectData_1_1 = ["공통국어1", "공통수학1", "공통영어1", "한국사1"];
const subjectData_1_2 = ["공통국어2", "공통수학2", "공통영어2"];

const SubjectList = ({ selectedSubjectData, handleButtonClick }) => {
    const subjectMap = new Map(); // 과목별 데이터를 저장할 Map 생성

    // 과목 데이터를 Map에 추가
    subjectData.forEach((subj) => {
        if (!subjectMap.has(subj.subject)) {
            subjectMap.set(subj.subject, []);
        }
        subjectMap.get(subj.subject).push(subj);
    });

    // 각 과목별 학점 합계 계산
    const creditMap = new Map();
    subjectData.forEach((subj) => {
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
                    <span key={subj.class} style={{ fontWeight: selectedSubjectData.includes(subj.class) ? "bold" : "normal" }}>
                        {subj.class}
                    </span>
                ))}
            </td>
            <td>{creditMap.get(subject)}</td>
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