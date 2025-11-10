// src/context/Header/Header.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Mail, Menu, X, Search, ShoppingCart, User } from "lucide-react";
import Logo from "../../assets/logo.jpg";
import NavLinks from "../../components/Navlink";

const Header = ({ cartCount = 0 }) => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const isHome = location.pathname === "/";

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* 🌈 Top Contact Bar — Only on Home Page */}
      {isHome && (
        <div className="hidden md:flex items-center justify-between bg-gradient-to-r from-pink-600 via-rose-500 to-fuchsia-500 text-white text-sm px-8 py-2">
          <div className="flex items-center gap-6">
            <a
              href="tel:+91 91554-24459"
              className="flex items-center gap-2 hover:text-yellow-300 transition"
            >
              <Phone size={16} />
              +91 91554-24459
            </a>
            <a
              href="mailto:info@kgfoundation.org"
              className="flex items-center gap-2 hover:text-yellow-300 transition"
            >
              <Mail size={16} /> info@kgfoundation.org
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="px-4 py-1.5 rounded-full border border-white/30 bg-white/10 hover:bg-white/20 transition flex items-center gap-2"
            >
              <Mail size={16} /> Contact
            </Link>
            <Link
              to="/donate"
              className="bg-yellow-400 text-rose-800 font-semibold px-4 py-1.5 rounded-full hover:scale-105 transition shadow-md"
            >
              Donate Now
            </Link>
          </div>
        </div>
      )}

      {/* 💎 Main Navbar */}
      <div className="flex flex-col bg-gradient-to-r from-rose-50 via-pink-50 to-white shadow-md backdrop-blur-xl border-b border-rose-100">
        <div className="flex items-center justify-between px-3 sm:px-6 md:px-10 py-3 md:py-4">
          {/* Left: Logo */}
          <Link to="/" className="flex items-center gap-3 md:gap-4">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-pink-400 via-rose-500 to-fuchsia-500 rounded-full blur-sm opacity-40" />
              <img
                src={Logo}
                alt="KG Foundation"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "block";
                }}
                className="w-10 h-10 md:w-14 md:h-14 rounded-full border-2 border-rose-200 shadow-md object-cover relative z-10"
              />
              {/* fallback color circle */}
              <div className="hidden w-10 h-10 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-pink-500 to-rose-600 border-2 border-rose-200 shadow-md relative z-10" />
            </div>

            <div>
              <h1 className="text-base sm:text-lg md:text-2xl font-bold text-rose-600 tracking-wide leading-tight">
                KG FOUNDATION
              </h1>
              <p className="text-[10px] sm:text-xs md:text-sm italic text-gray-600">
                Empowering Minds, Building Futures
              </p>
            </div>
          </Link>

          {/* Center: Nav Links */}
          <nav className="hidden md:flex gap-6 overflow-x-auto scrollbar-thin scrollbar-thumb-rose-300 scrollbar-track-transparent px-2">
            {NavLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative whitespace-nowrap font-medium transition-all ${
                  location.pathname === link.path
                    ? "text-rose-600"
                    : "text-gray-800 hover:text-rose-600"
                } group`}
              >
                {link.name}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-rose-500 transition-all group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Right: Search + Cart + Login */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
            {/* Search Bar */}
            <div
              className={`flex items-center border border-gray-300 rounded-full px-3 py-1 bg-white/70 shadow-sm transition-all duration-300 focus-within:border-rose-400 ${
                searchOpen ? "w-40 sm:w-52 md:w-64" : "w-28 sm:w-36 md:w-44"
              }`}
              onFocus={() => setSearchOpen(true)}
              onBlur={() => setSearchOpen(false)}
            >
              <Search size={18} className="text-gray-600" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent outline-none ml-2 text-sm text-gray-700 w-full"
              />
            </div>

            {/* Cart */}
            <Link
              to="/cart"
              className="relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-rose-100 hover:bg-rose-200 transition"
            >
              <ShoppingCart size={18} className="text-rose-600" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-yellow-400 text-rose-800 text-[10px] font-bold rounded-full px-1.5">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Login Button */}
            <Link
              to="/login"
              className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-rose-600 to-pink-500 text-white font-medium hover:scale-105 transition"
            >
              <User size={16} />
              Login
            </Link>

            {/* Mobile Menu Icon */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-md hover:bg-rose-100 transition"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* 📱 Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />

        {/* Drawer Panel */}
        <aside
          className={`absolute right-0 top-0 h-full w-4/5 sm:w-2/3 bg-gradient-to-b from-rose-600 via-pink-500 to-fuchsia-600 text-white p-6 transform transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold">Menu</h2>
            <button
              onClick={() => setMenuOpen(false)}
              className="p-2 rounded-md hover:bg-white/10"
            >
              <X size={22} />
            </button>
          </div>

          <nav className="flex flex-col gap-4 text-base font-medium overflow-y-auto max-h-[70vh] pr-2 scrollbar-thin scrollbar-thumb-white/30">
            {NavLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={`hover:text-yellow-300 transition ${
                  location.pathname === link.path ? "text-yellow-300" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="mt-8 flex flex-col gap-3">
            <Link
              to="/cart"
              className="flex items-center justify-center gap-2 bg-white/10 rounded-full py-2 hover:bg-white/20 transition"
              onClick={() => setMenuOpen(false)}
            >
              <ShoppingCart size={18} /> View Cart
            </Link>
            <Link
              to="/login"
              className="flex items-center justify-center gap-2 bg-white/10 rounded-full py-2 hover:bg-white/20 transition"
              onClick={() => setMenuOpen(false)}
            >
              <User size={18} /> Login
            </Link>
          </div>

          <p className="text-xs text-white/80 text-center mt-10">
            © {new Date().getFullYear()} KG Foundation
          </p>
        </aside>
      </div>
    </header>
  );
};

export default Header;
