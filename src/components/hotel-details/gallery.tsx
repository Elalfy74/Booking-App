import Image from 'next/image';
import { Grid, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useMobileDetector } from '@/hooks';

const Gallery = ({ photos }: { photos: string[] }) => {
  let data = photos.slice(0, 4);

  const isMobile = useMobileDetector();

  if (isMobile) {
    data = photos;
  }

  return (
    <div className='h-[400px] md:h-[600px]'>
      <Swiper
        className='gallery-swiper'
        slidesPerView={1}
        spaceBetween={10}
        grid={{
          rows: 1,
        }}
        pagination={true}
        breakpoints={{
          768: {
            slidesPerView: 2,
            grid: {
              rows: 3,
              fill: 'column',
            },
          },
        }}
        modules={[Grid, Pagination]}
      >
        {data.map((img) => (
          <SwiperSlide className='gallery-slide' key={img}>
            <Image width={1200} height={1000} alt='hotel-details' src={img} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Gallery;
