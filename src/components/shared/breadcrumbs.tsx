import { ChevronRightIcon, HomeIcon } from "@heroicons/react/20/solid";

const Breadcrumbs = () => {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <a
            href="#"
            className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 hover:underline"
          >
            <HomeIcon className="w-5 h-5 mr-2" />
            Home
          </a>
        </li>
        <li>
          <div className="flex items-center">
            <ChevronRightIcon className="w-5 h-5" />
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
