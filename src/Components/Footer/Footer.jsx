import React from 'react';
import './Footer.css'
import wave from '../../images/wave.png'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook';
import Github from '@iconscout/react-unicons/icons/uil-github';
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin';

const Footer = () => {
    return (
        <div className="footer">
            <img src={wave} alt="" style={{width: "100%"}}/>
            <div className="f-content">
                <span>mdsanaulislam154@gmail.com</span>
                <div className="f-icons">
                    <Linkedin color="white" size="3rem"/>
                    <Facebook color="white" size="3rem"/>
                    <Github color="white" size="3rem"/>
                </div>
            </div>
        </div>
    );
};

export default Footer;