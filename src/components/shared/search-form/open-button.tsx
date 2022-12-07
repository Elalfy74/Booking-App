import { ChevronUpDownIcon } from "@heroicons/react/24/solid";

const OpenButton = ({ as }: { as?: "span" }) => {
  if (as === "span") {
    return (
      <span className="absolute inset-y-0 right-0 flex items-center pr-2 ">
        <ChevronUpDownIcon
          className="w-5 h-5 text-gray-400"
          aria-hidden="true"
        />
      </span>
    );
  }
  return (
    <button className="absolute inset-y-0 right-0 flex items-center pr-2 ">
      <ChevronUpDownIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
    </button>
  );
};

export default OpenButton;
