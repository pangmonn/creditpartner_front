import React from 'react';
import ContactTitle from './ContactTitle';
import Member from './Member';
import Middle from './Middle';

const desktop = {
    width: "800px",
    marginLeft: "auto",
    marginRight: "auto",
};

const Contact = () => {
    return (
        <div style={desktop}>
            <ContactTitle />
            <Middle />
            <Member />
        </div>
    );
};

export default Contact;