import React from 'react';
import JoinForm from './JoinForm';
import AuthTemplate from './AuthTemplate';

const Join = () => {
    return (
        <AuthTemplate>
            <JoinForm type="join" />
        </AuthTemplate>
    );
};

export default Join;