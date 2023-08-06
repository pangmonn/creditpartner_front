import React from 'react';
import './styles/profile.css'
import profile from '../../images/profile.png'
import userInfo from "./userInfo.json";

const imgstyle = {
    width: '160px',
    height: '160px',
    borderRadius: '50%'
}

// TEST
// let userId = 'bbb';
let userId = 'abc123';

const getUserName = (userId) => {
    const user = userInfo.find((user) => user.id === userId);
    return user ? user.name : 'OOO';
  };

const Profile = () => {
    const userName = getUserName(userId);

    return (
        <div>
            <div className='mypageProfileImage'>
                <img src={profile} style={imgstyle} />
            </div>
            <div className='mypageUsername'>{userName}님</div>
        </div>
    );
};

export default Profile;