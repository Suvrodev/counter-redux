import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const routes = [
  {
    title: "Home",
    path: "/home",
  },
  {
    title: "Book",
    path: "/book",
  },
  {
    title: "Post",
    path: "/post",
  },
  {
    title: "Product",
    path: "/product",
  },
];
const Header = () => {
  const loc = useLocation()?.pathname;
  // console.log("Location: ", loc);
  return (
    <div className="bg-orange-500 p-5 flex items-center justify-center text-white gap-5">
      {routes.map((route, idx) => (
        <NavLink
          to={route.path}
          key={idx}
          className={`${loc == route.path ? "font-bold text-blue-400" : ""}`}
        >
          {route.title}
        </NavLink>
      ))}
    </div>
  );
};

export default Header;
