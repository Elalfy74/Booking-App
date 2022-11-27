/* eslint-disable @next/next/no-img-element */

import { BuildingOfficeIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";

import Card from "../../ui/Card";

const Hotel = () => {
  return (
    <Card className="w-full h-full p-3 shadow-sm main-border ">
      <img
        src="https://placeimg.com/400/225/arch"
        alt="Shoes"
        className="rounded-xl"
      />
      <div className="mt-4">
        <div className="flex gap-2 mb-2">
          <StarIcon className="w-5 h-5 text-orange-400" />
          <span>4.91</span>
        </div>
        <div className="flex items-center justify-between mb-2">
          <h3>Hotel!</h3>
          <span className="px-2 py-1 rounded-md bg-primary-300 text-primary">
            $210
          </span>
        </div>
        <div className="font-thin text-mainGray">
          <p>1.2 km to Town Center</p>
          <p className="flex items-center gap-2 mt-1">
            <MapPinIcon className="w-5 h-5" /> Turkey, Mamaris
          </p>
          <p className="flex items-center gap-2">
            <BuildingOfficeIcon className="w-5 h-5" /> Rooms available: 375
          </p>
        </div>
      </div>
    </Card>
  );
};

export default Hotel;
