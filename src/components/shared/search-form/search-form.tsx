import { useState } from 'react';

import { Button, Card } from '@/components/ui';
import useDateRange from '@/store/date-range';
import usePassengers from '@/store/passengers';
import { CityType } from '@/types/types';

import { CityInput, DateRangeInput, PassengersInput } from './inputs';

const SearchForm = () => {
  const dates = useDateRange((state) => state.dates);
  const passengers = usePassengers((state) => state.passengers);

  const [selectedCity, setSelectedCity] = useState<CityType | null>(null);

  const handelSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log({
      selectedCity,
      dates,
      passengers,
    });
  };

  return (
    <form className='container' onSubmit={handelSubmit}>
      <Card className='mx-auto flex flex-col flex-wrap justify-between gap-5 p-6 md:gap-10 md:px-16 md:py-10 lg:flex-row'>
        <div className='flex flex-1 flex-col flex-wrap gap-5 lg:flex-row'>
          <div className='flex-1 lg:w-1/3 '>
            <CityInput selected={selectedCity} handleSelect={setSelectedCity} />
          </div>
          <div className='flex-1 lg:w-1/3'>
            <DateRangeInput />
          </div>
          <div className='flex-1 lg:w-1/3'>
            <PassengersInput />
          </div>
        </div>
        <Button className='font-large h-[58px] px-7' type='submit'>
          Search
        </Button>
      </Card>
    </form>
  );
};

export default SearchForm;
