import React, { useContext } from 'react';
import './Works.css';
import upwork from '../../images/Upwork.png';
import fiver from '../../images/fiverr.png';
import facebook from '../../images/Facebook.png';
import shopify from '../../images/Shopify.png';
import amazon from '../../images/amazon.png';
import { themeContext } from '../../Context';

const Works = () => {

    const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;


    return (
        <div className="works">

            {/* left side */}
            <div className="awesome">
                <span style={{color: darkMode? 'white' : ''}}>Works for All these</span>
                <span>Brands & Clients</span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                    <br />
                    aut sequi illo voluptatem tenetur quam?
                    <br />
                    aut sequi illo voluptatem tenetur quam aut sequi illo 
                    <br />
                    Lorem ipsum dolor sit amet consectetur
                </span>
                    <button className="button s-button">Hire me</button>
                <div className="blur s-blur1" style={{ background: '#ABF1FF94' }}></div>
            </div>

            {/* right side */}
            <div className="w-right">
                <div className="w-mainCircle">
                    <div className="w-secCircle">
                        <img src={upwork} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={amazon} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={shopify} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={fiver} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={facebook} alt="" />
                    </div>
                </div>

                {/* background circle */}
                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>
            </div>
        </div>
    );
};

export default Works;