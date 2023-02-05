import { ICity } from "@/types/cities";

import Heading from "../section-heading";
import Destination from "./destination";

type FeaturedCitiesPros = {
  featuredCities: ICity[];
};

const FeaturedDestinations = ({ featuredCities }: FeaturedCitiesPros) => {
  return (
    <section className="section">
      <Heading
        title="Featured Destinations"
        desc=" Popular destinations open to visitors from indonesia"
      />
      <div className=" grid h-auto grid-cols-1 flex-col gap-6 md:h-[600px] md:grid-cols-3 md:grid-rows-9">
        <div className="md:col-span-2 md:row-span-4">
          <Destination
            img={featuredCities[0].photos[0]}
            name={featuredCities[0].name}
          />
        </div>
        <div className="col-span-1 md:row-span-3">
          <Destination
            img={featuredCities[1].photos[0]}
            name={featuredCities[1].name}
          />
        </div>
        <div className="col-span-1 md:row-span-5 md:row-start-5">
          <Destination
            img={featuredCities[2].photos[0]}
            name={featuredCities[2].name}
          />
        </div>
        <div className="col-span-1 md:row-span-5 md:row-start-5">
          <Destination
            img={featuredCities[3].photos[0]}
            name={featuredCities[3].name}
          />
        </div>
        <div className="col-span-1 md:row-span-3">
          <Destination
            img={featuredCities[4].photos[0]}
            name={featuredCities[4].name}
          />
        </div>
        <div className="col-span-1 md:row-span-3">
          <Destination
            img={featuredCities[5].photos[0]}
            name={featuredCities[5].name}
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;
