import { Button, Card } from '@/components/ui';
import { IRoom } from '@/types/hotels';

import PricePerNight from '../PricePerNight';

const SingleRoom = ({ room }: { room: IRoom }) => {
  const { maxPeople, currentPrice, beds } = room;
  return (
    <Card className='flex flex-col justify-between px-5 py-6 sm:flex-row'>
      <div>
        <h3 className='mt-0 mb-4 text-xl font-medium sm:text-2xl md:text-2xl'>
          {room.name}
        </h3>
        <p className='capitalize'>
          {maxPeople.adults > 0 && <span>{room.maxPeople.adults} adults</span>}
          {maxPeople.children > 0 && (
            <span> {room.maxPeople.children} children</span>
          )}
        </p>
        <p className='capitalize'>{beds}</p>
      </div>
      <div className='mt-5 flex items-end justify-between sm:mt-0 sm:flex-col '>
        <div className='order-2 flex flex-col sm:order-1 sm:items-end'>
          <PricePerNight price={currentPrice} />
          <span className='text-lg text-orange-400'>Save $4</span>
        </div>
        <Button className='h-fit sm:order-2'>Select</Button>
      </div>
    </Card>
  );
};

const offersConditions = [
  'Non-refundable',
  'Free Wifi',
  'Breakfast for 2 people',
];

export default SingleRoom;
