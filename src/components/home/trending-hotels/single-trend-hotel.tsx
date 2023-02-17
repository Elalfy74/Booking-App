import Image from 'next/image';
import Link from 'next/link';
import { Rating } from 'react-simple-star-rating';

import { Button, Card } from '@/components/ui';
import { IHotel } from '@/types';

const SingleTrendHotel = ({ hotel }: { hotel: IHotel }) => {
  return (
    <Card className='flex max-w-full gap-4 p-4 shadow-sm md:gap-10 md:p-6'>
      <Link
        href={`/hotels/${hotel.slug}`}
        className='lg:min-w-[160px] lg:max-w-[160px]'
      >
        <Image
          src={hotel.photos[0]}
          alt='hotel'
          className='aspect-[256/205] rounded-xl object-cover'
          width={512}
          height={410}
        />
      </Link>
      <div className='flex w-full flex-col justify-between overflow-hidden'>
        <div className='flex flex-col gap-2 sm:gap-4 md:mt-6 lg:mt-0 lg:gap-2'>
          <Link href={`/hotels/${hotel.slug}`}>
            <h4 className='overflow-hidden text-ellipsis whitespace-nowrap text-sm font-semibold capitalize sm:text-base '>
              {hotel.name}
            </h4>
          </Link>
          <Rating
            size={20}
            initialValue={hotel.stars}
            readonly
            iconsCount={hotel.stars}
          />
          <div>
            <span className='text-lg font-semibold md:text-xl'>
              ${hotel.cheapestPrice.toFixed(2)}
            </span>
            <span className='text-mainGray'>/night</span>
          </div>
        </div>
        <Link href={`/hotels/${hotel.slug}`} className='mt-2 w-full '>
          <Button as='span' size='sm' className='w-full text-center sm:w-3/5'>
            Book now
          </Button>
        </Link>
      </div>
    </Card>
  );
};

export default SingleTrendHotel;
