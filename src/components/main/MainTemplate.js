import React from 'react';
import Bar from './Bar';
import Body from './Body';
import Menu from './Menu';
import Top from './Top';

const desktop = {
    width: "800px",
    marginLeft: "auto",
    marginRight: "auto",
};
  
const Template = () => {
    return (
        <div style={desktop}>
            <Top />
            <Menu />
            <Body />
            <Bar />
        </div>
    );
};

export default Template;