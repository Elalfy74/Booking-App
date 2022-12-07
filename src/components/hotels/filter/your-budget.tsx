import { CheckboxList } from "@/components/ui";
import { optionsList } from "@/data/data";

import FilterHeading from "./filter-heading";

const YourBudget = () => {
  return (
    <div className="mt-6">
      <FilterHeading label="Your Budget" />
      <CheckboxList items={optionsList} />
    </div>
  );
};

export default YourBudget;
