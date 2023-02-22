import { Combobox, Transition } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/24/solid';
import { Dispatch, Fragment, SetStateAction, useEffect, useState } from 'react';

import { useCitiesSearch } from '@/hooks/index';
import { CityType } from '@/types/types';

import OpenButton from '../../open-button';

type CityInputProps = {
  selected: CityType | null;
  handleSelect: Dispatch<SetStateAction<CityType | null>>;
};

export default function CityInput(props: CityInputProps) {
  const { selected, handleSelect } = props;

  // First Query is used to display instance value in the search box
  // Second One is the one sent to the api, which sent when the user stop typing
  const [query, setQuery] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const { cities } = useCitiesSearch(searchQuery);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchQuery(query);
    }, 1000);

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <Combobox value={selected} onChange={handleSelect}>
      <div className='relative w-full'>
        <div className='search-input relative w-full py-4.5 text-sm'>
          <Combobox.Input
            className='w-full bg-transparent pr-10 capitalize text-secondBlack'
            displayValue={(city: CityType | null) => city?.name || ''}
            placeholder='Where are you from?'
            onChange={(event) => setQuery(event.target.value)}
          />
          <Combobox.Button className='absolute inset-y-0 right-0 flex items-center pr-2'>
            <OpenButton as='span' />
          </Combobox.Button>
        </div>
        <Transition
          as={Fragment}
          leave='transition ease-in duration-100'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
          afterLeave={() => setQuery('')}
        >
          <Combobox.Options className='absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-xl bg-white py-1 text-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
            {cities?.length === 0 && query !== '' ? (
              <div className='relative cursor-default select-none px-4 py-2 text-gray-700'>
                Nothing found.
              </div>
            ) : (
              cities?.map((city) => (
                <Combobox.Option
                  key={city._id}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 text-gray-500 ${
                      active ? 'bg-zinc-200 ' : ''
                    }`
                  }
                  value={city}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`block truncate capitalize ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {city.name}, {city.country.name}
                      </span>
                      {selected ? (
                        <span
                          className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                            active ? 'bg-zinc-200' : 'text-teal-600'
                          }`}
                        >
                          <CheckIcon className='h-5 w-5' aria-hidden='true' />
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
