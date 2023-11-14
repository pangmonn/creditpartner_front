import React, { useCallback, useState } from "react";
import Modal from "react-modal";
import './styles/addbutton.css';
import * as guideAPI from "./api/guideAPI";

const AddButton = ({ category, guideData, majorData, setFilteredSubjectData, setMajorData, selectedMajor}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedClasses, setSelectedClasses] = useState([]);

    // console.log(selectedClasses);

    // majorData가 없을 때 빈 배열로 초기화
    const majorDataSubjectData = majorData ? majorData.subjectData : [];

    const majorDataIncludesClass = (className) => {
        return majorDataSubjectData.some(item => item.classes === className && item.chosen);
    };
    
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
                .map(item => ({
                        category: item.category,
                        subject: item.subject,
                        classes: item.classes,
                        credit: item.credit,
                        course: item.course,
                        complete: item.complete,
                        recommend: item.recommend,
                        chosen: item.chosen
                })
            ));

        // console.log(newSubjects);
    
        const updatedMajorData = { ...majorData };
        updatedMajorData.subjectData = updatedMajorData.subjectData.map((subj) => (
            selectedClasses.includes(subj.classes) ? { ...subj, chosen: true } : subj
        ));
    
        // Create a copy of the guideData
        const updatedGuideData = [...guideData];
    
        // Find the index of the major that matches the selectedMajor
        const majorIndex = updatedGuideData.findIndex((data) => data.major === selectedMajor);
    
        // Replace the major data at majorIndex with the updatedMajorData
        updatedGuideData[majorIndex] = updatedMajorData;

        const setMajorDataAndFilteredData = ({ majorData, filteredSubjectData }) => {
            setMajorData(majorData);
            setFilteredSubjectData(filteredSubjectData);
        };        
    
        try {
            guideAPI.postGuide(updatedGuideData);
            console.log("POST");
            alert("추가되었습니다");
            // window.location.reload(); // 새로고침

            setMajorDataAndFilteredData({
                majorData: updatedMajorData,
                filteredSubjectData: newSubjects,
            });            
        } catch (error) {
            console.error("저장 중 오류 발생: ", error);
        }

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
                ariaHideApp={false}
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
                    <button 
                        className="addButtonInnerButton" 
                        onClick={handleAddSubject}
                    >
                        추가
                    </button>
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
