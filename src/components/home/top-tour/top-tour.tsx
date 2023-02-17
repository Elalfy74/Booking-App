import { FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { ICountryWCityCount } from "@/types/countries";

import Heading from "../section-heading";
import SingleTopTour from "./single-top-tour";

type TopTourProps = {
  featuredCountries: ICountryWCityCount[];
};

const TopTour = ({ featuredCountries }: TopTourProps) => {
  return (
    <section className="relative py-section sm:container">
      <div className="px-4 sm:px-0">
        <Heading title="Top Tour" desc="keep calm & travel on" />
      </div>
      <Swiper
        className="swiper-padding text-white"
        slidesPerView={1.5}
        spaceBetween={20}
        modules={[FreeMode]}
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
    </section>
  );
};

export default TopTour;
