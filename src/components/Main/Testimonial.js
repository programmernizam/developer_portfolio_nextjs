"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import CommonTitle from "./CommonTitle";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules

export default function Testimonial() {
    return (
        <section>
            <CommonTitle title={"Testimonials"} description={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"} />
            <div className="mt-10 xl:mt-12">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={24}
                    autoplay={true}
                    loop={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 24,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 24,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 24,
                        },
                    }}
                    className="mySwiper"
                >
                    <SwiperSlide>Slide 1</SwiperSlide>
                </Swiper>
            </div>
        </section >
    )
}
