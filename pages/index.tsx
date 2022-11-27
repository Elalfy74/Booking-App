import type { NextPage } from "next";

import Login from "../components/auth/login/login";
import PasswordRecovery from "../components/auth/password-recovery/password-recovery";
import SignUp from "../components/auth/sign-up/sign-up";
import ContactBanner from "../components/contact-banner";
import AllCities from "../components/home/AllCities/all-cities";
import ExploreTheWorld from "../components/home/ExploreTheWorld/ExploreTheWorld";
import FeatuedDestinations from "../components/home/FeaturedDestinations/FeaturedDestinations";
import Hero from "../components/home/Hero/Hero";
import TopTour from "../components/home/TopTour/TopTour";
import TravelYourPassion from "../components/home/TravelYourPassion/TravelYourPassion";
import TrendingCites from "../components/home/TrendingCites/TrendingCites";
import Footer from "../components/layouts/footer/footer";

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
      {/* <Login /> */}
      {/* <PasswordRecovery /> */}
      {/* <SignUp /> */}
    </div>
  );
};

export default Home;
