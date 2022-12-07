import create from "zustand";

import { passengerInitialState } from "@/data/data";
import { PassengersState } from "@/types/types";

type PassengersStateType = {
  passengers: PassengersState;
  handlePassenger: (
    key: keyof PassengersState,
    operator: "plus" | "minus"
  ) => void;
};

const usePassengers = create<PassengersStateType>((set, get) => ({
  passengers: passengerInitialState,
  handlePassenger: (key: keyof PassengersState, operator: "plus" | "minus") => {
    const passengerNumber = get().passengers[key];

    if (passengerNumber === 0 && operator === "minus") return;
    if (passengerNumber === 8 && operator === "plus") return;

    set((prevState) => ({
      passengers: {
        ...prevState.passengers,
        [key]: operator === "minus" ? passengerNumber - 1 : passengerNumber + 1,
      },
    }));
  },
}));

export default usePassengers;
