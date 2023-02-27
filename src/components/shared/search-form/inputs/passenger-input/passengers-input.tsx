import _ from 'lodash';

import { arrOfPassengers } from '@/data/data';
import { usePassengers } from '@/store';

import CustomPopover from '../../input-popover';
import SinglePassengerInput from './single-passenger-input';

const PassengersInput = () => {
  const { passengers, handlePassenger } = usePassengers();

  const label = `Adults ${passengers['Adults']} / Children ${passengers['Children']} / Infants ${passengers['Infants']}`;

  return (
    <CustomPopover label={label}>
      <div className='w-80 px-10 py-6'>
        {arrOfPassengers.map((item, i) => (
          <SinglePassengerInput
            key={i}
            passengerTitle={item.title}
            passengerDesc={item.desc}
            handlePassenger={handlePassenger}
            passenger={passengers[item.title]}
          />
        ))}
      </div>
    </CustomPopover>
  );
};
export default PassengersInput;
