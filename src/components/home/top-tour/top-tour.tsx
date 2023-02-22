import { ChevronRightIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useMobileDetector, useNavigation } from '@/hooks';
import { ICountryWCityCount } from '@/types/countries';

import NavigationController from '../navigation-controller';
import Heading from '../section-heading';
import SingleTopTour from './single-top-tour';

type TopTourProps = {
  featuredCountries: ICountryWCityCount[];
};

const options = {
  640: {
    slidesPerView: 1.75,
  },
  768: {
    slidesPerView: 2,
  },
  1024: {
    slidesPerView: 2.25,
  },
  1280: {
    slidesPerView: 2.5,
  },
  1536: {
    slidesPerView: 3,
    spaceBetween: 30,
  },
};

const TopTour = ({ featuredCountries }: TopTourProps) => {
  const { setSwiperRef, handleSwiperChange, handleCurrentStatus, status } =
    useNavigation();

  const isMobile = useMobileDetector();

  return (
    <section className='section-swiper relative'>
      <div className='flex items-center justify-between px-4 sm:px-0'>
        <Heading title='Top Tour' desc='keep calm & travel on' />
        <div className='flex flex-col '>
          <Link
            href={'/countries'}
            className='mb-2 flex self-end text-sm text-primary hover:text-primary-hover hover:underline'
          >
            See All <ChevronRightIcon width={15} />
          </Link>
          {!isMobile && (
            <NavigationController
              handleSwiperChange={handleSwiperChange}
              status={status}
            />
          )}
        </div>
      </div>
      <Swiper
        className='swiper-padding text-white'
        slidesPerView={1.5}
        spaceBetween={20}
        freeMode={true}
        modules={[FreeMode]}
        onBeforeInit={(swiper) => {
          setSwiperRef(swiper);
        }}
        onSlideChange={({ isBeginning, isEnd }) =>
          handleCurrentStatus({ isBeginning, isEnd })
        }
        breakpoints={options}
      >
        {featuredCountries.map((fCountry) => (
          <SwiperSlide key={fCountry._id}>
            <SingleTopTour country={fCountry} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TopTour;
