import Image from "next/image";

import { Card } from "@/components/ui";

const Destination = ({ img, name }: { img: string; name: string }) => {
  return (
    <Card className="overlay relative h-full overflow-hidden">
      <Image
        width={900}
        height={250}
        src={img}
        alt="city"
        className="h-full w-full object-cover "
      />
      <h3 className="absolute left-4 bottom-4 text-white">{name}</h3>
    </Card>
  );
};

// export const SmallDestination = () => {
//   return <Card className="h-full bg-cover bg-small"></Card>;
// };

// export const MediumDestination = () => {
//   return <Card className="h-full bg-cover bg-medium"></Card>;
// };

export default Destination;
