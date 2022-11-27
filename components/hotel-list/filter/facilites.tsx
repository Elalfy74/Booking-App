import CheckBoxList from "../../ui/checkbox-list";
import FilterHeading from "./filter-heading";

const Facilites = () => {
  return (
    <div className="mt-6">
      <FilterHeading label="Facilites" />
      <CheckBoxList />
      <a className="block mt-3 font-semibold text-primary hover:text-primary-hover hover:underline">
        See More
      </a>
    </div>
  );
};

export default Facilites;
