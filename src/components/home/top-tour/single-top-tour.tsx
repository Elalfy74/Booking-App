import { Card } from "@/components/ui";

const SingleTopTour = () => {
  return (
    <Card className="flex flex-col justify-between w-full h-full p-6 bg-center bg-cover overlay bg-400 before:rounded-lg">
      <p className="relative px-4 py-3 font-semibold bg-black rounded-full w-fit bg-opacity-30">
        Japan
      </p>
      <div className="relative">
        <h3>City</h3>
        <p>10 Popular Places</p>
      </div>
    </Card>
  );
};

export default SingleTopTour;
