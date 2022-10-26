import React from "react";
import { NavLink, useLocation } from "react-router-dom";
const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
  isActive
    ? "text-blue-600 cursor-default pointer-events-none"
    : "text-gray-500";
const Breadcrumbs = () => {
  const { pathname } = useLocation();
  if (pathname === "/") return null;
  return (
    <div className="flex gap-2 text-md border-b-2 mb-2">
      {["Main", ...pathname.split("/").slice(1)].map((el, i, arr) => (
        <NavLink
          key={el}
          end
          to={"/" + arr.slice(1, i + 1).join("/")}
          className={getNavLinkClass}
        >
          {el}
          {i < arr.length - 1 ? " >" : ""}
        </NavLink>
      ))}
    </div>
  );
};

export default Breadcrumbs;
