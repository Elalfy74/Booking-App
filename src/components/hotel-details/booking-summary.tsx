import FilterHeading from "@/components/hotels/filter/filter-heading";
import {
  DateRangeInput,
  PassengersInput,
} from "@/components/shared/search-form/inputs";
import { Button, CheckboxList } from "@/components/ui";
import { optionsList } from "@/data/data";

import PricePerNight from "./PricePerNight";

function PriceSummary() {
  return (
    <div className="mt-5">
      <h4>Price</h4>
      <ul className="p-5 bg-gray-200 rounded-xl">
        {new Array(4).fill("").map((item, i) => (
          <li
            key={i}
            className="flex items-center justify-between mb-4 capitalize "
          >
            <span>1 nights</span>
            <span>$500</span>
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-between my-5">
        <span>Total Payments</span>
        <span>$300</span>
      </div>
      <Button fullWidth className="py-4">
        Book Now
      </Button>
    </div>
  );
}

const BookingSummary = () => {
  return (
    <div className="w-full px-5 py-6 bg-white shadow-sm rounded-xl xl:px-10">
      {/* Heading */}
      <div className="flex items-center justify-between mb-5">
        <PricePerNight price={148} originalPrice={155} />
        <p className="p-2 text-sm text-white uppercase rounded-full bg-primary">
          20% off
        </p>
      </div>
      {/*Check in checkout */}
      <DateRangeInput />
      <div className="my-5"></div>
      <PassengersInput />
      <div className="mt-5">
        <FilterHeading label="Extra Features" />
        <CheckboxList items={optionsList} />
      </div>
      <PriceSummary />
    </div>
  );
};

export default BookingSummary;
