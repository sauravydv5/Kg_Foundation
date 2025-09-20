import React from "react";
import { LogIn } from "lucide-react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="w-full z-40 backdrop-blur-lg bg-gradient-to-r from-blue-900/70 via-indigo-900/70 to-purple-900/70 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center md:items-center justify-between gap-4">
        {/* Left - Logo */}
        <div className="flex-shrink-0 flex items-center gap-3 sm:gap-4">
          <img
            src="/logo.png"
            alt="KG Foundation Logo"
            className="w-16 sm:w-20 h-16 sm:h-20 rounded-full border-2 border-white shadow-xl group-hover:scale-110 transition-transform duration-300"
          />
        </div>

        {/* Center - Title + Quote */}
        <div className="text-center flex-1">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wider 
                       bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 
                       animate-gradient-x drop-shadow-xl"
          >
            KG FOUNDATION
          </h1>
          <p
            className="mt-2 text-sm sm:text-base md:text-lg font-medium italic tracking-wide 
                       bg-clip-text text-transparent bg-gradient-to-r from-teal-200 via-yellow-300 to-pink-400
                       drop-shadow-md"
          >
            “Empowering Minds, Inspiring Futures”
          </p>
        </div>

        {/* Right - Login Button */}
        <div className="flex-shrink-0">
          <Link
            to="/login"
            className="flex items-center gap-2 px-6 sm:px-8 py-2 sm:py-2.5 rounded-full 
                       bg-gradient-to-r from-indigo-500 to-purple-600 
                       text-white font-semibold shadow-xl 
                       hover:from-yellow-400 hover:to-pink-500 
                       hover:scale-105 hover:shadow-2xl 
                       transition-all duration-300 text-sm sm:text-base"
          >
            <LogIn size={20} className="sm:!w-5 sm:!h-5" />
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
