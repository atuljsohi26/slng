import React from "react";
import { FidgetSpinner } from "react-loader-spinner";

const Spinner = ({ message, height, width, color, messageColor }) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex flex-col items-center justify-center z-50 backdrop-filter backdrop-blur">
      <FidgetSpinner
        color={color}
        height={height}
        width={width}
        className="m-5"
      />
      <p style={{ color: messageColor }} className="text-lg text-center">
        {message}
      </p>
    </div>
  );
};

export default Spinner;
