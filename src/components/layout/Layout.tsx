import React, { FC } from "react";
import { NavLink, Outlet } from "react-router-dom";
const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? "text-black underline underline-offset-4" : "text-gray-500";
const Layout: FC = () => {
  return (
    <div>
      <header className="border-b-2 mb-2 z-10 sticky w-full">
        <div className="mx-3 sm:mx-5 md:mx-8 lg:mx-14 xl:mx-20 2xl:mx-32 text-xl flex py-2">
          <h1 className="font-bold">SPA & API</h1>
          <div className="ml-auto flex space-x-4">
            <NavLink end to={"/"} className={getNavLinkClass}>
              Main
            </NavLink>
            <NavLink to={"/users"} className={getNavLinkClass}>
              Users
            </NavLink>
            <NavLink to={"/albums"} className={getNavLinkClass}>
              Albums
            </NavLink>
          </div>
        </div>
      </header>
      <main className="mx-3 sm:mx-5 md:mx-8 lg:mx-14 xl:mx-20 2xl:mx-32 text-xl flex flex-col">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
