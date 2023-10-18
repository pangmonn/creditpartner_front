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
    const [selectedMajor, setSelectedMajor] = useState("");

    const handleMajorButtonClick = useCallback((major) => {
        setSelectedMajor(major);
    }, []);

    useEffect(() => {
        const fetchGuideData = async () => {
            try {
                const guide1Data = await guideAPI.getGuide(1);
                const guide2Data = await guideAPI.getGuide(2);
                const guide3Data = await guideAPI.getGuide(3);
    
                // console.log(guide1Data);
                // console.log(guide2Data);
                // console.log(guide3Data);

                // GuideData에 배열로 저장
                setGuideData([guide1Data, guide2Data, guide3Data]);
                // SelectedMajor의 초기값 지정
                setSelectedMajor(guide1Data.major);
            } catch (error) {
                console.error("가이드 데이터를 가져오는 중 오류 발생: ", error);
            }
        };

        fetchGuideData();
    }, []);

    // console.log(guideData);
    // console.log(guideData.map(data => data.major));

    return (
        <div style={desktop}>
            <Top />
            <MajorButton majorList={guideData.map(data => data.major)} selectedMajor={selectedMajor} setSelectedMajor={setSelectedMajor} handleMajorButtonClick={handleMajorButtonClick} />
            {guideData.length > 0 && (
                <SubjectTemplate guideData={guideData} selectedMajor={selectedMajor}/>
            )}
        </div>
    );
};

export default GuideTemplate;
