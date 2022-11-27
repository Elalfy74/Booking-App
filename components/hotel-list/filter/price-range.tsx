import * as SliderPrimitive from "@radix-ui/react-slider";

import FilterHeading from "./filter-heading";

const PriceRange = () => {
  return (
    <div>
      <FilterHeading label="Price Range" />
      <Slider />
    </div>
  );
};

export default PriceRange;

const Slider = () => {
  return (
    <SliderPrimitive.Root
      defaultValue={[50]}
      max={100}
      step={1}
      aria-label="value"
      className="relative flex items-center w-64 h-5 touch-none"
    >
      <SliderPrimitive.Track className="relative h-1 w-full grow rounded-full bg-[#d9dadb] ">
        <SliderPrimitive.Range className="absolute h-full rounded-full bg-primary " />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb className="block w-5 h-5 border-4 border-white rounded-full shadow-md bg-primary focus:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-opacity-75" />
    </SliderPrimitive.Root>
  );
};
