import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const navLinks = ["Home", "About", "Projects", "Events", "Contact"];
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full z-30 backdrop-blur-lg bg-gradient-to-r from-blue-900/70 via-indigo-900/70 to-purple-900/70 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between py-3 gap-2">
        {/* Desktop Links */}
        <div className="hidden md:flex items-center justify-center gap-10 flex-1">
          {navLinks.map((link) => {
            const isActive = location.pathname === `/${link.toLowerCase()}`;
            return (
              <Link
                key={link}
                to={`/${link.toLowerCase()}`}
                className={`relative font-semibold text-lg transition-all duration-300 ${
                  isActive
                    ? "text-yellow-400"
                    : "text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600"
                }`}
              >
                {link}
                <span
                  className={`absolute left-0 -bottom-1 h-1 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 transition-all ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex flex-col items-center w-full">
          {/* Hamburger Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none mb-2"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Links */}
      {menuOpen && (
        <div className="md:hidden bg-gradient-to-r from-blue-900/70 via-indigo-900/70 to-purple-900/70 border-t border-white/20">
          <div className="flex flex-col items-center gap-4 py-4">
            {navLinks.map((link) => {
              const isActive = location.pathname === `/${link.toLowerCase()}`;
              return (
                <Link
                  key={link}
                  to={`/${link.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className={`font-semibold text-white text-lg transition-all duration-300 ${
                    isActive ? "text-yellow-400" : ""
                  }`}
                >
                  {link}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
