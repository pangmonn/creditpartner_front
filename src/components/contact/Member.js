import React from 'react';
import "./styles/member.css";
import ej from "../../images/ej.png";
import sj from "../../images/sj.jpg";
import jh from "../../images/jh.png";
import cy from "../../images/cy.png";
import git from "../../images/git.png";

const Member = () => {
    return (
        <div className='members'>
            <div className='frontback'>
                <div>FRONT</div>
                <div>BACK</div>
            </div>
            <div className='images'>
                <img className="memprofile" src={ej} />
                <img className="memprofile" src={sj} />
                <img className="memprofile" src={jh} />
                <img className="memprofile" src={cy} />
            </div>
            <div className='memname'>
                <div>류의정</div>
                <div>박서준</div>
                <div>김진현</div>
                <div>우채윤</div>
            </div>
            <div className='details'>
                <div className='mem'>
                    <img className="gitimg" src={git} />
                    <span className='name'>pangmonn</span>
                </div>
                <div className='mem'>
                    <img className="gitimg" src={git} />
                    <span className='name'>seojunP</span>
                </div>
                <div className='mem'>
                    <img className="gitimg" src={git} />
                    <span className='name'>t_but_c</span>
                </div>
                <div className='mem'>
                    <img className="gitimg" src={git} />
                    <span className='name'>sdc05103</span>
                </div>
            </div>
        </div>
    );
};

export default Member;