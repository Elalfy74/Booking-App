import { NextPage } from 'next';

import { Filter, HotelList, MiniFilterForm } from '@/components/hotels';
import { Breadcrumbs, ContactBanner, SearchForm } from '@/components/shared';
import useMobileDetector from '@/hooks/use-mobile-detector';
import { Footer } from '@/layouts';

const Hotels: NextPage = () => {
  const isMobile = useMobileDetector();

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
          <HotelList />
        </div>
      </div>
      <ContactBanner />
      <Footer />
    </div>
  );
};

export default Hotels;
