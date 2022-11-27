import { NextPage } from "next";

import ContactBanner from "../components/contact-banner";
import HeroForm from "../components/home/Hero/HeroForm/HeroForm";
import Breadcrumbs from "../components/hotel-list/breadcrumbs";
import Filter from "../components/hotel-list/filter/filter";
import HotelList from "../components/hotel-list/hotel-list";
import Footer from "../components/layouts/footer/footer";

const Hotels: NextPage = () => {
  return (
    <div className="px-4 mt-10 sm:px-8 lg:px-16 xl:px-20 2xl:px-36">
      <Breadcrumbs />
      <div className="my-10">
        <HeroForm />
      </div>
      <div className="flex gap-20">
        <div className=" flex-[1]">
          <Filter />
        </div>
        <div className="flex-[3]">
          <HotelList />
        </div>
      </div>
      <ContactBanner />
      <Footer />
    </div>
  );
};

export default Hotels;
