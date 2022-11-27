import Button from "../../../ui/button ";
import Card from "../../../ui/Card";
import CityInput from "./CityInput";
import DateRangeInput from "./DateRangeInput";
import PassengerDemo from "./PassengersInput";

const HeroForm = () => {
  return (
    <div className="container">
      <Card className="flex flex-col flex-wrap justify-between gap-10 p-6 mx-auto md:px-16 md:py-10 lg:flex-row">
        <div className="flex flex-col flex-wrap flex-1 gap-5 lg:flex-row">
          <div className="flex-1">
            <CityInput placeholder="Where are you from?" />
          </div>
          <div className="flex-1">
            <DateRangeInput />
          </div>
          <div className="flex-1">
            <PassengerDemo />
          </div>
        </div>
        <Button className="font-large h-[58px] px-7 lg:self-end">Search</Button>
      </Card>
    </div>
  );
};

export default HeroForm;
