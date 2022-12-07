import moment from "moment";
import { Range } from "react-date-range";

export const currentDate = new Date();

export const initialDate: Range = {
  startDate: currentDate,
  endDate: currentDate,
  key: "selection",
};

export function getMaxDate(currentDate: Date, years?: number) {
  let maxDate = new Date(currentDate);
  maxDate.setFullYear(maxDate.getFullYear() + (years || 2));

  return maxDate;
}

export function formatDate(date: Date) {
  return moment(date).format("MMM Do YY");
}
