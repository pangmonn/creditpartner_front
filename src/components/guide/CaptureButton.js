import React from "react";
import html2canvas from 'html2canvas';
import camera_image from '../../images/camera.png';

const CaptureButton = ({ selectedMajor }) => {
    const handleCaptureClick = async () => {
        try {
            const captureElement = document.getElementById("capture-container");

            // 여백을 설정하기 위한 options 객체 생성
            const options = {
                x: -20, // 좌측 여백
                y: -20, // 상단 여백
                width: captureElement.offsetWidth + 40, // 너비에 여백 반영
                height: captureElement.offsetHeight + 40, // 높이에 여백 반영
            };

            const canvas = await html2canvas(captureElement, options);

            // 이미지 데이터를 저장하거나 다른 작업을 수행할 수 있습니다.
            // 여기에서는 이미지를 다운로드하도록 하겠습니다.
            const image = canvas.toDataURL("image/png");

            // 이미지 이름을 설정합니다 (selectedMajor.major + " 이수 가이드.png")
            const imageName = `${selectedMajor} 이수 가이드.png`;

            const a = document.createElement("a");
            a.href = image;
            a.download = imageName;
            a.click();
        } catch (error) {
            console.error("화면 캡처 중 오류 발생: ", error);
        }
    };

    // 이미지 크기 조절을 위한 스타일 적용
    const imageStyle = {
        width: "40px", // 원하는 너비로 조절
        height: "40px", // 원하는 높이로 조절
        cursor: "pointer", // 마우스 커서 스타일 설정
    };

    return (
        <img src={camera_image} alt="Capture" onClick={handleCaptureClick} style={imageStyle} />
    );
};

export default CaptureButton;