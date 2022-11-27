import "swiper/css";

import { Swiper, SwiperSlide } from "swiper/react";

import Heading from "../../section-heading";
import SingleTopTour from "./SingleTopTour";

const TopTour = () => {
  const array = new Array(6).fill("");
  return (
    <section className="relative section">
      <Heading title="Top Tour" desc="keep calm & tarvel on" />
      <div className="h-[400px] text-white">
        <Swiper
          slidesPerView={1.5}
          spaceBetween={20}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {array.map((item, i) => (
            <SwiperSlide key={i}>
              <SingleTopTour />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TopTour;
