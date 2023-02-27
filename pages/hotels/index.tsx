import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useSwr from 'swr';

import { getCity, getHotels } from '@/apis';
import { Filter, HotelList, MiniFilterForm } from '@/components/hotels';
import { Breadcrumbs, ContactBanner, SearchForm } from '@/components/shared';
import useMobileDetector from '@/hooks/use-mobile-detector';
import { useSelectCity } from '@/store';
import { IHotelWCity } from '@/types/hotels';

const Hotels: NextPage = () => {
  const isMobile = useMobileDetector();
  const setCity = useSelectCity((state) => state.setCity);

  const router = useRouter();
  const city = router.query['city']?.toString() || '';
  const filter = city ? { city } : {};

  const { data: cityRes } = useSwr(`/cities/${city}`, () =>
    getCity(city, true)
  );

  const { data: hotels } = useSwr(`/hotels/${city}`, () =>
    getHotels<IHotelWCity>({
      filter,
      withCity: true,
    })
  );

  useEffect(() => {
    if (cityRes) {
      setCity(cityRes.data);
    }
  }, [cityRes, setCity]);

  return (
    <div className='mt-10 px-4 sm:px-8 lg:px-16 xl:px-20 2xl:px-36'>
      <Breadcrumbs />
      <div className='my-10'>
        {isMobile ? <MiniFilterForm /> : <SearchForm />}
      </div>
      <div className='flex'>
        <div className='hidden lg:mr-20 lg:block lg:w-1/4'>
          <Filter />
        </div>
        <div className='w-full lg:w-3/4'>
          <HotelList hotels={hotels?.data} />
        </div>
      </div>
      <ContactBanner />
    </div>
  );
};

export default Hotels;
