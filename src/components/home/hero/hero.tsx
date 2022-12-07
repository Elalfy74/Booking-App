import { SearchForm } from "@/components/shared";

const Hero = () => {
  return (
    <section>
      <div className="hero-wrapper">
        <div className="container relative">
          <h1 className="text-4xl font-bold leading-[3.5rem] tracking-wider text-slate-100 sm:text-5xl 2xl:text-6xl 2xl:leading-[5rem]">
            Book With Us <br /> And Enjoy your <br />
            Journey !
          </h1>
        </div>
      </div>
      <div className="-translate-y-52 md:-translate-y-20">
        <SearchForm />
      </div>
    </section>
  );
};

export default Hero;
