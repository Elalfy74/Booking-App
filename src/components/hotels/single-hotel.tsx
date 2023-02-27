import Image from 'next/image';
import Link from 'next/link';
import { Rating } from 'react-simple-star-rating';

import { Button } from '@/components/ui';
import { IHotelWCity } from '@/types/hotels';

const SingleHotel = ({ hotel }: { hotel: IHotelWCity }) => {
  hotel.features.length = 5;

  return (
    <div className='main-border flex w-full flex-col overflow-hidden rounded-2xl shadow-sm md:h-[400px] md:flex-row'>
      <div className='w-full lg:w-2/5'>
        <Link href={`/hotels/${hotel.slug}`}>
          <Image
            width={800}
            height={800}
            alt='hotel'
            src={hotel.photos[0]}
            className='h-full w-full object-cover'
          />
        </Link>
      </div>

      <div className='flex w-full flex-col justify-between p-6 lg:w-3/5'>
        <div>
          <h2 className='capitalize'>
            <Link href={`/hotels/${hotel.slug}`}>{hotel.name}</Link>
          </h2>

          <Rating readonly initialValue={hotel.stars} size={18} />

          <div className='my-6 flex flex-col flex-wrap gap-x-6 gap-y-4 font-medium text-thirdBlack'>
            <p>{hotel.address}</p>
            <p>{hotel.distanceToDTInKm}km to DownTown</p>
          </div>
        </div>
        <div className='flex flex-col justify-between md:flex-row md:items-end'>
          <div className='text-gray-500'>
            {hotel.features.map((feature) => (
              <p key={feature}>{feature}</p>
            ))}
          </div>
          <div className='flex flex-col md:items-center'>
            <div className='mb-4 flex items-end gap-2 md:mx-auto'>
              <h3>${hotel.cheapestPrice}</h3>{' '}
              <span className='text-mainGray'>/night</span>
            </div>
            <Link href={`/hotels/${hotel.slug}`}>
              <Button className='h-fit w-fit rounded-full py-3 px-9 text-base'>
                Book Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleHotel;
