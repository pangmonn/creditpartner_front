import React from 'react';
import logo from "../../images/logo.png";
import "./styles/contactTitle.css";

const ContactTitle = () => {
    return (
        <div>
            <span className="contactTitle">
                <img className="mainprofile" src={logo} />
                <span className="c-title">CONTACT</span>
            </span>
        </div>
    );
};

export default ContactTitle;