import React from 'react';
import './styles/profile.css'
import profile from '../../images/profile.png'
// import { join } from '../auth/api/auth';

const imgstyle = {
    width: '160px',
    height: '160px',
    borderRadius: '50%'
}

// Test(이름 받아와야 함)
let userName = 'OOO';

const Profile = () => {
    // const { user } = join(); // 맞나????

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