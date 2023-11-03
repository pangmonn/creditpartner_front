import React, { useState, useEffect, useCallback } from "react";
import Top from "./Top";
import MajorButton from "./MajorButton";
import SubjectTemplate from "./SubjectTemplate";
import * as guideAPI from "./api/guideAPI";

const desktop = {
    width: "800px",
    marginLeft: "auto",
    marginRight: "auto",
};

const GuideTemplate = () => {
    const [guideData, setGuideData] = useState([]);
    const [selectedMajor, setSelectedMajor] = useState(null);

    // console.log(guideData);
    // console.log(guideData[0]);

    const handleMajorButtonClick = useCallback((major, guide) => {
        setSelectedMajor(major);
    }, []);

    useEffect(() => {
        const fetchGuideData = async () => {
            try {
                const guideData = await guideAPI.getGuide();

                // GuideData에 배열로 저장
                setGuideData(guideData);

                // SelectedMajor의 초기값 지정
                setSelectedMajor(guideData[0]);
            } catch (error) {
                console.error("가이드 데이터를 가져오는 중 오류 발생: ", error);
            }
        };

        fetchGuideData();
    }, []);

    // console.log(guideData);
    // console.log(guideData.map(data => data.major));
    console.log(selectedMajor);
    
    return (
        <div style={desktop}>
            <Top />
            <MajorButton 
                majorList={guideData.map(data => data.major)} 
                selectedMajor={selectedMajor} 
                setSelectedMajor={setSelectedMajor} 
                handleMajorButtonClick={handleMajorButtonClick}
            />
            {guideData.length > 0 && (
                <SubjectTemplate guideData={guideData} selectedMajor={selectedMajor}/>
            )}
        </div>
    );
};

export default GuideTemplate;
