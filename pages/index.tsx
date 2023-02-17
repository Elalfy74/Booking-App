import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";

import { getCities, getCountries, getHotels } from "@/apis";
import {
  CitiesList,
  ExploreTheWorld,
  FeaturedDestinations,
  Hero,
  TopTour,
  TravelYourPassion,
  TrendingHotels,
} from "@/components/home";
import { ContactBanner } from "@/components/shared";
import { Footer } from "@/layouts";
import { ICity, ICityWCountry } from "@/types/cities";
import { ICountry, ICountryWCityCount } from "@/types/countries";
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
      <TrendingHotels featuredHotels={featuredHotels} />
      {/* <TravelYourPassion /> */}
      <ContactBanner />
      <Footer />
    </div>
  );
};

interface IProps {
  cities: ICityWCountry[];
  featuredCities: ICity[];
  featuredCountries: ICountryWCityCount[];
  hotels: IHotel[];
  featuredHotels: IHotel[];
}
export const getStaticProps: GetStaticProps<IProps> = async (context) => {
  const citiesReq = getCities({
    withCountry: true,
  });

  const featuredCitiesReq = getCities({
    isFeatured: true,
  });

  const featuredCountriesReq = getCountries({
    withCitiesCount: true,
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

  const cities = response[0].data;
  const featuredCities = response[1].data;
  const featuredCountries = response[2].data;
  const hotels = response[3].data;
  const featuredHotels = response[4].data;

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
