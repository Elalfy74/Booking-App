import { Range, RangeKeyDict } from 'react-date-range';
import create from 'zustand';

import { initialDate } from '@/helpers/date';

type DateRangeState = {
  dates: Range[];
  handleDateSelect: (rangesByKey: RangeKeyDict) => void;
};

const useDateRange = create<DateRangeState>((set) => ({
  dates: [initialDate],
  handleDateSelect: (rangesByKey: RangeKeyDict) => {
    return set(() => ({ dates: [rangesByKey.selection] }));
  },
}));

export default useDateRange;
