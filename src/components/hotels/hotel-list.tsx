import { IHotelWCity } from '@/types';

import SingleHotel from './single-hotel';

const HotelList = ({ hotels }: { hotels?: IHotelWCity[] }) => {
  return (
    <div className='mt-10 flex flex-col gap-20'>
      {hotels?.map((hotel) => (
        <SingleHotel key={hotel._id} hotel={hotel} />
      ))}
    </div>
  );
};

export default HotelList;
