import Heading from "../section-heading";
import SingleTrendCity from "./single-trend-city";

const TrendingCites = () => {
  const array = new Array(6).fill("");

  return (
    <section className=" bg-[#F5F5F5] py-section">
      <div className="container">
        <Heading
          title="Trending Cites"
          desc="The most searched for cities on TripGuide"
        />
        <div className="grid grid-cols-1 gap-8 md:gap-10 lg:grid-cols-2">
          {array.map((item, i) => (
            <SingleTrendCity key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingCites;
