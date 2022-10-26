import React from "react";
import { Link } from "react-router-dom";
const MainPage = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold my-4">Welcome here!</h1>
      <p>What you wanna do?</p>
      <div className="flex gap-x-8 gap-y-4 flex-wrap justify-center">
        <div className="rounded-sm border-2 p-3 my-2 hover:border-blue-500 cursor-pointer">
          <Link to="/users">Check users</Link>
        </div>
        <div className="rounded-sm border-2 p-3 my-2 hover:border-blue-500 cursor-pointer">
          <Link to="/albums">Check albums</Link>
        </div>
        <div className="rounded-sm border-2 p-3 my-2 hover:border-blue-500 cursor-pointer">
          <Link to="/users/create">Create user</Link>
        </div>
        <div className="rounded-sm border-2 p-3 my-2 hover:border-blue-500 cursor-pointer">
          <Link to="/albums/create">Create album</Link>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
