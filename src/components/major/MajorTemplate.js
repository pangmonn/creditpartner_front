import React from "react"
import Top from "./Top";
import ShowResult from "./ShowResult";

const desktop = {
    width: "800px",
    marginLeft: "auto",
    marginRight: "auto",
};

const MajorTemplate = () => {
    return (
        <div style={desktop}>
            <Top />
            <ShowResult />
        </div>
    );
};

export default MajorTemplate;