import _ from "lodash";

import { Card } from "@/components/ui";
import { arrOfPassengers, passengerInitialState } from "@/data/data";
import usePassengers from "@/store/passengers";

import CustomPopover from "../../input-popover";
import SinglePassengerInput from "./single-passenger-input";

const PassengersInput = () => {
  const { passengers, handlePassenger } = usePassengers();

  let label = "Passengers";
  let hasValue = false;

  if (!_.isEqual(passengers, passengerInitialState)) {
    label = `Adults ${passengers["Adults"]} / Children ${passengers["Children"]} / Infants ${passengers["Infants"]}`;
    hasValue = true;
  }

  return (
    <CustomPopover label={label} hasValue={hasValue}>
      <Card className="px-10 py-6 w-80">
        {arrOfPassengers.map((item, i) => (
          <SinglePassengerInput
            key={i}
            passengerTitle={item.title}
            passengerDesc={item.desc}
            handlePassenger={handlePassenger}
            passenger={passengers[item.title]}
          />
        ))}
      </Card>
    </CustomPopover>
  );
};
export default PassengersInput;
