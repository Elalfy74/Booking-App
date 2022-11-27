import Button from "./ui/button ";

const ContactBanner = () => {
  return (
    <section className="section">
      <div className="flex flex-wrap justify-between gap-6 p-4 rounded-xl bg-primary md:p-12">
        <div className="text-white">
          <h2 className="text-slate-100">Get our pro offers</h2>
          <p>
            Create visial identify for your company
            <br /> and an overall brand
          </p>
        </div>
        <div className="flex self-end justify-between w-full p-2 bg-white rounded-md h-fit md:gap-10 lg:w-auto lg:justify-start">
          <input
            type="email"
            className="pl-3 text-sm lg:text-base"
            placeholder="Type your email here"
          />
          <Button size="sm" className="md:px-5 md:py-2.5">
            Subscribe
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;
