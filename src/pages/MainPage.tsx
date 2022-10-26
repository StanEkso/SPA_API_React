import React from "react";
import { Link } from "react-router-dom";
const MainPage = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold my-4">Welcome here!</h1>
      <p>What you wanna do?</p>
      <div className="flex gap-8 flex-wrap">
        <div className="rounded-sm border-2 p-3 my-2 hover:border-blue-500 cursor-pointer">
          <Link to="/users">Check users</Link>
        </div>
        <div className="rounded-sm border-2 p-3 my-2 hover:border-blue-500 cursor-pointer">
          <Link to="/albums">Check albums</Link>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
