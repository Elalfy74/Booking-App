import { PassengersState } from "@/types/types";

export const optionsList = [
  "Hotels",
  "Breakfast and Dinner",
  "Free Cancellation",
  "No preypayment",
];

export const cities = [
  { id: 1, name: "Dubai" },
  { id: 2, name: "Cairo" },
  { id: 3, name: "Doha" },
  { id: 4, name: "Los Angelos" },
  { id: 5, name: "London" },
  { id: 6, name: "Paris" },
];

export const passengerInitialState = {
  Adults: 0,
  Children: 0,
  Infants: 0,
};

export const arrOfPassengers: {
  title: keyof PassengersState;
  desc: string;
}[] = [
  {
    title: "Adults",
    desc: "Ages 13 or above",
  },
  { title: "Children", desc: "Ages 2-12" },
  { title: "Infants", desc: "Under 2" },
];
