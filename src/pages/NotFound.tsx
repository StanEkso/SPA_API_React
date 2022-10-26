import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="absolute h-full w-full inset-0 justify-center items-center text-2xl flex flex-col gap-3 z-0">
      <p>404 | Not Found</p>
      <Link to="/" className="text-blue-600">
        Go to Main
      </Link>
    </div>
  );
};

export default NotFound;
