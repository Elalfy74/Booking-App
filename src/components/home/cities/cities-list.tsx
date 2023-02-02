import { FreeMode, Grid } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { ICityWCountry } from "@/types/cities";

import City from "./city";

type CitiesPros = {
  cities: ICityWCountry[];
};

const FeaturedCities = ({ cities }: CitiesPros) => {
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
        {cities.map((city) => (
          <SwiperSlide key={city._id} className="featured-cities-swiper">
            <City city={city} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default FeaturedCities;
