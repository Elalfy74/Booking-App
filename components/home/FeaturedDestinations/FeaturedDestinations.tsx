import Heading from "../../section-heading";
import Destination, {
  MediumDestination,
  SmallDestination,
} from "./Destination";

const FeaturedDestinations = () => {
  return (
    <section className="section">
      <Heading
        title="Featured Destinations"
        desc=" Popular destinations open to visitors from indonesia"
      />
      <div className=" grid h-[1200px] grid-cols-1 flex-col gap-6 md:h-[600px] md:grid-cols-3 md:grid-rows-9">
        <div className=" md:col-span-2 md:row-span-4">
          <Destination />
        </div>
        <div className="col-span-1 md:row-span-3">
          <SmallDestination />
        </div>
        <div className="col-span-1 md:row-span-5 md:row-start-5">
          <MediumDestination />
        </div>
        <div className="col-span-1 md:row-span-5 md:row-start-5">
          <MediumDestination />
        </div>
        <div className="col-span-1 md:row-span-3">
          <SmallDestination />
        </div>
        <div className="col-span-1 md:row-span-3">
          <SmallDestination />
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;
