import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/24/outline";

const SinglePassengerInput = () => {
  return (
    <div className="flex items-center justify-between py-3">
      <div>
        <h4>Adults</h4>
        <p className="text-sm text-mainGray">Age 13 or above</p>
      </div>
      <div className="flex items-center">
        <button className="text-mainGray">
          <MinusCircleIcon className="h-7 w-7" />
        </button>
        <span className="mx-2">0</span>
        <button className="text-mainGray">
          <PlusCircleIcon className="h-7 w-7" />
        </button>
      </div>
    </div>
  );
};

export default SinglePassengerInput;
