import { CheckboxList } from "@/components/ui";
import { optionsList } from "@/data/data";

import FilterHeading from "./filter-heading";

const PropertyType = () => {
  return (
    <div className="mt-6">
      <FilterHeading label="Property Type" />
      <CheckboxList items={optionsList} />
      <a className="block mt-3 font-semibold text-primary hover:text-primary-hover hover:underline">
        See More
      </a>
    </div>
  );
};

export default PropertyType;
