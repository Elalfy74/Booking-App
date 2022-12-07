const FooterLogo = () => {
  return (
    <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
      <a className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-10 h-10 p-2 text-white bg-indigo-500 rounded-full"
          viewBox="0 0 24 24"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span className="ml-3 text-xl">Tailblocks</span>
      </a>
      <p className="mt-2 text-sm text-gray-500">
        Air plant banjo lyft occupy retro adaptogen indego
      </p>
    </div>
  );
};

export default FooterLogo;
