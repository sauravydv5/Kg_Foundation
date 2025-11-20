// src/context/Header/Header.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, User, Phone } from "lucide-react";
import Logo from "../../assets/logo.jpg";
import NavLinks from "../../components/Navlink";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <header
        className="
          relative z-50 bg-white shadow-sm
          transition-all duration-500 ease-in-out
        "
      >
        {/* Top Bar */}
        <div
          className="
            w-full mx-auto px-4 sm:px-6 md:px-8 
            py-3 flex items-center justify-between
            transition-all duration-500 ease-in-out
          "
        >
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 sm:gap-4">
            <img
              src={Logo}
              alt="KG Foundation"
              className="
                w-14 h-14 
                sm:w-16 sm:h-16 
                md:w-20 md:h-20 
                lg:w-24 lg:h-24 
                object-contain
                transition-all duration-500 ease-in-out
              "
            />

            <div className="hidden sm:block leading-tight">
              <h1
                className="
                  text-xl sm:text-2xl md:text-3xl 
                  font-extrabold text-rose-600 tracking-wide
                "
              >
                KG FOUNDATION
              </h1>
              <p className="text-xs sm:text-sm text-gray-600">
                Empowering Minds, Building Futures
              </p>
            </div>
          </Link>

          {/* Desktop Navigation (Only for >=1024px) */}
          <nav className="hidden lg:flex items-center gap-5 lg:gap-8">
            {NavLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative text-[15px] lg:text-[16px] font-medium transition-all duration-300
                  ${
                    location.pathname === link.path
                      ? "text-rose-600 font-semibold"
                      : "text-gray-700 hover:text-rose-600"
                  }
                  group
                `}
              >
                {link.name}
                <span
                  className="
                    absolute left-0 bottom-0 w-0 h-[2px] 
                    bg-rose-600 transition-all duration-300 
                    group-hover:w-full
                  "
                />
              </Link>
            ))}
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
            {/* Contact Button (Desktop Only) */}
            <Link
              to="/contact"
              className="
                hidden lg:flex items-center gap-2 px-4 py-1.5 rounded-full
                bg-gradient-to-r from-pink-600 to-rose-500 
                text-white shadow hover:scale-105 transition-all duration-300
              "
            >
              <Phone size={16} />
              Contact
            </Link>

            {/* Login Button (Desktop Only) */}
            <Link
              to="/login"
              className="
                hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full 
                bg-rose-100 text-rose-700 font-medium hover:bg-rose-200 
                transition-all duration-300
              "
            >
              <User size={16} />
              Login
            </Link>

            {/* Mobile + Tablet Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-all duration-300"
            >
              {menuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile + Tablet Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white text-gray-800 p-5 space-y-1 shadow-lg border-t transition-all duration-500 ease-in-out">
            {NavLinks.map((link, index) => (
              <div key={link.name}>
                <Link
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={`block text-lg py-3 px-2 rounded-md transition-all duration-300
                    ${
                      location.pathname === link.path
                        ? "text-rose-600 font-semibold bg-rose-50"
                        : "text-gray-800 hover:bg-gray-100"
                    }
                  `}
                >
                  {link.name}
                </Link>

                {index !== NavLinks.length - 1 && (
                  <div className="w-full h-px bg-gray-200"></div>
                )}
              </div>
            ))}

            {/* Contact + Login for Mobile */}
            <div className="pt-3 space-y-2">
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="block text-center bg-rose-100 py-2 rounded-lg font-medium text-rose-700 transition-all duration-300"
              >
                Contact
              </Link>

              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="block text-center bg-rose-100 py-2 rounded-lg font-medium text-rose-700 transition-all duration-300"
              >
                Login
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
