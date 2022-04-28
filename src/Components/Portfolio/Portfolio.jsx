import React, { useContext } from 'react';
import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react';
import sidebar from '../../images/sidebar.png';
import ecommerce from '../../images/ecommerce.png';
import HOC from '../../images/hoc.png';
import musicApp from '../../images/musicapp.png';
import 'swiper/css';
import { themeContext } from '../../Context';

const Portfolio = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="portfolio">

            {/* heading */}
            <span style={{color: darkMode? 'white' : ''}}>Recent Project</span>
            <span>Portfolio</span>

            {/* slider */}
            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                grabCursor={true}
                className='portfolio-slider'
            >
                <SwiperSlide>
                    <img src={sidebar} alt="" />
                </SwiperSlide>
                
                <SwiperSlide>
                    <img src={ecommerce} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={musicApp} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={HOC} alt="" />
                </SwiperSlide>


            </Swiper>
        </div>
    );
};

export default Portfolio;