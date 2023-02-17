import { IRoom } from "@/types/hotels";

import SingleRoom from "./single-room";

const RoomsList = ({ rooms }: { rooms: IRoom[] }) => {
  return (
    <>
      <h1 className="mb-6 text-4xl font-semibold">Select Room</h1>
      <ul>
        {rooms.map((room) => (
          <li key={room._id} className="mb-10">
            <SingleRoom room={room} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default RoomsList;
