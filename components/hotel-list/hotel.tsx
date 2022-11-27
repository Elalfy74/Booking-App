import Button from "../ui/button ";

const Hotel = () => {
  return (
    <div className="flex w-full overflow-hidden shadow-sm main-border h-96 rounded-xl ">
      <div
        className="w-2/5 bg-cover"
        style={{
          backgroundImage: "url('https://placeimg.com/330/500/arch')",
        }}
      ></div>

      <div className="flex flex-col justify-between w-3/5 p-6">
        <div>
          <h2>Backpack</h2>

          <p className="text-sm text-mainGray">Rating + location</p>

          <div className="flex flex-wrap my-6 font-medium gap-x-6 gap-y-4 text-thirdBlack">
            <p>Location Location Location</p>
            <p>Date Date Date</p>
            <p>Fight Fight Fight</p>
          </div>
        </div>
        <div className="flex items-end justify-between">
          <div className="text-gray-500">
            <p> Service !</p>
            <p> Service !</p>
            <p> Service !</p>
            <p> Service !</p>
            <p> Service !</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-end gap-2 mx-auto mb-4">
              <h3>$320</h3> <span className="text-mainGray">For Two</span>
            </div>
            <Button className="py-3 text-base rounded-full h-fit px-9">
              Book Nows
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
