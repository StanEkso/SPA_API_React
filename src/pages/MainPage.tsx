import React from "react";
import { Link } from "react-router-dom";
const MainPage = () => {
  return (
    <div>
      <h1>Welcome here!</h1>
      <p>What you wanna do?</p>
      <div className="rounded-sm border-2 p-3 my-2">
        <Link to="/users">Check users</Link>
      </div>
      <div className="rounded-sm border-2 p-3 my-2">
        <Link to="/albums">Check albums</Link>
      </div>
    </div>
  );
};

export default MainPage;
