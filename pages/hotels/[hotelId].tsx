import { NextPage } from "next";

import {
  BookingSummary,
  Gallery,
  HotelTabs,
  HotelTags,
  ReviewForm,
  ReviewsList,
  RoomsList,
  TrendingHotels,
} from "@/components/hotel-details";
import { Breadcrumbs, ContactBanner } from "@/components/shared";
import { Divider } from "@/components/ui";
import { Footer } from "@/layouts/footer";

const HotelDetails: NextPage = () => {
  return (
    <div>
      <div className="px-4 py-10 md:px-20">
        <Breadcrumbs />
        <div>
          <h1 className="my-4 text-4xl font-semibold text-secondBlack">
            Switzerland Hotels and Places to Stay
          </h1>
          <div className="flex gap-10 mb-4">
            <p>Rating</p>
            <p>Zuich town, Switzerland</p>
          </div>
          <Gallery />
          <HotelTags />
        </div>

        <div className="flex flex-col justify-between gap-10 mb-10 lg:flex-row xl:gap-20 2xl:gap-28">
          {/* Description */}
          {/* Heading */}
          <div className="w-full lg:w-2/3">
            <h2 className="text-3xl">Exclusive room in house</h2>
            <p className="text-2xl text-mainGray">Zuich, Swithzerland</p>
            <Divider my={10} />
            <HotelTabs />
          </div>
          <div className="w-full lg:w-1/3">
            <BookingSummary />
          </div>
        </div>
        <Divider />

        <div className="container mt-20 flex flex-col gap-20 xl:w-[70%]">
          <RoomsList />
          <ReviewForm />
          <ReviewsList />
        </div>
      </div>

      <div className="container">
        <TrendingHotels />
      </div>
      <ContactBanner />
      <Footer />
    </div>
  );
};

export default HotelDetails;
