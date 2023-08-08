import React from "react";
import Top from "./Top";
import MajorButton from "./MajorButton";
import SemesterButton from "./SemesterButton";
import SubjectList from "./SubjectList";
import SubjectTemplate from "./SubjectTemplate";

const desktop = {
    width: "800px",
    marginLeft: "auto",
    marginRight: "auto",
};

const GuideTemplate = () => {
    return (
        <div style={desktop}>
            <Top />
            <MajorButton />
            <SubjectTemplate />
        </div>
    );
};

export default GuideTemplate;