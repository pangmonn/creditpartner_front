import React, {useEffect, useCallback} from "react";
import './styles/majorbutton.css'

const MajorButton = ({ majorList, selectedMajor, setSelectedMajor, handleMajorButtonClick, guideNum }) => {
    const handleButtonClick = useCallback((major) => {
        setSelectedMajor(major); // 선택한 major로 업데이트
        handleMajorButtonClick(major, guideNum); // 부모 컴포넌트로 전달
    }, [handleMajorButtonClick, guideNum]);
    

    console.log(majorList);
    console.log(selectedMajor);

    useEffect(() => {
        // 첫 번째 전공 선택 (첫 페이지 렌더링 시)
        if (majorList.length > 0 && !selectedMajor) {
            setSelectedMajor(majorList[0]);
            handleMajorButtonClick(majorList[0], guideNum);
        }
    }, [majorList, selectedMajor, handleMajorButtonClick, guideNum]);


    return (
        <div className="majorButtonContainer">
            {majorList.map((major, index) => (
                <button
                    className={`majorButton ${selectedMajor === major ? 'selected' : ''}`}
                    key={index}
                    onClick={() => handleButtonClick(major)}
                >
                    {major}
                </button>
            ))}
        </div>
    );
};

export default MajorButton;