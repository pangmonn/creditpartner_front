import React, { useCallback, useState } from "react";
import Modal from "react-modal";
import './styles/addbutton.css';

import subjectDataList from "./subjectDataList.json";

const AddButton = ({ category, majorData, setFilteredSubjectData, setMajorData }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedClasses, setSelectedClasses] = useState([]);

    // console.log(majorData.major);
    // console.log(majorData.subjectData);
    // console.log(subjectDataList);

    // 과목 filtering 함수
    const majorDataIncludesClass = (className) => {
        return majorData.subjectData.some(item => item.class === className && item.chosen);
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
 
    // console.log(groupedData);
    
    // 추천 과목 목록 확인
    const recommendSubjects = majorData.subjectData
        .filter(item => item.recommend)
        .map(item => ({ ...item }));  

    // console.log(recommendSubjects);

    // 과목 추가 handler
    const handleAddSubject = useCallback(() => {
        const newSubjects = Object.values(groupedData)
            .flatMap((subjectGroup) => subjectGroup
                .filter(item => selectedClasses.includes(item.class))
                .map(item => {
                    const existingSubject = majorData.subjectData.find(subj => subj.class === item.class);
                    const recommend = existingSubject ? existingSubject.recommend : false;

                    return {
                        category: item.category,
                        subject: item.subject,
                        class: item.class,
                        credit: item.credit,
                        course: item.course,
                        complete: false,
                        recommend: recommend,
                        chosen: true
                    };
                })
            );

        const updatedMajorData = { ...majorData };
        updatedMajorData.subjectData = updatedMajorData.subjectData.map((subj) => {
            if (selectedClasses.includes(subj.class)) {
                return { ...subj, chosen: true };
            }
            return subj;
        });

        setMajorData(updatedMajorData);
        setFilteredSubjectData(prevData => [...prevData, ...newSubjects]);

        setIsModalOpen(false);
        setSelectedClasses([]);
    }, [selectedClasses, majorData, groupedData, setMajorData, setFilteredSubjectData]);


    return (
        <div>
            <button className='addButton' onClick={() => setIsModalOpen(true)}>+</button>
            <Modal
                className='addButtonPopUp'
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                shouldCloseOnOverlayClick={false} // 팝업창 밖을 클릭해도 닫히지 않도록 설정
            >
                {<h2>[{category}]</h2>}
                {Object.keys(groupedData).length === 0 ? (
                    <p className="addButtonNoObject">추가할 수 있는 과목이 없습니다.</p>
                ) : (
                    Object.entries(groupedData).map(([subject, subjectGroup]) => (
                        <div key={subject}>
                            {category === "기타" && <h3>{subject}</h3>}
                            <ul className="addButtonPopUpContent">
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
                            </ul>
                        </div>
                    ))
                )}

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
