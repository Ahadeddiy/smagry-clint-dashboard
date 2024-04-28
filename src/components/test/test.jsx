import React from "react";
import './test.css';
import Avt1 from "../../assets/avatar1.jpg";
import Avt2 from "../../assets/avatar2.jpg";
import Avt3 from "../../assets/avatar3.jpg";
import Avt4 from "../../assets/avatar4.jpg";

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
    {
        avatar: Avt1,
        name: 'Lecia Snow',
        review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, reiciendis voluptatem optio ipsum enim ratione est natus nam quae animi quibusdam aliquam debitis, inventore, exercitationem doloremque dolor doloribus. Nemo, impedit.'
    },
    {
        avatar: Avt2,
        name: 'Lecia Snow',
        review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, reiciendis voluptatem optio ipsum enim ratione est natus nam quae animi quibusdam aliquam debitis, inventore, exercitationem doloremque dolor doloribus. Nemo, impedit.'
    },
    {
        avatar: Avt3,
        name: 'Lecia Snow',
        review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, reiciendis voluptatem optio ipsum enim ratione est natus nam quae animi quibusdam aliquam debitis, inventore, exercitationem doloremque dolor doloribus. Nemo, impedit.'
    },
    {
        avatar: Avt4,
        name: 'Lecia Snow',
        review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, reiciendis voluptatem optio ipsum enim ratione est natus nam quae animi quibusdam aliquam debitis, inventore, exercitationem doloremque dolor doloribus. Nemo, impedit.'
    }
]

const Test = () => {
    return (
        <section id="test">
            <h5>Review form clients</h5>
            <h2>Testimonials</h2>

            <Swiper className="container test__container"
                // install Swiper modules
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}>
                {
                    data.map(({ avatar, name, review }, index) => {
                        return (
                            <SwiperSlide className="testimonia">
                                <div className="clien__avatar">
                                    <img src={avatar} alt="Avatar one" />
                                </div>
                                <h5 className="client__name">
                                    {name}
                                </h5>
                                <small className="client__review">
                                    {review}
                                </small>
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>
        </section>
    )
}

export default Test;