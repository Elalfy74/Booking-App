/* eslint-disable @next/next/no-img-element */
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

// import required modules
import { FreeMode, Grid, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import useMobileDetector from '@/hooks/use-mobile-detector';

const Gallery = ({ photos }: { photos?: string[] }) => {
  let data = photos?.slice(0, 4);

  const isMobile = useMobileDetector();

  if (isMobile) {
    data = photos;
  }
  if (!data) return <></>;

  return (
    <div className='h-[400px] md:h-[600px]'>
      <Swiper
        className='grid-swiper'
        slidesPerView={1}
        spaceBetween={10}
        grid={{
          rows: 1,
        }}
        pagination={true}
        freeMode={true}
        breakpoints={{
          768: {
            slidesPerView: 2,
            grid: {
              rows: 3,
              fill: 'column',
            },
          },
        }}
        modules={[Grid, FreeMode, Pagination]}
      >
        <SwiperSlide className='h-full md:w-2/3'>
          <img
            alt='hotel-details'
            src={data[0]}
            className='h-full w-full rounded-2xl object-cover md:rounded-none md:rounded-l-2xl'
          />
        </SwiperSlide>
        <SwiperSlide className='grid-item'>
          <img
            alt='hotel-details'
            src={data[1]}
            className='h-full w-full rounded-2xl object-cover md:rounded-none md:rounded-tr-2xl'
          />
        </SwiperSlide>
        <SwiperSlide className='grid-item '>
          <img
            alt='hotel-details'
            src={data[2]}
            className='h-full w-full rounded-2xl object-cover md:rounded-none '
          />
        </SwiperSlide>
        <SwiperSlide className='grid-item'>
          <img
            alt='hotel-details'
            src={data[3]}
            className='h-full w-full rounded-2xl object-cover md:rounded-none md:rounded-br-2xl'
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Gallery;
