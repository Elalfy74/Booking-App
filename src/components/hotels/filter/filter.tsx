import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

import Facilites from "./facilites";
import PopoularFilter from "./popular-filter";
import PriceRange from "./price-range";
import PropertyType from "./property-type";
import YourBudget from "./your-budget";

const Filter = () => {
  return (
    <>
      <div>
        <h4 className="mb-2 text-lg font-medium">
          Search location or property
        </h4>
        <div className="input main-border flex w-[90%] items-center justify-between gap-2 bg-white">
          <input
            type="text"
            className="w-full bg-transparent"
            placeholder="Search location or property"
            autoFocus={false}
          />
          <MagnifyingGlassIcon className="w-5 h-5" />
        </div>
      </div>
      <PopoularFilter />
      <div className="my-4 border-b"></div>
      <PriceRange />
      <div className="my-4 border-b"></div>
      <PropertyType />
      <div className="my-4 border-b"></div>
      <YourBudget />
      <div className="my-4 border-b"></div>
      <Facilites />
    </>
  );
};

export default Filter;
