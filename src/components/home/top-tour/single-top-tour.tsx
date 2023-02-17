import Image from "next/image";
import Link from "next/link";

import { Card } from "@/components/ui";
import { ICountryWCityCount } from "@/types/countries";

type SingleTopTourProps = {
  country: ICountryWCityCount;
};

const SingleTopTour = ({ country }: SingleTopTourProps) => {
  return (
    <Link href={`/countries/${country.slug}`}>
      <Card className="overlay relative h-full w-full overflow-hidden">
        <Image
          width={400}
          height={400}
          src={country.photo}
          alt="country img"
          className="aspect-square h-auto w-full object-cover"
        />
        <p className="absolute top-4 left-4 rounded-full bg-black bg-opacity-30 px-3 py-2 font-semibold capitalize md:top-6 md:left-6 md:px-4 md:py-3">
          {country.name}
        </p>
        <div className="absolute bottom-6 left-6">
          <h3 className="capitalize">{country.name}</h3>
          <p>{country.cityCount} Popular Cities</p>
        </div>
      </Card>
    </Link>
  );
};

export default SingleTopTour;
