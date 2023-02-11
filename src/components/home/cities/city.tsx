import Image from "next/image";

import { ICityWCountry } from "@/types/cities";

type CityProps = {
  city: ICityWCountry;
};

const City = ({ city }: CityProps) => {
  return (
    <div className="main-border center w-full flex-col rounded-xl p-6 duration-main hover:border-white hover:bg-white hover:shadow-sm sm:block">
      <Image
        width={120}
        height={120}
        src={city.photos[0]}
        alt="city img"
        placeholder="blur"
        blurDataURL="https://via.placeholder.com/80?text"
        className="h-20 w-20 rounded-xl object-cover"
      />
      <h3 className="text-sm ">
        {city.name}, {city.country.name}
      </h3>
      {/* <p className="text-xs text-mainGray">
        <span className="mr-1">86</span>Destinations
      </p> */}
    </div>
  );
};

export default City;
