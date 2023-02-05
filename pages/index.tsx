import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";

import { getCities } from "@/apis/cities";
import { getCountries } from "@/apis/countries";
import {
  CitiesList,
  ExploreTheWorld,
  FeatuedDestinations,
  Hero,
  TopTour,
  TravelYourPassion,
  TrendingCites,
} from "@/components/home";
import { ContactBanner } from "@/components/shared";
import { Footer } from "@/layouts";
import { ICity, ICityWCountry } from "@/types/cities";
import { ICountry } from "@/types/countries";

const Home = ({
  cities,
  featuredCities,
  featuredCountries,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <Hero />
      <CitiesList cities={cities} />
      <FeatuedDestinations featuredCities={featuredCities} />
      <TopTour featuredCountries={featuredCountries} />
      <ExploreTheWorld />
      <TrendingCites />
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
    isFeatured: true,
    limit: 6,
  });

  const response = await Promise.all([
    citiesReq,
    featuredCitiesReq,
    featuredCountriesReq,
  ]);

  const cities: ICityWCountry[] = response[0].data;
  const featuredCities: ICity[] = response[1].data;
  const featuredCountries: ICountry[] = response[2].data;

  return {
    props: {
      cities,
      featuredCities,
      featuredCountries,
    },
  };
};

export default Home;
