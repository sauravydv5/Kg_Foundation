import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import banner1 from "../assets/banner/banner1.jpg";
import banner2 from "../assets/banner/banner2.jpg";
import banner3 from "../assets/banner/banner3.jpg";
import banner4 from "../assets/banner/banner4.jpg";
import banner5 from "../assets/banner/banner5.jpg";
import banner6 from "../assets/banner/banner6.jpg";
import banner7 from "../assets/banner/banner7.jpg";
import banner8 from "../assets/banner/banner8.jpg";

const images = [
  banner1,
  banner2,
  banner3,
  banner4,
  banner5,
  banner6,
  banner7,
  banner8,
];

export default function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative w-full h-[380px] sm:h-[480px] md:h-[620px] lg:h-[700px] overflow-hidden">
      {/* SLIDER TRACK */}
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{
          width: `${images.length * 100}%`,
          transform: `translateX(-${currentIndex * (100 / images.length)}%)`,
        }}
      >
        {images.map((img, i) => (
          <div
            key={i}
            className="flex-shrink-0 h-full"
            style={{ width: `${100 / images.length}%` }}
          >
            <img
              src={img}
              alt={`banner-${i}`}
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}
      </div>

      {/* LEFT ARROW */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full transition z-20"
      >
        <ChevronLeft size={28} />
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full transition z-20"
      >
        <ChevronRight size={28} />
      </button>

      {/* TEXT + BUTTON OVERLAY */}
      <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-center px-4 z-10">
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold drop-shadow-lg leading-snug">
          "Empowering Children, Shaping a Better Tomorrow"
        </h2>

        <button
          onClick={() => (window.location.href = "/login")}
          className="mt-6 px-6 py-3 bg-rose-600 hover:bg-rose-700 text-white text-lg font-semibold rounded-full shadow-lg transition"
        >
          Join Now
        </button>
      </div>

      {/* DOT INDICATORS */}
      <div className="absolute bottom-5 w-full flex justify-center gap-2 z-20">
        {images.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-3 h-3 rounded-full cursor-pointer transition 
              ${i === currentIndex ? "bg-rose-600" : "bg-white opacity-60"}`}
          />
        ))}
      </div>

      {/* PERFECT BOTTOM CURVE */}
      <div className="w-full overflow-hidden -mt-6 relative z-0">
        <div className="w-full h-20 bg-white rounded-t-[100%]"></div>
      </div>
    </div>
  );
}
