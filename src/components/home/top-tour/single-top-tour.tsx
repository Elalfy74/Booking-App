import Image from "next/image";

import { Card } from "@/components/ui";
import { ICountry } from "@/types/countries";

type SingleTopTourProps = {
  country: ICountry;
};

const SingleTopTour = ({ country }: SingleTopTourProps) => {
  return (
    <Card className="overlay relative h-full w-full overflow-hidden">
      <Image
        width={400}
        height={400}
        src={country.photo}
        alt="country img"
        className="h-full object-cover "
      />
      <p className="absolute top-6 left-6 rounded-full bg-black bg-opacity-30 px-4 py-3 font-semibold">
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
