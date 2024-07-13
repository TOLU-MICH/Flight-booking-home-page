import hero from "../assets/images/plane.png";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="h-screen w-full bg-[#141b2b] hero relative z-[1]">
      <div className="max-w-screen-xl w-full flex flex-col md:flex-row justify-evenly items-center m-auto h-full pt-20 md:pt-0 px-8 md:px-12 ">
        <div className="md:w-[47%] text-white flex gap-8 flex-col px-[15px] md:px-0 mb-6">
          <div>
            <p className="text-xl md:text-xl xl:text-3xl font-bold text-blue-400">
              Welcome To Our Website
            </p>
            <h1 className="text-3xl md:text-3xl xl:text-6xl  font-bold leading-snug">
              Luxury Experience With Our Services.
            </h1>
          </div>

          <p className="text-base xl:text-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta,
            maxime itaque. Corrupti quibusdam autem libero aspernatur labore
            provident sunt at.
          </p>

          <span className="flex gap-5">
            <Button value={"Book Flight"} />

            <button className="py-3 px-6 font-semibold  text-sm md:text-base  rounded-full border-2 border-blue-500 hover:-translate-y-1 transition-transform duration-300">
              Contact Us
            </button>
          </span>
        </div>
        <div className="w-full md:w-[53%] px-[15px] md:px-0">
          <img
            src={hero}
            alt="aeroplane"
            data-aos="fade-up-left"
            data-aos-duration="800"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
