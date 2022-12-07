import SingleHotel from "./single-hotel";

const HotelList = () => {
  return (
    <div className="flex flex-col gap-20 mt-10">
      <SingleHotel />
      <SingleHotel />
      <SingleHotel />
    </div>
  );
};

export default HotelList;
