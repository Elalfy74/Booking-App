import { Rating } from "react-simple-star-rating";

import { Card } from "@/components/ui";

import Reviewer from "./reviewer";

const SingleReview = () => {
  return (
    <Card className="flex flex-col justify-between gap-4 px-5 py-6 sm:flex-row">
      <Reviewer />
      <ReviewContent />
    </Card>
  );
};

export const ReviewContent = () => {
  return (
    <div className="sm:w-[60%]">
      <div className="flex items-end gap-4 mb-6">
        <Rating readonly initialValue={3} size={18} />
        <span className="text-xs text-mainGray">26.5.2020</span>
      </div>
      <p className="text-gray-500">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
        quaerat, a facere dignissimos, odit quod voluptate quisquam modi qui
        laudantium aspernatu
      </p>
    </div>
  );
};

export default SingleReview;
