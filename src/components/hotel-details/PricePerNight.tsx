type PricePerNightProps = {
  price: number;
  originalPrice?: number;
};

const PricePerNight = ({ price, originalPrice }: PricePerNightProps) => {
  return (
    <div className="flex items-end">
      <h2 className="mb-0 text-xl xl:text-3xl">${price}</h2>

      <span className="text-gray-500">/night</span>
      {originalPrice && (
        <span className="ml-2 text-mainGray">${originalPrice}</span>
      )}
    </div>
  );
};

export default PricePerNight;
