/* eslint-disable @next/next/no-img-element */
// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/free-mode";

// import required modules
import { FreeMode, Grid, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const Gallery = () => {
  return (
    <div className="h-[400px] md:h-[600px]">
      <Swiper
        className="grid-swiper"
        slidesPerView={1}
        grid={{
          rows: 1,
        }}
        pagination={true}
        freeMode={true}
        breakpoints={{
          768: {
            slidesPerView: 2,
            grid: {
              rows: 3,
              fill: "column",
            },
          },
        }}
        modules={[Grid, FreeMode, Pagination]}
      >
        <SwiperSlide className="h-full md:w-2/3">
          <img
            alt="hotel-details"
            src="https://placeimg.com/800/600/arch"
            className="object-cover w-full h-full rounded-l-xl"
          />
        </SwiperSlide>
        <SwiperSlide className="grid-item">
          <img
            alt="hotel-details"
            src="https://placeimg.com/400/180/arch"
            className="object-cover w-full h-full rounded-tr-xl"
          />
        </SwiperSlide>
        <SwiperSlide className="grid-item ">
          <img
            alt="hotel-details"
            src="https://placeimg.com/400/180/arch"
            className="object-cover w-full h-full "
          />
        </SwiperSlide>
        <SwiperSlide className="grid-item">
          <img
            alt="hotel-details"
            src="https://placeimg.com/400/180/arch"
            className="object-cover w-full h-full rounded-br-xl"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Gallery;
