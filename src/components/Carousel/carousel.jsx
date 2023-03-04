import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Carousel.css";

const Carousel = (props) => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {props.children.map((el) => {
        return <SwiperSlide>{el}</SwiperSlide>;
      })}
    </Swiper>
  );
};

export default Carousel;
