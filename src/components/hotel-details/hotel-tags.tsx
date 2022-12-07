const HotelTags = () => {
  return (
    <div className="flex flex-wrap gap-5 my-5">
      <span className="p-2 text-xs text-green-500 bg-green-200 rounded-lg">
        5.0
      </span>
      <span className="p-2 text-xs text-orange-500 bg-orange-200 rounded-lg">
        Perfect
      </span>
      <span className="p-2 text-xs text-indigo-500 bg-indigo-200 rounded-lg">
        Hotels
      </span>
      <span className="p-2 text-xs text-pink-500 bg-pink-200 rounded-lg">
        Building
      </span>
      <span className="p-2 text-xs rounded-lg bg-amber-200 text-amber-500">
        Top Value
      </span>
      <div>Rating</div>
    </div>
  );
};

export default HotelTags;
