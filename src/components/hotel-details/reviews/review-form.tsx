import { useState } from "react";
import { Rating } from "react-simple-star-rating";

import { Button } from "@/components/ui";

const ReviewForm = () => {
  const [rating, setRating] = useState(0);

  const handleRating = (rate: number) => {
    setRating(rate);
  };

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="mb-6 text-xl font-semibold md:text-4xl">
          Attach your Review
        </h1>
        <Rating onClick={handleRating} size={30} />
      </div>
      <form>
        <textarea
          className="main-border h-[150px] w-full resize-none rounded-lg bg-gray-100 p-6"
          placeholder="Write Your details review here.."
        />
        <div className="flex justify-end gap-4 mt-4">
          <Button variant="default">Cancel</Button>
          <Button className="rounded-xl">Submit</Button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
