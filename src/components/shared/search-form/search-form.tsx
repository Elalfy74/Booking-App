import { useRouter } from 'next/router';

import { Button, Card } from '@/components/ui';
import { useSelectCity } from '@/store';

import { CityInput, DateRangeInput, PassengersInput } from './inputs';

const SearchForm = () => {
  const router = useRouter();

  const selectedCity = useSelectCity((state) => state.selectedCity);

  const handelSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const path = selectedCity
      ? `/hotels?country=${selectedCity.country.slug}&city=${selectedCity._id}`
      : `/hotels`;

    router.push(path);
  };

  return (
    <form className='container' onSubmit={handelSubmit}>
      <Card className='mx-auto flex flex-col flex-wrap justify-between gap-5 p-6 md:gap-10 md:px-16 md:py-10 lg:flex-row'>
        <div className='flex flex-1 flex-col flex-wrap gap-5 lg:flex-row'>
          <div className='flex-1 lg:w-1/3 '>
            <CityInput />
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
