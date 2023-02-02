import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { getAllCitiesOrFeatured } from "src/apis/cities";
import { getAllCountriesOrFeatured } from "src/apis/countries";

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
  const citiesReq = getAllCitiesOrFeatured({
    country: true,
    featured: false,
    limit: 6,
  });

  const featuredCitiesReq = getAllCitiesOrFeatured({
    featured: true,
  });

  const featuredCountriesReq = getAllCountriesOrFeatured({
    featured: true,
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
