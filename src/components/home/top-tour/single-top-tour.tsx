import Image from "next/image";

import { Card } from "@/components/ui";
import { ICountry } from "@/types/countries";

type SingleTopTourProps = {
  country: ICountry;
};

const SingleTopTour = ({ country }: SingleTopTourProps) => {
  return (
    // <Card
    //   className="flex flex-col justify-between w-full h-full p-6 bg-center bg-cover overlay before:rounded-lg"
    //   style={{
    //     backgroundImage: `url(${country.photo})`,
    //   }}
    // >
    //   <p className="relative px-4 py-3 font-semibold bg-black rounded-full w-fit bg-opacity-30">
    //     {country.name}
    //   </p>
    //   <div className="relative">
    //     <h3 className="">{country.name}</h3>
    //     <p>10 Popular Places</p>
    //   </div>
    // </Card>
    <Card className="relative h-full overflow-hidden overlay ">
      <Image
        width={400}
        height={400}
        src={country.photo}
        alt="country img"
        blurDataURL="https://via.placeholder.com/400?text"
        className="object-cover h-full"
      />
      <p className="absolute px-4 py-3 font-semibold bg-black rounded-full top-6 left-6 bg-opacity-30">
        {country.name}
      </p>
      <div className="absolute bottom-6 left-6">
        <h3>{country.name}</h3>
        <p>10 Popular Cities</p>
      </div>
    </Card>
  );
};

export default SingleTopTour;
