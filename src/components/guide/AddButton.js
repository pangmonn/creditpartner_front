import React, { useCallback, useState } from "react";
import Modal from "react-modal";
import * as guideAPI from "./api/guideAPI.js"
import './styles/addbutton.css';

const AddButton = ({ category, guideData, majorData, setFilteredSubjectData, setMajorData, selectedMajor }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedClasses, setSelectedClasses] = useState([]);

    // majorData가 없을 때 빈 배열로 초기화
    const majorDataSubjectData = majorData ? majorData.subjectData : [];

    const majorDataIncludesClass = (className) => {
        return majorDataSubjectData.some(item => item.classes === className && item.chosen);
    };

    // console.log(majorDataSubjectData);
    
    const groupedData = majorDataSubjectData.reduce((result, item) => {
        if (!majorDataIncludesClass(item.classes) && item.category === category) {
            if (!result[item.subject]) {
                result[item.subject] = [];
            }
            result[item.subject].push(item);
        }
        return result;
    }, {});

    const handleAddSubject = useCallback(() => {
        setIsModalOpen(true);
    
        const newSubjects = Object.values(groupedData)
            .flatMap((subjectGroup) => subjectGroup
                .filter(item => selectedClasses.includes(item.classes))
                .map(item => {
                    const existingSubject = majorData.subjectData.find(subj => subj.classes === item.classes);
                    const recommend = existingSubject ? existingSubject.recommend : false;
    
                    return {
                        category: item.category,
                        subject: item.subject,
                        classes: item.classes,
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
            if (selectedClasses.includes(subj.classes)) {
                return { ...subj, chosen: true };
            }
            return subj;
        });
    
        setMajorData(updatedMajorData);
        setFilteredSubjectData(prevData => [...prevData, ...newSubjects]);
    
        // Create a copy of the guideData
        const updatedGuideData = [...guideData];
    
        // Find the index of the major that matches the selectedMajor
        const majorIndex = updatedGuideData.findIndex((data) => data.major === selectedMajor);
    
        // Replace the major data at majorIndex with the updatedMajorData
        updatedGuideData[majorIndex] = updatedMajorData;
    
        // Post the updatedGuideData to the server using guideAPI
        guideAPI.postGuide(updatedGuideData);

        console.log(updatedGuideData);
    
        setIsModalOpen(false);
        setSelectedClasses([]);
    }, [selectedClasses, majorData, groupedData, setMajorData, setFilteredSubjectData, guideData, selectedMajor]);
    

    return (
        <div>
            <button className={`addButton ${majorDataSubjectData.some(item => item.recommend && selectedClasses.includes(item.classes)) ? 'recommended' : ''}`} onClick={() => setIsModalOpen(true)}>+</button>
            <Modal
                className='addButtonPopUp'
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                shouldCloseOnOverlayClick={false}
            >
                {<h2>[{category}]</h2>}
                {Object.keys(groupedData).length === 0 ? (
                    <p className="addButtonNoObject">추가할 수 있는 과목이 없습니다.</p>
                ) : (
                    Object.entries(groupedData).map(([subject, subjectGroup]) => (
                        <div key={subject}>
                            {category === "기타" && <h3>{subject}</h3>}
                            <ul className="addButtonPopUpContent">
                            {subjectGroup.map(item => (
                                <li key={item.classes}>
                                    <label>
                                        <button
                                            className={`addButtonClass ${selectedClasses.includes(item.classes) ? 'selected' : ''} ${item.recommend ? 'recommended' : ''}`}
                                            onClick={() => {
                                                if (selectedClasses.includes(item.classes)) {
                                                    setSelectedClasses(prevClasses =>
                                                        prevClasses.filter(selectedClass => selectedClass !== item.classes)
                                                    );
                                                } else {
                                                    setSelectedClasses(prevClasses => [...prevClasses, item.classes]);
                                                }
                                            }}
                                        >
                                            {item.classes}
                                        </button>
                                    </label>
                                </li>
                            ))}
                            </ul>
                        </div>
                    ))
                )}

                <div className="addButtonFooter">
                    <button className="addButtonInnerButton" onClick={handleAddSubject}>추가</button>
                    <button className="addButtonInnerButton" onClick={() => {
                        setSelectedClasses([]);
                        setIsModalOpen(false);
                    }}>취소</button>
                </div>
            </Modal>
        </div>
    );
};

export default AddButton;
