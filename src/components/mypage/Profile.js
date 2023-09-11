import React from 'react';
import './styles/profile.css'
import profile from '../../images/profile.png'
// import { join } from '../auth/api/auth';

const imgstyle = {
    width: '160px',
    height: '160px',
    borderRadius: '50%'
}


const Profile = () => {
    const userName = localStorage.getItem('username');

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