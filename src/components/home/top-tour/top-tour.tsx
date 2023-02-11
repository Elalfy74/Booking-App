import "swiper/css";

import { Swiper, SwiperSlide } from "swiper/react";

import { ICountry } from "@/types/countries";

import Heading from "../section-heading";
import SingleTopTour from "./single-top-tour";

type TopTourProps = {
  featuredCountries: ICountry[];
};

const TopTour = ({ featuredCountries }: TopTourProps) => {
  return (
    <section className="section-swapper relative">
      <Heading title="Top Tour" desc="keep calm & tarvel on" />
      <div className="text-white ">
        <Swiper
          slidesPerView={1.5}
          spaceBetween={20}
          breakpoints={{
            640: {
              slidesPerView: 1.75,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2.25,
            },
            1280: {
              slidesPerView: 2.5,
            },
            1536: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {featuredCountries.map((fCountry) => (
            <SwiperSlide key={fCountry._id}>
              <SingleTopTour country={fCountry} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TopTour;
