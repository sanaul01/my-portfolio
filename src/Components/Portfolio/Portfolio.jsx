import React from 'react';
import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react';
import sidebar from '../../images/sidebar.png';
import ecommerce from '../../images/ecommerce.png';
import HOC from '../../images/hoc.png';
import musicApp from '../../images/musicapp.png';
import 'swiper/css';

const Portfolio = () => {
    return (
        <div className="portfolio">

            {/* heading */}
            <span>Recent Project</span>
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