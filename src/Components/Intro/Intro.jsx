import React from 'react';
import Github from '../../images/github.png';
import Linkedin from '../../images/linkedin.png';
import Instagram from '../../images/instagram.png';
import Vector1 from '../../images/Vector1.png';
import Vector2 from '../../images/Vector2.png';
import Boy from '../../images/boy.png';
import './Intro.css'

const Intro = () => {
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span>Hy! I am</span>
                    <span>Sanaul Islam</span>
                    <span>Full Stack Developer with heigh level of exdperience in web designing and development, producting the Quality work.</span>
                </div>
                <button className="button i-button">Hire me</button>
                <div className="i-icons">
                    <img src={Github} alt="" />
                    <img src={Linkedin} alt="" />
                    <img src={Instagram} alt="" />
                </div>
            </div>

            <div className="i-right">
                
                    <img src={Vector1} alt="" />
                    <img src={Vector2} alt="" />
                    <img src={Boy} alt="" />
               
            </div>
        </div>
    );
};

export default Intro;