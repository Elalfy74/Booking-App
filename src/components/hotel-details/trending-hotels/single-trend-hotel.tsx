/* eslint-disable @next/next/no-img-element */
import { StarIcon } from "@heroicons/react/24/solid";
import React from "react";

import { AvatarsList, Card } from "@/components/ui";

const SignleTrendHotel = () => {
  return (
    <Card className="w-full h-full p-3 shadow-sm main-border ">
      <img
        src="https://placeimg.com/400/225/arch"
        alt="Shoes"
        className="rounded-xl"
      />

      <div className="mt-4">
        <h3 className="mb-2">Hotel!</h3>

        <div className="flex gap-2 mb-2">
          <StarIcon className="w-5 h-5 text-orange-400" />
          <span>4.91</span>
        </div>

        {/* <div className="font-thin text-mainGray">
          <p className="flex items-center gap-2 mt-1">
            <WifiIcon className="w-5 h-5" /> Free Wifi
          </p>
          <p className="flex items-center gap-2">
            <RocketLaunchIcon className="w-5 h-5" /> Rooms available: 375
          </p>
        </div> */}
        <div className="flex items-center justify-between">
          <AvatarsList />
          <p className="text-sm text-gray-400">50+ go on this hotel</p>
        </div>
      </div>
    </Card>
  );
};

export default SignleTrendHotel;
