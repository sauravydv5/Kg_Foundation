import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Logo from "../assets/logo.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-rose-600 via-pink-500 to-fuchsia-600 text-white overflow-hidden">
      {/* ✨ Top Glass Strip */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-yellow-400 via-white to-yellow-400 animate-pulse"></div>

      {/* 💎 Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-10 md:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* 🔹 Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={Logo}
                alt="KG Foundation"
                className="w-14 h-14 rounded-full border-2 border-white/40 shadow-lg object-cover"
              />
              <div>
                <h2 className="text-xl font-bold">KG FOUNDATION</h2>
                <p className="text-sm text-white/80 italic">
                  Empowering Lives 🌍
                </p>
              </div>
            </div>
            <p className="text-sm text-white/80 leading-relaxed">
              Creating opportunities through education, empowerment, and
              sustainability. Together, we can make a difference.
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href="/donate"
                className="px-4 py-1.5 rounded-full bg-yellow-400 text-rose-800 font-semibold hover:scale-105 transition"
              >
                Donate
              </a>
              <a
                href="/contact"
                className="px-4 py-1.5 rounded-full border border-white/30 hover:bg-white/20 transition"
              >
                Contact
              </a>
            </div>
          </div>

          {/* 🔹 Links */}
          <div>
            <h4 className="text-lg font-semibold mb-3 border-b border-white/30 pb-1 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-white/80">
              {["Home", "Shop", "Events", "Services", "Pricing"].map((item) => (
                <li key={item}>
                  <a
                    href={`/${item.toLowerCase()}`}
                    className="hover:text-yellow-300 transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 🔹 Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-3 border-b border-white/30 pb-1 inline-block">
              Our Focus
            </h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>Education & Scholarships</li>
              <li>Women Empowerment</li>
              <li>Healthcare & Nutrition</li>
              <li>Environment & Clean Energy</li>
              <li>Community Development</li>
            </ul>
          </div>

          {/* 🔹 Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-3 border-b border-white/30 pb-1 inline-block">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm text-white/90">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-yellow-300 mt-0.5" />
                <p>123 Charity Street, New Delhi, India</p>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-yellow-300" />
                <a
                  href="tel:+919999999999"
                  className="hover:text-yellow-300 transition"
                >
                  +91 99999 99999
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-yellow-300" />
                <a
                  href="mailto:info@kgfoundation.org"
                  className="hover:text-yellow-300 transition"
                >
                  info@kgfoundation.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* 🔹 Divider */}
        <div className="border-t border-white/20 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-white/80">
          <p>
            © {currentYear} <span className="font-semibold">KG Foundation</span>
            . All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3 mt-3 md:mt-0">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="p-2 rounded-full bg-white/10 hover:bg-yellow-400 hover:text-rose-700 transition transform hover:scale-110"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
