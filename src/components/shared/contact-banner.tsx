import { Button } from "@/components/ui";

const ContactBanner = () => {
  return (
    <section className="section">
      <div className="flex flex-wrap justify-between gap-6 rounded-xl bg-primary p-4 md:p-12">
        <div className="text-white">
          <h2 className="text-slate-100">Get our pro offers</h2>
          <p>
            Create visual identify for your company
            <br /> and an overall brand
          </p>
        </div>
        <div className="flex h-fit w-full justify-between self-end rounded-md bg-white p-2 md:gap-10 lg:w-auto lg:justify-start">
          <input
            type="email"
            className="w-full px-3 text-sm lg:text-base"
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
