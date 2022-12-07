/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui";

const SingleHotel = () => {
  return (
    <div className="main-border flex w-full flex-col overflow-hidden rounded-2xl shadow-sm md:h-[400px] md:flex-row">
      <div className="w-full lg:w-2/5">
        <img
          alt="hotel"
          src="https://placeimg.com/450/400/arch"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="flex flex-col justify-between w-full p-6 lg:w-3/5">
        <div>
          <h2>Backpack</h2>

          <p className="text-sm text-mainGray">Rating + location</p>

          <div className="flex flex-wrap my-6 font-medium gap-x-6 gap-y-4 text-thirdBlack">
            <p>Location Location Location</p>
            <p>Date Date Date</p>
            <p>Fight Fight Fight</p>
          </div>
        </div>
        <div className="flex flex-col justify-between md:flex-row md:items-end">
          <div className="text-gray-500">
            <p> Service !</p>
            <p> Service !</p>
            <p> Service !</p>
            <p> Service !</p>
            <p> Service !</p>
          </div>
          <div className="flex flex-col md:items-center">
            <div className="flex items-end gap-2 mb-4 md:mx-auto">
              <h3>$320</h3> <span className="text-mainGray">For Two</span>
            </div>
            <Button className="py-3 text-base rounded-full h-fit w-fit px-9">
              Book Nows
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleHotel;
