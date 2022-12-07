import { Button, Card } from "@/components/ui";

import PricePerNight from "../PricePerNight";

const SingleRoom = () => {
  return (
    <Card className="flex flex-col justify-between px-5 py-6 sm:flex-row">
      <div>
        <h3 className="mt-0 mb-4 text-xl font-medium sm:text-2xl md:text-3xl">
          Economy Room, Annex Building
        </h3>
        <h5>Offer coditions:</h5>
        <ul>
          {offersConditions.map((cond) => (
            <li key={cond}>{cond}</li>
          ))}
        </ul>
      </div>
      <div className="flex items-end justify-between mt-5 sm:mt-0 sm:flex-col ">
        <div className="flex flex-col order-2 sm:order-1 sm:items-end">
          <PricePerNight price={184} />
          <span className="text-lg text-orange-400">Save $4</span>
        </div>
        <Button className="h-fit sm:order-2">Select</Button>
      </div>
    </Card>
  );
};

const offersConditions = [
  "Non-refundable",
  "Free Wifi",
  "Breakfast for 2 people",
];

export default SingleRoom;
