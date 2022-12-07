import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/solid";
import { Dispatch, Fragment, SetStateAction, useState } from "react";

import { cities } from "@/data/data";
import { CityType } from "@/types/types";

import OpenButton from "../../open-button";

type CityInputProps = {
  placeholder: string;
  selected: CityType | null;
  handleSelect: Dispatch<SetStateAction<CityType | null>>;
};

export default function CityInput(props: CityInputProps) {
  const { placeholder, selected, handleSelect } = props;

  const [query, setQuery] = useState("");

  const filtereCities =
    query === ""
      ? cities
      : cities.filter((city) =>
          city.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <Combobox value={selected} onChange={handleSelect}>
      <div className="relative w-full">
        <div className="search-input relative w-full py-4.5 text-sm">
          <Combobox.Input
            className="w-full pr-10 bg-transparent text-secondBlack"
            displayValue={(city: CityType | null) => city?.name || ""}
            placeholder={placeholder}
            onChange={(event) => setQuery(event.target.value)}
          />
          <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
            <OpenButton as="span" />
          </Combobox.Button>
        </div>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setQuery("")}
        >
          <Combobox.Options className="absolute z-10 w-full py-1 mt-1 overflow-auto text-sm bg-white shadow-lg max-h-60 rounded-xl ring-1 ring-black ring-opacity-5 focus:outline-none">
            {filtereCities.length === 0 && query !== "" ? (
              <div className="relative px-4 py-2 text-gray-700 cursor-default select-none">
                Nothing found.
              </div>
            ) : (
              filtereCities.map((city) => (
                <Combobox.Option
                  key={city.id}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 text-gray-500 ${
                      active ? "bg-zinc-200 " : ""
                    }`
                  }
                  value={city}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {city.name}
                      </span>
                      {selected ? (
                        <span
                          className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                            active ? "bg-zinc-200" : "text-teal-600"
                          }`}
                        >
                          <CheckIcon className="w-5 h-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </Transition>
      </div>
    </Combobox>
  );
}
