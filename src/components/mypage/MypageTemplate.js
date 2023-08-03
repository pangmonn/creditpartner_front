import React from 'react';
import Top from './Top';
import Profile from './Profile';
import Menu from './Menu';

const desktop = {
    width: "800px",
    marginLeft: "auto",
    marginRight: "auto",
};

const MyPageTemplate = () => {
    return (
        <div style={desktop}>
            <Top />
            <Profile />
            <Menu />
        </div>
    );
};

export default MyPageTemplate;