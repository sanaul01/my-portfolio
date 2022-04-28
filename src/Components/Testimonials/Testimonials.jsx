import React, { useContext } from 'react';
import './Testimonials.css';
import { Swiper, SwiperSlide } from "swiper/react";
import profilePic1 from '../../images/profile1.jpg'
import profilePic2 from '../../images/profile2.jpg'
import profilePic3 from '../../images/profile3.jpg'
import profilePic4 from '../../images/profile4.jpg'
import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css';

const Testimonials = () => {

    const clients = [
        {
            img: profilePic1,
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolores molestias doloremque deleniti ea natus porro! Repellendus, provident in dolorem, excepturi molestias rem aliquid unde inventore, dignissimos autem quo nulla."
        },
        {
            img: profilePic2,
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolores molestias doloremque deleniti ea natus porro! Repellendus, provident in dolorem, excepturi molestias rem aliquid unde inventore, dignissimos autem quo nulla."
        },
        {
            img: profilePic3,
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolores molestias doloremque deleniti ea natus porro! Repellendus, provident in dolorem, excepturi molestias rem aliquid unde inventore, dignissimos autem quo nulla."
        },
        {
            img: profilePic4,
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolores molestias doloremque deleniti ea natus porro! Repellendus, provident in dolorem, excepturi molestias rem aliquid unde inventore, dignissimos autem quo nulla."
        },
    ]


    return (

        <div className="t-wrapper">
            <div className="t-heading">
                <span>Clients always get</span>
                <span>Exceptional Work</span>
                <span>from me...</span>
                <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
                <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
            </div>
            {/* slider */}
            <Swiper
                modules={[Pagination]}
                slidesPerView={1}
                pagination={{ clickable: true }}

            >
                {clients.map((client, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className="testimonial">
                                <img src={client.img} alt="" />
                                <span>{client.review}</span>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    );
};

export default Testimonials;