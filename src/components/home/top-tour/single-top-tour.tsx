import Image from 'next/image';
import Link from 'next/link';

import { Card } from '@/components/ui';
import { ICityWCountry } from '@/types/cities';
import { ICountryWCityCount } from '@/types/countries';

type SingleTopTourProps = {
  entity: ICountryWCityCount | ICityWCountry;
};

const SingleTopTour = ({ entity }: SingleTopTourProps) => {
  const isCity = 'country' in entity;

  const photo = isCity ? entity.photos[0] : entity.photo;
  const badge = isCity ? entity.country.name : entity.name;

  const href = isCity
    ? `/hotels?country=${entity.country.name}&city=${entity._id}`
    : `/countries/${entity._id}`;

  return (
    <Link href={href} className='w-full text-white '>
      <Card className='overlay group relative h-full w-full overflow-hidden before:z-[2]'>
        <Image
          width={400}
          height={400}
          src={photo}
          alt='entity img'
          className='relative aspect-square h-auto w-full object-cover duration-long group-hover:scale-110'
        />
        <p className='absolute top-4 left-4 rounded-full bg-black bg-opacity-30 px-3 py-2 font-semibold capitalize md:top-6 md:left-6 md:px-4 md:py-3'>
          {badge}
        </p>
        <div className='absolute bottom-6 left-6 z-[3]'>
          <h3 className='capitalize'>{entity.name}</h3>
          {!isCity && <p>{entity.cityCount} Popular Cities</p>}
        </div>
      </Card>
    </Link>
  );
};

export default SingleTopTour;
