import CheckBoxList from "../../ui/checkbox-list";
import FilterHeading from "./filter-heading";

const YourBudget = () => {
  return (
    <div className="mt-6">
      <FilterHeading label="Your Budget" />
      <CheckBoxList />
    </div>
  );
};

export default YourBudget;
