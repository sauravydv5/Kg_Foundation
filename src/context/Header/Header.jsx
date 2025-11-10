// Header.jsx
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, Menu, X, Search, ShoppingCart, User } from "lucide-react";
import Logo from "../../assets/logo.jpg";
import NavLinks from "../../components/NavLinks";
import contactBg from "../../assets/contactBg.jpg"; // background image

/**
 * Updated Header with new styles for:
 * - Search (expand-on-focus pill on desktop)
 * - Cart (circular elevated icon + badge)
 * - Contact (ghost-outline on desktop, solid on mobile panel)
 * - Login (avatar-style button on desktop, full action on mobile)
 */
const Header = ({ cartCount = 0 }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const panelRef = useRef(null);

  // close on ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // focus first focusable element inside panel when opened
  useEffect(() => {
    if (!menuOpen) return;
    const timer = setTimeout(() => {
      const focusable = panelRef.current?.querySelectorAll(
        'a,button,input,textarea,select,[tabindex]:not([tabindex="-1"])'
      );
      focusable?.[0]?.focus();
    }, 120);
    return () => clearTimeout(timer);
  }, [menuOpen]);

  return (
    <header className="w-full sticky top-0 z-50">
      {/* TOP CONTACT BAR (desktop only) */}
      <div className="hidden md:flex w-full bg-gradient-to-r from-rose-600 via-pink-500 to-rose-400 text-white py-2 px-4 text-sm items-center justify-between">
        <div className="flex items-center gap-4">
          <a
            href="tel:+91 91554-24459"
            className="flex items-center gap-2 hover:text-yellow-300 transition"
            aria-label="Call"
          >
            <Phone size={16} />
            +91 91554-24459
          </a>
          <a
            href="mailto:info@kgfoundation.org"
            className="flex items-center gap-2 hover:text-yellow-300 transition"
            aria-label="Email"
          >
            <Mail size={16} /> info@kgfoundation.org
          </a>
        </div>

        {/* desktop contact now ghost-outline */}
        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden lg:inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/30 bg-white/5 hover:bg-white/10 transition"
            aria-label="Contact us"
          >
            <Mail size={16} />{" "}
            <span className="text-sm font-medium">Contact</span>
          </Link>

          <Link
            to="/donate"
            className="bg-yellow-400 text-rose-800 font-semibold px-3 py-1.5 rounded-full hover:scale-105 transition shadow-sm"
            aria-label="Donate"
          >
            Donate Now
          </Link>
        </div>
      </div>

      {/* DESKTOP HEADER (with background image) */}
      <div className="hidden md:block relative w-full bg-white shadow-md">
        <div
          className="relative w-full text-white"
          style={{
            backgroundImage: `url(${contactBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/30" />

          <div className="relative max-w-7xl mx-auto flex items-center justify-between px-4 py-6">
            {/* Left: Logo */}
            <Link
              to="/"
              className="flex items-center gap-4 z-10"
              aria-label="Home"
            >
              <img
                src={Logo}
                alt="KG Foundation"
                className="w-18 h-18 w-20 h-20 rounded-full border-2 border-white/30 shadow-lg object-cover"
              />
              <div>
                <h1 className="text-2xl font-bold text-white leading-tight">
                  KG FOUNDATION
                </h1>
                <p className="text-sm italic text-white/90">
                  Empowering Minds, Building Futures
                </p>
              </div>
            </Link>

            {/* Center tagline (visible on lg) */}
            <div className="hidden lg:flex items-center text-white/90 z-10">
              <p className="italic">Together for a Better Tomorrow</p>
            </div>

            {/* Right actions */}
            <div className="flex items-center gap-3 z-10">
              {/* NEW: Search pill expands on focus */}
              <div
                className={`hidden md:flex items-center bg-white/8 border border-white/10 rounded-full transition-all duration-300 px-2 ${
                  searchFocused
                    ? "w-72 ring-2 ring-white/20 shadow-[0_6px_18px_rgba(0,0,0,0.25)]"
                    : "w-44 hover:bg-white/10"
                }`}
              >
                <Search size={18} className="text-white/90 mr-3" />
                <input
                  type="text"
                  placeholder="Search programs, projects..."
                  className="bg-transparent outline-none text-sm text-white placeholder-white/60 w-full"
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                />
              </div>

              {/* NEW: Cart - circular elevated icon with badge */}
              <Link
                to="/cart"
                className="relative inline-flex items-center justify-center w-11 h-11 rounded-full bg-white/8 border border-white/10 hover:translate-y-[-3px] transition transform"
              >
                <ShoppingCart size={20} className="text-white" />
                <span
                  className={`absolute -top-2 -right-2 min-w-[18px] px-1 py-0.5 rounded-full text-[10px] font-bold text-rose-800 bg-yellow-400 transform transition-all duration-300 ${
                    cartCount > 0
                      ? "scale-100 opacity-100"
                      : "scale-0 opacity-0"
                  }`}
                >
                  {cartCount}
                </span>
              </Link>

              {/* NEW: Login - avatar style small button */}
              <Link
                to="/login"
                className="hidden lg:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/6 border border-white/10 hover:bg-white/12 transition"
              >
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <User size={16} className="text-white" />
                </div>
                <span className="text-sm text-white/90">Login</span>
              </Link>

              {/* Mobile hamburger (still hidden md:hidden) */}
              <div className="md:hidden" />
            </div>
          </div>
        </div>

        {/* NAV LINKS (desktop centered below hero) */}
        <nav className="bg-gradient-to-r from-rose-600 via-pink-500 to-rose-400 text-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="hidden md:flex items-center justify-center h-14">
              <div className="flex gap-8 items-center">
                <NavLinks />
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* MOBILE HEADER (compact row with donate in center) */}
      <div className="md:hidden bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-2">
          {/* Left: Logo + Name */}
          <Link to="/" className="flex items-center gap-3" aria-label="Home">
            <img
              src={Logo}
              alt="KG Foundation"
              className="w-12 h-12 rounded-full border-2 border-rose-500 object-cover"
            />
            <div>
              <h2 className="text-base font-semibold text-rose-700 leading-tight">
                KG FOUNDATION
              </h2>
              <p className="text-xs text-gray-500">Empowering Minds</p>
            </div>
          </Link>

          {/* Center: Donate Button */}
          <Link
            to="/donate"
            className="bg-gradient-to-r from-yellow-300 to-yellow-400 text-rose-800 font-semibold px-3 py-1.5 rounded-full shadow-md text-sm hover:scale-105 active:scale-95 transition"
          >
            Donate
          </Link>

          {/* Right: Hamburger */}
          <button
            className="p-2 rounded-md hover:bg-gray-100 transition"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Slide-over: backdrop */}
        <div
          className={`fixed inset-0 z-40 transition-opacity ${
            menuOpen ? "pointer-events-auto" : "pointer-events-none"
          }`}
          aria-hidden={!menuOpen}
        >
          <div
            className={`absolute inset-0 bg-black/50 transition-opacity ${
              menuOpen ? "opacity-100" : "opacity-0"
            }`}
            onClick={() => setMenuOpen(false)}
          />
        </div>

        {/* Panel: dynamic width */}
        <aside
          ref={panelRef}
          className={`fixed top-0 right-0 z-50 h-full bg-gradient-to-b from-rose-700 via-pink-600 to-rose-500 text-white shadow-2xl transform transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile menu"
          style={{
            width: "min(92%, 420px)",
            borderLeft: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div className="h-full flex flex-col">
            {/* Close row */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
              <div />
              <button
                className="p-2 rounded-md hover:bg-white/10 transition"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            {/* Centered content */}
            <div className="flex-1 flex items-center justify-center px-6">
              <div className="w-full max-w-sm text-center space-y-6">
                {/* Nav links centered */}
                <div className="flex flex-col items-center gap-1">
                  <NavLinks onLinkClick={() => setMenuOpen(false)} />
                </div>

                {/* Mobile Search (full-width glass) */}
                <div className="mt-2 w-full">
                  <div className="flex items-center bg-white/10 rounded-full px-3 py-2 backdrop-blur-sm">
                    <Search size={18} className="text-white/90 mr-2" />
                    <input
                      type="text"
                      placeholder="Search programs, projects..."
                      className="bg-transparent outline-none text-sm text-white placeholder-white/70 w-full"
                    />
                  </div>
                </div>

                {/* Actions centered (Cart, Login, Contact) */}
                <div className="flex flex-col gap-3 w-full">
                  {/* Cart as wide button with badge */}
                  <Link
                    to="/cart"
                    className="relative inline-flex items-center justify-center px-4 py-2 rounded-md bg-white/10 hover:bg-white/20 transition w-full"
                    onClick={() => setMenuOpen(false)}
                  >
                    <ShoppingCart size={18} className="mr-2" /> View Cart
                    <span
                      className={`absolute -top-2 -right-3 min-w-[18px] px-1 py-0.5 rounded-full text-xs font-bold text-rose-800 bg-yellow-400 transform transition-all duration-300 ${
                        cartCount > 0
                          ? "scale-100 opacity-100"
                          : "scale-0 opacity-0"
                      }`}
                    >
                      {cartCount}
                    </span>
                  </Link>

                  {/* Login full-width */}
                  <Link
                    to="/login"
                    className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-white/10 hover:bg-white/20 transition w-full"
                    onClick={() => setMenuOpen(false)}
                  >
                    <User size={18} className="mr-2" /> Login
                  </Link>

                  {/* Contact solid CTA on mobile */}
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-yellow-400 text-rose-800 font-semibold hover:bg-yellow-300 transition w-full"
                    onClick={() => setMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 text-center text-sm text-white/80 border-t border-white/10">
              © {new Date().getFullYear()} KG Foundation
            </div>
          </div>
        </aside>
      </div>
    </header>
  );
};

export default Header;
