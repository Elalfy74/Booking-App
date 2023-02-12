import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";

import { getCities, getCountries, getHotels } from "@/apis";
import {
  CitiesList,
  ExploreTheWorld,
  FeaturedDestinations,
  Hero,
  TopTour,
  TravelYourPassion,
  TrendingCites,
} from "@/components/home";
import { ContactBanner } from "@/components/shared";
import { Footer } from "@/layouts";
import { ICity, ICityWCountry } from "@/types/cities";
import { ICountry } from "@/types/countries";
import { IHotel } from "@/types/hotels";

const Home = ({
  cities,
  featuredCities,
  featuredCountries,
  hotels,
  featuredHotels,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <Hero />
      <CitiesList cities={cities} />
      <FeaturedDestinations featuredCities={featuredCities} />
      <TopTour featuredCountries={featuredCountries} />
      <ExploreTheWorld hotels={hotels} />
      <TrendingCites featuredHotels={featuredHotels} />
      <TravelYourPassion />
      <ContactBanner />
      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps<{
  cities: ICityWCountry[];
  featuredCities: ICity[];
  featuredCountries: ICountry[];
  hotels: IHotel[];
  featuredHotels: IHotel[];
}> = async (context) => {
  const citiesReq = getCities({
    isFeatured: false,
    withCountry: true,
    limit: 6,
  });

  const featuredCitiesReq = getCities({
    isFeatured: true,
  });

  const featuredCountriesReq = getCountries({
    // isFeatured: true,
    limit: 6,
  });

  const hotelsReq = getHotels({
    withCity: true,
  });

  const featuredHotelsReq = getHotels({
    isFeatured: true,
  });

  const response = await Promise.all([
    citiesReq,
    featuredCitiesReq,
    featuredCountriesReq,
    hotelsReq,
    featuredHotelsReq,
  ]);

  const cities: ICityWCountry[] = response[0].data;
  const featuredCities: ICity[] = response[1].data;
  const featuredCountries: ICountry[] = response[2].data;
  const hotels: IHotel[] = response[3].data;
  const featuredHotels: IHotel[] = response[4].data;

  return {
    props: {
      cities,
      featuredCities,
      featuredCountries,
      hotels,
      featuredHotels,
    },
  };
};

export default Home;
