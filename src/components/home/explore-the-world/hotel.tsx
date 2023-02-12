import { BuildingOfficeIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

import { Card } from "@/components/ui";
import { IHotel } from "@/types/hotels";

const Hotel = ({ hotel }: { hotel: IHotel }) => {
  return (
    <Card className="main-border h-[350px] max-h-full w-full p-3 shadow-sm ">
      <Image
        width={300}
        height={190}
        src={hotel.photos[0]}
        alt="hotel photo"
        className="h-1/2 w-full rounded-xl object-cover"
      />
      <div className="mt-4">
        <div className="mb-2 flex gap-2">
          <StarIcon className="h-5 w-5 text-orange-400" />
          <span>{hotel.stars}</span>
        </div>
        <div className="mb-2 flex items-center justify-between overflow-hidden">
          <h4 className="mt-0 overflow-hidden text-ellipsis whitespace-nowrap text-lg font-semibold sm:text-base lg:text-lg">
            {hotel.name}
          </h4>
          <span className="ml-3 rounded-md bg-primary-300 px-2 py-1 text-sm font-semibold text-primary">
            ${hotel.cheapestPrice}
          </span>
        </div>
        <div className="text-sm font-thin text-mainGray">
          <p className="ml-1">{hotel.distanceToDTInKm} km to Town Center</p>
          <p className="mt-1 flex items-center gap-2">
            <MapPinIcon className="h-5 w-5" />
            {hotel.city.name}
          </p>
          <p className="mt-1 flex items-center gap-2">
            <BuildingOfficeIcon className="h-5 w-5" /> Rooms Categories:{" "}
            {hotel.rooms.length}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default Hotel;
