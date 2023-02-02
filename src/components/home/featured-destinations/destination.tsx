import Image from "next/image";

import { Card } from "@/components/ui";

const Destination = ({ img, name }: { img: string; name: string }) => {
  return (
    <Card className="relative h-full overflow-hidden overlay">
      <Image
        width={900}
        height={250}
        src={img}
        alt="city"
        blurDataURL="https://via.placeholder.com/700x250?text"
        className="object-cover w-full h-full "
      />
      <h3 className="absolute text-white left-4 bottom-4">{name}</h3>
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
