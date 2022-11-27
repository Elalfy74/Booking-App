const FooterList = () => {
  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 title-font">
        CATEGORIES
      </h2>
      <nav className="mb-10 list-none">
        <li>
          <a className="text-gray-600 hover:text-gray-800">First Link</a>
        </li>
        <li>
          <a className="text-gray-600 hover:text-gray-800">Second Link</a>
        </li>
        <li>
          <a className="text-gray-600 hover:text-gray-800">Third Link</a>
        </li>
        <li>
          <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
        </li>
      </nav>
    </div>
  );
};

export default FooterList;
