import React from "react";
import { AirplaneOutline } from "react-ionicons";

const Button = ({ value, icon, style }: any) => {
  return (
    <button
      className={
        "py-3 px-6 font-semibold text-inherit text-sm md:text-base bg-blue-400 rounded-full hover:-translate-y-1 transition-transform duration-300" +
        style
      }
    >
      {icon && <AirplaneOutline color={"white"} />}
      {value}
    </button>
  );
};

export default Button;
