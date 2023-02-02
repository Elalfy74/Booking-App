import Image from "next/image";

import { ICityWCountry } from "@/types/cities";

type CityProps = {
  city: ICityWCountry;
};

const City = ({ city }: CityProps) => {
  return (
    <div className="w-full p-6 main-border rounded-xl duration-main hover:border-white hover:bg-white hover:shadow-sm ">
      <Image
        width={80}
        height={80}
        src={city.photos[0]}
        alt="city img"
        placeholder="blur"
        blurDataURL="https://via.placeholder.com/80?text"
        className="object-cover w-20 h-20 rounded-xl"
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
