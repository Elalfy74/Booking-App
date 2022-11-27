import Hotel from "./hotel";

const HotelList = () => {
  return (
    <div className="flex flex-col gap-20 mt-10">
      <Hotel />
      <Hotel />
      <Hotel />
    </div>
  );
};

export default HotelList;
