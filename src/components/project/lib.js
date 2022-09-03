import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Lazy, Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/lazy";

const ProjectLib = ({ data }) => {

    return (
        <>
            <Swiper
                // style={{
                //     "--swiper-navigation-color": "#fff",
                //     "--swiper-pagination-color": "#fff",
                // }}
                loop={true}
                lazy={true}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Lazy, Autoplay, Pagination, Navigation]}
                className="swiper"
            >
                {data.map((e, i) => (
                    <SwiperSlide key={i} className='slide'>
                        <div className='wrap'>
                            <img alt='qnp project images' src={e} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default ProjectLib;