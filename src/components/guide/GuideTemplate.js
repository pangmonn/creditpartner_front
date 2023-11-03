import React, { useState, useEffect, useCallback } from "react";
import Top from "./Top";
import MajorButton from "./MajorButton";
import SubjectTemplate from "./SubjectTemplate";
import * as guideAPI from "./api/guideAPI";
import loading_image from '../../images/loading.gif'

const desktop = {
    width: "800px",
    marginLeft: "auto",
    marginRight: "auto",
};

const imgstyle = {
    width: '150px', // 이미지 크기를 원하는 크기로 조절
    height: '150px', // 이미지 크기를 원하는 크기로 조절
    position: 'absolute', // 절대 위치 지정
    top: '50%', // 수직 가운데 정렬
    left: '50%', // 수평 가운데 정렬
    transform: 'translate(-50%, -50%)', // 중앙 정렬을 위한 CSS 변환
  }

const GuideTemplate = () => {
    const [guideData, setGuideData] = useState([]);
    const [selectedMajor, setSelectedMajor] = useState(null);
    const [loading, setLoading] = useState(true);

    // console.log(guideData);
    // console.log(guideData[0]);

    const handleMajorButtonClick = useCallback((major) => {
        setSelectedMajor(major);
    }, []);

    useEffect(() => {
        const fetchGuideData = async () => {
            try {
                const guideData = await guideAPI.getGuide();

                // GuideData에 배열로 저장
                setGuideData(guideData);

                // SelectedMajor의 초기값 지정
                if (guideData.length > 0) {
                    // GuideData가 존재하는 경우 첫 번째 전공을 선택
                    setSelectedMajor(guideData[0].major);
                }
                setLoading(false);
            } catch (error) {
                console.error("가이드 데이터를 가져오는 중 오류 발생: ", error);
            }
        };

        fetchGuideData();
    }, []);

    console.log(guideData);
    // console.log(guideData.map(data => data.major));
    console.log(selectedMajor);

    return (
        <div style={desktop}>
            <Top />
            {loading ? ( 
                <img src={loading_image} style={imgstyle} alt="Loading"/>
            ) : (
                guideData.length > 0 && (
                    <div>
                        <MajorButton 
                            majorList={guideData.map(data => data.major)} 
                            selectedMajor={selectedMajor} 
                            setSelectedMajor={setSelectedMajor} 
                            handleMajorButtonClick={handleMajorButtonClick}
                        />
                        <SubjectTemplate guideData={guideData} selectedMajor={selectedMajor} />
                    </div>
                )
            )}
        </div>
    );
};

export default GuideTemplate;
