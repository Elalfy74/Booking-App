import "swiper/css";
import "swiper/css/free-mode";

import { FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Heading from "../section-heading";
import Passion from "./passion";

const TravelYourPassion = () => {
  const array = new Array(4).fill("");

  return (
    <section className="section">
      <Heading
        title="Travel Your Passion"
        desc="Most Brilliant reasons Entrada should be your one-stop-shop"
      />
      <Swiper
        slidesPerView={1.5}
        freeMode={true}
        spaceBetween={15}
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
        {array.map((itme, i) => (
          <SwiperSlide key={i}>
            <Passion />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TravelYourPassion;
