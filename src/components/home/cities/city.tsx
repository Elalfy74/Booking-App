import { capitalize } from "lodash";
import Image from "next/image";
import Link from "next/link";

import { ICityWCountry } from "@/types/cities";

type CityProps = {
  city: ICityWCountry;
};

const City = ({ city }: CityProps) => {
  return (
    <Link
      className="w-full"
      href={`/hotels?country=${city.country.slug}&city=${city.slug}&cityId=${city._id}`}
    >
      <div className="main-border center w-full flex-col overflow-hidden rounded-xl p-6 duration-main hover:border-white hover:bg-white hover:shadow-sm ">
        <Image
          width={120}
          height={120}
          src={city.photos[0]}
          alt="city img"
          placeholder="blur"
          blurDataURL="https://via.placeholder.com/80?text"
          className="h-20 w-20 rounded-xl object-cover"
        />
        <h3 className="max-w-full overflow-hidden text-ellipsis whitespace-nowrap text-sm capitalize">
          {city.name}, {city.country.name}
        </h3>
      </div>
    </Link>
  );
};

export default City;
