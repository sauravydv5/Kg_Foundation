// src/components/UnderDevelopment.jsx
import React from "react";

const UnderDevelopment = ({ title }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-rose-50 via-white to-indigo-100">
      <div className="flex-1 flex flex-col items-center justify-center text-center px-6">
        <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-lg w-full border border-rose-100 animate-fadeIn">
          <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-pink-500 to-indigo-500 mb-3">
            🚧 {title} Page Under Development 🚧
          </h1>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            We’re working hard to bring the {title.toLowerCase()} section to
            life. Please check back soon for exciting updates and features!
          </p>

          <div className="mt-6 flex justify-center">
            <div className="h-3 w-3 bg-rose-500 rounded-full animate-bounce mx-1"></div>
            <div className="h-3 w-3 bg-pink-500 rounded-full animate-bounce mx-1 delay-150"></div>
            <div className="h-3 w-3 bg-indigo-500 rounded-full animate-bounce mx-1 delay-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnderDevelopment;
