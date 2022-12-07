import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

import _ from "lodash";
import { DateRange } from "react-date-range";

import { currentDate, formatDate, getMaxDate } from "@/helpers/date";
import useMobileDetector from "@/hooks/useMobileDetector";
import useDateRange from "@/store/date-range";

import CustomPopover from "../../input-popover";

const DateRangeInput = () => {
  const { dates: datesRange, handleDateSelect } = useDateRange();

  const isMobile = useMobileDetector();

  const direction = isMobile ? "vertical" : "horizontal";

  let label = "Check in/Check out";
  let hasValue = false;

  if (!_.isEqual(datesRange[0].endDate, currentDate)) {
    label = `${formatDate(datesRange[0].startDate!)} / ${formatDate(
      datesRange[0].endDate!
    )}`;
    hasValue = true;
  }

  return (
    <CustomPopover label={label} hasValue={hasValue}>
      <DateRange
        className="rounded-lg shadow-md"
        minDate={currentDate}
        maxDate={getMaxDate(currentDate)}
        ranges={datesRange}
        months={2}
        direction={direction}
        onChange={handleDateSelect}
      />
    </CustomPopover>
  );
};

export default DateRangeInput;
