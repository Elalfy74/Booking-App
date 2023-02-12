import "swiper/css";
import "swiper/css/free-mode";

import { FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { IHotel } from "@/types/hotels";

import Heading from "../section-heading";
import Hotel from "./hotel";

const ExploreTheWorld = ({ hotels }: { hotels: IHotel[] }) => {
  return (
    <section className="section-swapper">
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
          1536: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
      >
        {hotels.map((hotel, i) => (
          <SwiperSlide key={hotel._id}>
            <Hotel hotel={hotel} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ExploreTheWorld;
