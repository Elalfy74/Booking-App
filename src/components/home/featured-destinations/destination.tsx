import Image from "next/image";

import { Card } from "@/components/ui";

const Destination = ({ img }: { img: string }) => {
  return (
    <Card className="h-full overflow-hidden">
      <Image
        width={700}
        height={250}
        src={img}
        alt="city"
        blurDataURL="https://via.placeholder.com/700x250?text"
        className="object-cover w-full h-full "
      />
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
