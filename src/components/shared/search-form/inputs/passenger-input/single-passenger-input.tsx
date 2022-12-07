import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/24/outline";

import { PassengersState } from "@/types/types";

type SinglePassengerInputProps = {
  passengerTitle: keyof PassengersState;
  passengerDesc: string;
  passenger: number;
  handlePassenger: (
    key: keyof PassengersState,
    operator: "plus" | "minus"
  ) => void;
};

const SinglePassengerInput = (props: SinglePassengerInputProps) => {
  const { passengerTitle, passenger, handlePassenger, passengerDesc } = props;

  return (
    <div className="flex items-center justify-between py-3">
      <div>
        <h4>{passengerTitle}</h4>
        <p className="text-sm text-mainGray">{passengerDesc}</p>
      </div>
      <div className="flex items-center">
        <button
          className="text-mainGray disabled:text-gray-300"
          disabled={passenger === 0}
          onClick={() => handlePassenger(passengerTitle, "minus")}
        >
          <MinusCircleIcon className="h-7 w-7" />
        </button>
        <span className="block w-6 text-center">{passenger}</span>
        <button
          className="text-mainGray disabled:text-gray-300"
          disabled={passenger === 8}
          onClick={() => handlePassenger(passengerTitle, "plus")}
        >
          <PlusCircleIcon className="h-7 w-7" />
        </button>
      </div>
    </div>
  );
};

export default SinglePassengerInput;
