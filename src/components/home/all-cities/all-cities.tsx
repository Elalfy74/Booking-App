// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/free-mode";

// import required modules
import { FreeMode, Grid } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import City from "./city";

const AllCities = () => {
  const arr = new Array(8).fill("");
  return (
    <section className="container -mt-20 pb-section md:mt-0 md:py-6">
      <h2 className="text-center text-secondBlack">
        Search a best place in the world
      </h2>
      <p className="text-sm text-center text-mainGray">
        Wherer you&apos;re looking for places for a vacation. we are here to
        Guide you
        <br />
        about the details you nedd to chek in and ease your tripe in advance
      </p>
      <Swiper
        className="mt-10 md:h-[400px]"
        slidesPerView={1.5}
        grid={{
          rows: 1,
        }}
        spaceBetween={10}
        freeMode={true}
        breakpoints={{
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
            grid: {
              rows: 2,
            },
          },
        }}
        modules={[Grid, FreeMode]}
      >
        {arr.map((item, i) => (
          <SwiperSlide key={i} className="custom-swiper-grid">
            <City />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default AllCities;
