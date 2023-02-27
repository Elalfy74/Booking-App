import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

import _ from 'lodash';
import { DateRange } from 'react-date-range';

import { addYears, currentDate, formatDate } from '@/helpers/date';
import useMobileDetector from '@/hooks/use-mobile-detector';
import { useDateRange } from '@/store';

import CustomPopover from '../../input-popover';

const DateRangeInput = () => {
  const { dates: datesRange, handleDateSelect } = useDateRange();

  const isMobile = useMobileDetector();

  const direction = isMobile ? 'vertical' : 'horizontal';

  const label = `${formatDate(datesRange[0].startDate!)} / ${formatDate(
    datesRange[0].endDate!
  )}`;

  return (
    <CustomPopover label={label}>
      <DateRange
        minDate={currentDate}
        maxDate={addYears(currentDate)}
        ranges={datesRange}
        months={2}
        direction={direction}
        onChange={handleDateSelect}
      />
    </CustomPopover>
  );
};

export default DateRangeInput;
