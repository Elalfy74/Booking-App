import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';

import {
  getCities,
  getCountries,
  getFeaturedCities,
  getFeaturedCountries,
  getFeaturedHotels,
  getHotels,
} from '@/apis';
import {
  CitiesList,
  ExploreTheWorld,
  FeaturedDestinations,
  Hero,
  TopTour,
  TravelYourPassion,
  TrendingHotels,
} from '@/components/home';
import { ContactBanner } from '@/components/shared';
import { ICity, ICityWCountry } from '@/types/cities';
import { ICountryWCityCount } from '@/types/countries';
import { IHotelWCity } from '@/types/hotels';

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
      {/* <Footer /> */}
    </div>
  );
};

interface IProps {
  cities: ICityWCountry[];
  featuredCities: ICity[];
  featuredCountries: ICountryWCityCount[];
  hotels: IHotelWCity[];
  featuredHotels: IHotelWCity[];
}

export const getStaticProps: GetStaticProps = async (context) => {
  const citiesReq = getCities({
    withCountry: true,
  });

  const featuredCitiesReq = getFeaturedCities();

  const featuredCountriesReq = getFeaturedCountries(true);

  const hotelsReq = getHotels<IHotelWCity>({
    withCity: true,
  });

  const featuredHotelsReq = getFeaturedHotels();

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
