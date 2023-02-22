import { PassengersState } from '@/types/types';

export const optionsList = [
  'Hotels',
  'Breakfast and Dinner',
  'Free Cancellation',
  'No prepayment',
];

export const passengerInitialState = {
  Adults: 1,
  Children: 0,
  Infants: 0,
};

export const arrOfPassengers: {
  title: keyof PassengersState;
  desc: string;
}[] = [
  {
    title: 'Adults',
    desc: 'Ages 13 or above',
  },
  { title: 'Children', desc: 'Ages 2-12' },
  { title: 'Infants', desc: 'Under 2' },
];
