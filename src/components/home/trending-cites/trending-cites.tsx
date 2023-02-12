import { IHotel } from "@/types/hotels";

import Heading from "../section-heading";
import SingleTrendCity from "./single-trend-city";

const TrendingCites = ({ featuredHotels }: { featuredHotels: IHotel[] }) => {
  return (
    <section className=" bg-[#F5F5F5] py-section">
      <div className="container">
        <Heading
          title="Trending Hotels"
          desc="The most searched hotels on TripGuide"
        />
        <div className="grid grid-cols-1 gap-8 md:gap-10 lg:grid-cols-2">
          {featuredHotels.map((hotel) => (
            <SingleTrendCity key={hotel._id} hotel={hotel} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingCites;
