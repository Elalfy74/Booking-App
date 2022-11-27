/* eslint-disable @next/next/no-img-element */

import Button from "../../ui/button ";
import Card from "../../ui/Card";

const SingleTrendCity = () => {
  return (
    <Card className="flex max-w-full gap-4 p-4 shadow-sm md:gap-10 md:p-6">
      <img
        src="https://placeimg.com/160/180/arch"
        alt="city"
        className="rounded-xl"
      />
      <div className="flex flex-col justify-between">
        <div>
          <h3>City</h3>
          <p className="mb-2">Rating</p>
          <span className="text-2xl font-semibold">$250.00</span>
          <span className="text-mainGray">/night</span>
        </div>
        <Button size="sm">Book now</Button>
      </div>
    </Card>
  );
};

export default SingleTrendCity;
