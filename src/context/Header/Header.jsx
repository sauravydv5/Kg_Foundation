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
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="w-full mx-auto px-4 sm:px-8 py-3 flex items-center justify-between">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-4">
          <img
            src={Logo}
            alt="KG Foundation"
            className="w-20 h-20 md:w-24 md:h-24 object-contain"
          />

          <div className="hidden sm:block">
            <h1 className="text-2xl md:text-3xl font-extrabold text-rose-600 tracking-wide">
              KG FOUNDATION
            </h1>
            <p className="text-sm text-gray-600 -mt-1">
              Empowering Minds, Building Futures
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {NavLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative text-[16px] font-medium transition-all ${
                location.pathname === link.path
                  ? "text-rose-600 font-semibold"
                  : "text-gray-700 hover:text-rose-600"
              } group`}
            >
              {link.name}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-rose-600 transition-all group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden md:flex items-center gap-2 px-4 py-1.5 rounded-full 
            bg-gradient-to-r from-pink-600 to-rose-500 text-white shadow hover:scale-105 transition"
          >
            <Phone size={16} />
            Contact
          </Link>

          <Link
            to="/login"
            className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full 
            bg-rose-100 text-rose-700 font-medium hover:bg-rose-200 transition"
          >
            <User size={16} />
            Login
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-gray-100 transition"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white text-gray-800 p-6 space-y-1 shadow-lg border-t">
          {NavLinks.map((link, index) => (
            <div key={link.name}>
              <Link
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={`block text-lg py-3 px-2 ${
                  location.pathname === link.path
                    ? "text-rose-600 font-semibold"
                    : "text-gray-800 hover:bg-gray-100"
                }`}
              >
                {link.name}
              </Link>

              {/* Divider line after each item except last */}
              {index !== NavLinks.length - 1 && (
                <div className="w-full h-px bg-gray-200 my-1"></div>
              )}
            </div>
          ))}

          <hr className="border-gray-300 my-3" />

          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="block text-center bg-rose-100 py-2 rounded-lg mt-3 font-medium text-rose-700"
          >
            Contact
          </Link>

          <Link
            to="/login"
            onClick={() => setMenuOpen(false)}
            className="block text-center bg-rose-100 py-2 rounded-lg mt-2 font-medium text-rose-700"
          >
            Login
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
