/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

// TODO Change img to Image
const City = () => {
  return (
    <div className="w-full p-6 main-border rounded-xl duration-main hover:border-white hover:bg-white hover:shadow-sm ">
      <img
        src="https://placeimg.com/80/80/arch"
        alt="city"
        className="rounded-xl"
      />
      <h3 className="text-sm ">City Name</h3>
      <p className="text-xs text-mainGray">
        <span className="mr-1">86</span>Destinations
      </p>
    </div>
  );
};

export default City;
