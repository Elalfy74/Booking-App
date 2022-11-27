import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

import moment from "moment";
import { useState } from "react";
import { DateRange, Range, RangeKeyDict } from "react-date-range";

import mobileDetector from "../../../../helpers/mobile-detector";
import CustomPopover from "./custom-popover";

const DateRangeInput = () => {
  const currentDate = new Date();

  //IIF the return max date which is current date + 2 years
  const maxDate = (function () {
    let newDate = new Date(currentDate);
    newDate.setFullYear(newDate.getFullYear() + 2);
    return newDate;
  })();

  const initialDate = {
    startDate: currentDate,
    endDate: currentDate,
    key: "selection",
  };

  const [dates, setDates] = useState<Range[]>([initialDate]);

  const direction = mobileDetector() ? "vertical" : "horizontal";

  const handleDateSelect = (rangesByKey: RangeKeyDict) => {
    setDates([rangesByKey.selection]);
  };

  function formatDate(date: Date) {
    return moment(date).format("MMM Do YY");
  }

  let label;
  let hasValue;

  if (dates[0].endDate === initialDate.endDate) {
    label = "Check in/Check out";
    hasValue = false;
  } else {
    label = `${formatDate(dates[0].startDate!)} / ${formatDate(
      dates[0].endDate!
    )}`;
    hasValue = true;
  }

  return (
    <CustomPopover label={label} hasValue={hasValue}>
      <DateRange
        className="rounded-lg shadow-md"
        minDate={currentDate}
        maxDate={maxDate}
        ranges={dates}
        months={2}
        direction={direction}
        onChange={handleDateSelect}
      />
    </CustomPopover>
  );
};

export default DateRangeInput;
