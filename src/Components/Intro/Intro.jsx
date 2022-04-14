import React from 'react';
import Github from '../../images/github.png';
import Linkedin from '../../images/linkedin.png';
import Instagram from '../../images/instagram.png';
import Vector1 from '../../images/Vector1.png';
import Vector2 from '../../images/Vector2.png';
import crown from '../../images/crown.png';
import thumbup from '../../images/thumbup.png';
import glassesimoji from '../../images/glassesimoji.png'
import Boy from '../../images/boy.png';
import './Intro.css'
import FloatingDiv from '../FloatingDiv/FloatingDiv';

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
                <img src={glassesimoji} alt="" />
                <div style={{ top: '-4%', left: '68%' }}>
                    <FloatingDiv image={crown} txt1='Web' txt2='Developer' />
                </div>
                <div style={{ top: '18rem', left: '0rem' }}>
                    <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award' />
                </div>
                {/* blur divs */}
                <div className="blur" style={{background: "rgb(238 210 255)"}}>    
                </div>

                <div className="blur" style={{
                    background: '#c1f5ff',
                    top: '17rem', 
                    width: '21rem',
                    heigh: '11rem',
                    left: '-9rem'
                }}></div>
            </div>
        </div>
    );
};

export default Intro;