import React from "react";
import { Bars } from "react-loader-spinner";

const Spinner = ({ message, height, width, color, messageColor }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full relative">
      <div className="absolute backdrop-blur-3xl">
        <Bars color={color} height={height} width={width} className="m-5" />
        <p style={{ color: messageColor }} className="text-lg text-center px-2">
          {message}
        </p>
      </div>
    </div>
  );
};

export default Spinner;
