import Image from "next/image";
import { Rating } from "react-simple-star-rating";

import { Button, Card } from "@/components/ui";
import { IHotel } from "@/types";

const SingleTrendCity = ({ hotel }: { hotel: IHotel }) => {
  return (
    <Card className="flex max-w-full gap-4 p-4 shadow-sm md:gap-10 md:p-6">
      <Image
        src={hotel.photos[0]}
        alt="hotel"
        className="w-1/2 rounded-xl object-cover lg:w-[160px]"
        width={160}
        height={200}
      />
      <div className="flex w-full flex-col justify-between overflow-hidden">
        <div>
          <h4 className="overflow-hidden text-ellipsis whitespace-nowrap text-lg font-semibold md:text-base">
            {hotel.name}
          </h4>
          <Rating
            size={20}
            className="mb-2"
            initialValue={hotel.stars}
            readonly
            iconsCount={hotel.stars}
          />
          <div>
            <span className="text-xl font-semibold">
              ${hotel.cheapestPrice.toFixed(2)}
            </span>
            <span className="text-mainGray">/night</span>
          </div>
        </div>
        <Button
          size="sm"
          className="mt-2 w-full self-end sm:w-3/5 md:self-auto"
        >
          Book now
        </Button>
      </div>
    </Card>
  );
};

export default SingleTrendCity;
