import React from "react";

const Loader = () => {
  return (
    <div className="flex w-full h-full absolute items-center justify-center inset-0 ">
      <img
        className="h-16 w-16"
        src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif"
        alt=""
      ></img>
    </div>
  );
};

export default Loader;
