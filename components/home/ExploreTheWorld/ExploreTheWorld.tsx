/* eslint-disable @next/next/no-img-element */
import "swiper/css";
import "swiper/css/free-mode";

import { FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Heading from "../../section-heading";
import Hotel from "./Hotel";

const ExploreTheWorld = () => {
  const array = new Array(6).fill("");

  return (
    <section className="section">
      <Heading title="Explore The World" desc="1000 beautiful places to go" />
      <Swiper
        slidesPerView={1.5}
        freeMode={true}
        spaceBetween={10}
        modules={[FreeMode]}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
      >
        {array.map((item, i) => (
          <SwiperSlide key={i}>
            <Hotel />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ExploreTheWorld;
