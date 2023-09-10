import React, { useState } from "react";
import Modal from "react-modal";
import './styles/addbutton.css';

import subjectDataList from "./subjectDataList.json";

const AddButton = ({ subject, majorData, setMajorData }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedClasses, setSelectedClasses] = useState([]);

    // 과목 filtering 함수
    const majorDataIncludesClass = (className) => {
        return majorData.subjectData.some(item => item.class === className);
      };

    // filtering한 과목 목록
    const filterMajorData = subjectDataList
    .filter(item => item.subject === subject && !majorDataIncludesClass(item.class))
    .map(item => item.class);

    // 과목 추가 handler
    const handleAddSubject = () => {
        // subjectDataList.json에서 찾기
        const selectedClassData = subjectDataList.filter(item =>
            selectedClasses.includes(item.class)
        );

        // 선택한 클래스 데이터로 새로운 과목 객체를 생성합니다.
        const newSubjects = selectedClassData.map(item => ({
            subject: item.subject,
            class: item.class,
            credit: item.credit,
            course: item.course,
            complete: false
        }));

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
                <h2>{subject}</h2>
                <ul className="addButtonPopUpContent">
                {filterMajorData.map(className => (
                    <div key={className}>
                        <label>
                            <button
                                className={`addButtonClass ${selectedClasses.includes(className) ? 'selected' : ''}`}
                                onClick={() => {
                                    if (selectedClasses.includes(className)) {
                                    setSelectedClasses(prevClasses =>
                                        prevClasses.filter(item => item !== className)
                                    );
                                    } else {
                                    setSelectedClasses(prevClasses => [...prevClasses, className]);
                                    }
                                }}
                            >
                            {className}
                            </button>
                        </label>
                    </div>
                    ))}
                </ul>
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
