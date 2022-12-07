import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

import FilterModal from "./filter/filter-modal";

const MiniFilterForm = () => {
  return (
    <>
      <div className="flex items-center justify-between gap-4 p-2 text-gray-500 bg-white rounded-full shadow-sm">
        <Link
          href="/"
          className="block p-2 bg-white rounded-full shadow-lg duration-main hover:bg-gray-50"
        >
          <ArrowLeftIcon className="w-5 h-5" />
        </Link>
        <p className="overflow-hidden text-ellipsis whitespace-nowrap">
          Dubai United Arab Amiras July 27 2022 / July 28 2024
        </p>
        <div className="flex gap-3">
          <span className="w-[2px] bg-gray-500"></span>
          <FilterModal />
        </div>
      </div>
    </>
  );
};

export default MiniFilterForm;
