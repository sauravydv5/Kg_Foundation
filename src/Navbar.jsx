// Navbar.jsx
import React, { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import NavLinks from "./components/NavLinks";

const Navbar = ({ cartCount = 0 }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (
    <nav className="w-full bg-gradient-to-r from-rose-600 via-pink-500 to-rose-400 text-white shadow-lg z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main navbar row */}
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Left spacer to align with Header logo on desktop */}
          <div className="w-20 hidden md:block" />

          {/* Center: Nav Links (Desktop) */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex gap-8 items-center">
              <NavLinks />
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-4">
            {/* Search (desktop only) */}
            <div
              className={`hidden md:flex items-center bg-white/15 rounded-full px-3 py-1.5 transition-all duration-300 backdrop-blur-sm ${
                isSearchFocused
                  ? "ring-2 ring-white/30 shadow-md w-56"
                  : "hover:bg-white/20 w-44"
              }`}
            >
              <Search size={18} className="text-white/90 mr-2" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent outline-none text-sm text-white placeholder-white/70 w-full"
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
              />
            </div>

            {/* MOBILE: Hamburger placed right */}
            <div className="md:hidden">
              <button
                className="p-2 rounded-md hover:bg-white/10 transition"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile collapsible panel (below navbar) */}
        <div
          className={`md:hidden overflow-hidden transition-max-h duration-300 ${
            menuOpen ? "max-h-[700px] py-3" : "max-h-0"
          }`}
        >
          <div className="bg-gradient-to-b from-rose-700 via-pink-600 to-rose-500 rounded-b-md px-4 py-4">
            <div className="flex flex-col gap-3">
              <NavLinks onLinkClick={() => setMenuOpen(false)} />

              {/* Mobile search */}
              <div className="flex items-center bg-white/15 rounded-md px-3 py-2 mt-2 backdrop-blur-sm hover:bg-white/20 transition">
                <Search size={18} className="text-white/80 mr-2" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-transparent outline-none text-sm text-white placeholder-white/70 w-full"
                />
              </div>

              {/* Mobile actions (login, cart, contact) */}
              <div className="flex items-center justify-between pt-3 border-t border-white/10 mt-2">
                <div className="flex items-center gap-3">
                  <a
                    href="/login"
                    className="bg-white/10 px-3 py-2 rounded-md flex items-center gap-2 hover:bg-white/20 transition"
                  >
                    <span>Login</span>
                  </a>

                  <a
                    href="/cart"
                    className="relative px-3 py-2 rounded-md hover:bg-white/10 transition"
                  >
                    <span>Cart</span>
                    <span
                      className={`absolute -top-2 -right-2 min-w-[18px] px-1 py-0.5 rounded-full text-xs font-bold text-rose-800 bg-yellow-400 transform transition-all duration-300 ${
                        cartCount > 0
                          ? "scale-100 opacity-100"
                          : "scale-0 opacity-0"
                      }`}
                    >
                      {cartCount}
                    </span>
                  </a>
                </div>

                <a
                  href="/contact"
                  className="bg-yellow-400 text-rose-800 px-4 py-2 rounded-full font-semibold hover:bg-yellow-300 transition"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
