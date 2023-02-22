import moment from 'moment';
import { Range } from 'react-date-range';

export const currentDate = new Date();

export const initialDate: Range = {
  startDate: currentDate,
  endDate: addDays(currentDate),
  key: 'selection',
};

export function addYears(currentDate: Date, years?: number) {
  let maxDate = new Date(currentDate);
  maxDate.setFullYear(maxDate.getFullYear() + (years || 2));

  return maxDate;
}

function addDays(date: Date, days = 1) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

export function formatDate(date: Date) {
  return moment(date).format('MMM Do YY');
}
