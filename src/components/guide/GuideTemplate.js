import React, { useState, useEffect, useCallback } from "react";
import Top from "./Top";
import MajorButton from "./MajorButton";
import SubjectTemplate from "./SubjectTemplate";
import * as guideAPI from "./api/guideAPI";
import loading_image from '../../images/loading.gif'
import pointer_image from '../../images/pointer.png'
import './styles/guidetemplate.css'

const desktop = {
    width: "800px",
    marginLeft: "auto",
    marginRight: "auto",
};

const GuideTemplate = () => {
    const [guideData, setGuideData] = useState([]);
    const [selectedMajor, setSelectedMajor] = useState(null);
    const [loading, setLoading] = useState(true);

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

    return (
        <div style={desktop}>
            <Top />
            {loading ? ( 
                <img src={loading_image} className="guide_loading_image" alt="Loading"/>
            ) : (
                guideData.length > 0 ? (
                    <div>
                        <MajorButton 
                            majorList={guideData.map(data => data.major)} 
                            selectedMajor={selectedMajor} 
                            setSelectedMajor={setSelectedMajor} 
                            handleMajorButtonClick={handleMajorButtonClick}
                        />
                        <SubjectTemplate guideData={guideData} selectedMajor={selectedMajor} />
                    </div>
                ) : (
                    <div className="guide_no_major">
                        <div className="guide_no_major_message_1">어라?</div>
                        <div className="guide_no_major_message_2">선택한 학과가 없어요!</div>
                        <img className="guide_no_major_image" src={pointer_image} />
                        <button className="guide_no_major_button" onClick={() => window.location.replace('/chatbot')}>챗봇으로 이동하기</button>
                    </div>
                )
            )}
        </div>
    );
};

export default GuideTemplate;
