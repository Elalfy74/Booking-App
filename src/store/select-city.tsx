import create from 'zustand';

import { ICityWCountry } from '../types';

type SelectCityState = {
  selectedCity: ICityWCountry | null;
  setCity: (city: ICityWCountry) => void;
};

export const useSelectCity = create<SelectCityState>((set) => ({
  selectedCity: null,
  setCity: (city: ICityWCountry) => set(() => ({ selectedCity: city })),
}));
