import Card from "../../../ui/Card";
import CustomPopover from "./custom-popover";
import SinglePassengerInput from "./single-passenger-input";

const PassengersInput = () => {
  return (
    <CustomPopover label="Passengers" hasValue={false}>
      <Card className="px-10 py-6 w-80">
        <SinglePassengerInput />
        <SinglePassengerInput />
        <SinglePassengerInput />
      </Card>
    </CustomPopover>
  );
};
export default PassengersInput;
