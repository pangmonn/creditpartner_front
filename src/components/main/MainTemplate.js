import React from 'react';
import Bar from './Bar';
import Body from './Body';
import Menu from './Menu';
import Top from './Top';
import { createContext, useState } from 'react';

const desktop = {
    width: "800px",
    marginLeft: "auto",
    marginRight: "auto",
};
  
const Template = () => {
    const [loginName, setLoginName] = useState();

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