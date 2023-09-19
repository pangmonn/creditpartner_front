import React, { useState } from "react";
import Modal from "react-modal";
import './styles/addbutton.css';

import subjectDataList from "./subjectDataList.json";

const AddButton = ({ category, majorData, setMajorData }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedClasses, setSelectedClasses] = useState([]);

    // 과목 filtering 함수
    const majorDataIncludesClass = (className) => {
        return majorData.subjectData.some(item => item.class === className);
    };

    // 필터된 데이터를 카테고리별로 그룹화
    const groupedData = subjectDataList.reduce((result, item) => {
        if (!majorDataIncludesClass(item.class) && item.category === category) {
            if (!result[item.subject]) {
                result[item.subject] = [];
            }
            result[item.subject].push(item);
        }
        return result;
    }, {});

    // 추천 과목 목록 확인
    const recommendSubjects = Array.isArray(majorData.recommendSubject)
        ? majorData.recommendSubject
        : [];

    // 과목 추가 handler
    const handleAddSubject = () => {
        // 선택한 클래스 데이터로 새로운 과목 객체를 생성합니다.
        const newSubjects = Object.values(groupedData)
            .flatMap((subjectGroup) => subjectGroup
                .filter(item => selectedClasses.includes(item.class))
                .map(item => ({
                    category: item.category,
                    subject: item.subject,
                    class: item.class,
                    credit: item.credit,
                    course: item.course,
                    complete: false
                }))
            );

        // 기존 majorData와 새로운 과목 합치기
        setMajorData(prevData => ({
            ...prevData,
            subjectData: [...prevData.subjectData, ...newSubjects]
        }));

        setIsModalOpen(false);
        setSelectedClasses([]);
    };

    return (
        <div>
            <button className='addButton' onClick={() => setIsModalOpen(true)}>+</button>
            <Modal
                className='addButtonPopUp'
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                shouldCloseOnOverlayClick={false} // 팝업창 밖을 클릭해도 닫히지 않도록 설정
            >
                {category !== "기타" && <h2>{category}</h2>}
                {Object.entries(groupedData).map(([subject, subjectGroup]) => (
                    <div key={subject}>
                        {category == "기타" && <h2>{subject}</h2>}
                        <ul className="addButtonPopUpContent">
                            {subjectGroup.length === 0 ? (
                                <li className="noSubjects">추가할 수 있는 과목이 없습니다.</li>
                            ) : (
                                <>
                                    {/* 과목 목록 */}
                                    {subjectGroup.map(item => {
                                        const isRecommended = recommendSubjects.some(recommendedSubject => recommendedSubject.class === item.class);
                                        return (
                                            <li key={item.class}>
                                                <label>
                                                    <button
                                                        className={`addButtonClass ${selectedClasses.includes(item.class) ? 'selected' : ''} ${isRecommended ? 'recommended' : ''}`}
                                                        onClick={() => {
                                                            if (selectedClasses.includes(item.class)) {
                                                                setSelectedClasses(prevClasses =>
                                                                    prevClasses.filter(selectedClass => selectedClass !== item.class)
                                                                );
                                                            } else {
                                                                setSelectedClasses(prevClasses => [...prevClasses, item.class]);
                                                            }
                                                        }}
                                                    >
                                                        {item.class}
                                                    </button>
                                                </label>
                                            </li>
                                        );
                                    })}
                                </>
                            )}
                        </ul>
                    </div>
                ))}
                <div className="addButtonFooter">
                    <button className="addButtonInnerButton" onClick={handleAddSubject}>추가</button>
                    <button className="addButtonInnerButton" onClick={() => {
                        setSelectedClasses([]); // 선택 해제
                        setIsModalOpen(false);
                    }}>취소</button>
                </div>
            </Modal>
        </div>
    );
};

export default AddButton;
