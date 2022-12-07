import "swiper/css";
import "swiper/css/free-mode";

import { FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import SingleTrendHotel from "./single-trend-hotel";

const TrendingHotels = () => {
  const array = new Array(4).fill("");
  return (
    <div>
      <h1 className="h2">Trendings Hotels</h1>
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
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
      >
        {array.map((item, i) => (
          <SwiperSlide key={i}>
            <SingleTrendHotel />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TrendingHotels;
