import React from "react";
import spinner from "./spinner.svg";

const Preloader = () => {
  return (
    <div>
      <img src={spinner} alt="spinner" />
    </div>
  );
};

export default Preloader;
