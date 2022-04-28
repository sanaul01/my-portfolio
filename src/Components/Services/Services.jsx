import React, { useContext } from 'react';
import './Services.css';
import heartemoji from '../../images/heartemoji.png';
import glasses from '../../images/glasses.png';
import humbler from '../../images/humble.png';
import Card from '../Card/Card';
import Resume from './Resume.pdf'
import { themeContext } from '../../Context';

const Services = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className="services">
            {/* left side */}
            <div className="awesome">
                <span style={{ color: darkMode ? 'white' : '' }}>My Awesome</span>
                <span>Services</span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                    <br />
                    aut sequi illo voluptatem tenetur quam?
                </span>
                <a href={Resume} download>
                    <button className="button s-button">Download Cv</button>
                </a>
                <div className="blur s-blur1" style={{ background: '#ABF1FF94' }}></div>
            </div>
            {/* right side */}
            <div className="cards">

                {/* first card */}
                <div style={{ left: '14rem' }}>
                    <Card
                        emoji={heartemoji}
                        heading={'Design'}
                        details={"Figma, ImageBB, Metarial, Bootstrap, Tailwind"}
                    />
                </div>

                {/* second card */}
                <div style={{ top: '12rem', left: '-4rem' }}>
                    <Card
                        emoji={glasses}
                        heading={'Developer'}
                        details={"HTML, CSS, JavaScript, ReactJs"}
                    />
                </div>

                {/* third card */}
                <div style={{ top: '19rem', left: '12rem' }}>
                    <Card
                        emoji={humbler}
                        heading={'UX/UI'}
                        details={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem, ab?"}
                    />
                </div>

                <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>
            </div>
        </div>
    );
};

export default Services;