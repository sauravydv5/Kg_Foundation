// NavLinks.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavLinks = ({ onLinkClick }) => {
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Events", path: "/events" },
    { name: "Services", path: "/services" },
    { name: "Pricing", path: "/pricing" },
    { name: "Company", path: "/company" },
    { name: "Help", path: "/help" },
    { name: "Appointment", path: "/appointment" },
  ];

  return (
    <>
      {links.map(({ name, path }) => {
        const isActive =
          location.pathname === path ||
          (name === "Home" && location.pathname === "/");
        return (
          <Link
            key={name}
            to={path}
            onClick={onLinkClick}
            className={`relative font-semibold text-sm tracking-wide transition-all duration-300 ${
              isActive
                ? "text-yellow-400 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-yellow-400"
                : "text-white/85 hover:text-yellow-300"
            }`}
          >
            {name}
          </Link>
        );
      })}
    </>
  );
};

export default NavLinks;
