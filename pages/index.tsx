import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { getAllCitiesOrFeatured } from "src/apis/cities";
import { getAllCountriesOrFeatured } from "src/apis/countries";

import {
  ExploreTheWorld,
  FeatuedDestinations,
  FeaturedCities,
  Hero,
  TopTour,
  TravelYourPassion,
  TrendingCites,
} from "@/components/home";
import { ContactBanner } from "@/components/shared";
import { Footer } from "@/layouts";
import { ICityWCountry } from "@/types/cities";
import { ICountry } from "@/types/countries";

const Home = ({
  featuredCities,
  featuredCountries,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <Hero />
      <FeaturedCities featuredCities={featuredCities} />
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
  featuredCities: ICityWCountry[];
  featuredCountries: ICountry[];
}> = async (context) => {
  const featuredCitiesReq = getAllCitiesOrFeatured({
    featured: true,
    country: true,
  });

  const featuredCountriesReq = getAllCountriesOrFeatured({
    featured: true,
  });

  const response = await Promise.all([featuredCitiesReq, featuredCountriesReq]);

  const featuredCities: ICityWCountry[] = response[0].data;
  const featuredCountries: ICountry[] = response[1].data;
  return {
    props: {
      featuredCities,
      featuredCountries,
    },
  };
};

export default Home;
