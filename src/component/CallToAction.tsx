import React from "react";
import Button from "./Button";
import banner from "../assets/images/sky3.jpg";

const CallToAction = () => {
  return (
    <section className="px-[15px] flex flex-wrap banner w-full md:h-[400px] h-[460px] my-20 bg-fixed bg-cover relative z-[1] justify-evenly md:justify-center items-center text-white after:absolute after:inset-0 after:bg-black after:bg-opacity-60 after:-z-10">
      <h1 className="text-[2.5em] md:text-[3em] font-extrabold md:w-[50%] text-center">
        It's Time To Enjoy Your Freedom!
      </h1>
      <div className="md:w-[50%] flex flex-wrap justify-center items-center gap-4">
        <input
          type="email"
          placeholder="Email address"
          className="md:max-w-[50%] w-full p-4 rounded-xl"
        />
        <Button value={"Join to our newsletter"} style="!p-4 rounded-xl" />
      </div>
    </section>
  );
};

export default CallToAction;
