import type { NextPage } from "next";

import {
  AllCities,
  ExploreTheWorld,
  FeatuedDestinations,
  Hero,
  TopTour,
  TravelYourPassion,
  TrendingCites,
} from "@/components/home";
import { ContactBanner } from "@/components/shared";
import { Footer } from "@/layouts";

const Home: NextPage = () => {
  return (
    <div>
      <Hero />
      <AllCities />
      <FeatuedDestinations />
      <TopTour />
      <ExploreTheWorld />
      <TrendingCites />
      <TravelYourPassion />
      <ContactBanner />
      <Footer />
    </div>
  );
};

export default Home;
