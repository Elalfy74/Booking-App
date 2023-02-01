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
