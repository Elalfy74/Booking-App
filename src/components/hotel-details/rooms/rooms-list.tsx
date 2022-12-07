import SingleRoom from "./single-room";

const RoomsList = () => {
  return (
    <>
      <h1 className="mb-6 text-4xl font-semibold">Select Room</h1>
      <ul>
        {new Array(3).fill("").map((item, i) => (
          <li key={i} className="mb-10">
            <SingleRoom />
          </li>
        ))}
      </ul>
    </>
  );
};

export default RoomsList;
