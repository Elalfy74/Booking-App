import { ChevronRightIcon, HomeIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

const Breadcrumbs = () => {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 hover:underline"
          >
            <HomeIcon className="mr-2 h-5 w-5" />
            Home
          </Link>
        </li>
        <li>
          <div className="flex items-center">
            <ChevronRightIcon className="h-5 w-5" />
            <span className="ml-1 text-sm font-medium text-mainGray md:ml-2">
              Hotels
            </span>
          </div>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
