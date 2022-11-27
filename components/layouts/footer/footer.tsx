import FooterBanner from "./footer-banner";
import FooterList from "./footer-list";
import FooterLogo from "./footer-logo";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="flex flex-col flex-wrap px-5 py-24 mx-auto text-gray-600 md:flex-row md:flex-nowrap md:items-center lg:items-start">
          <FooterLogo />
          <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:mt-0 md:pl-20 md:text-left">
            {new Array(3).fill("").map((item, i) => (
              <FooterList key={i} />
            ))}
          </div>
        </div>
      </div>
      <FooterBanner />
    </footer>
  );
};

export default Footer;
