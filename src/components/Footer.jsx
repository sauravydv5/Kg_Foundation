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
    <footer className="bg-gradient-to-br from-rose-600 via-pink-500 to-fuchsia-600 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* BRAND */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src={Logo}
              alt="KG Foundation"
              className="w-16 h-16 rounded-full object-cover shadow-lg border border-white/40"
            />
            <div>
              <h2 className="text-xl font-bold">KG FOUNDATION</h2>
              <p className="text-white/80 text-sm italic">
                Empowering Lives 🌍
              </p>
            </div>
          </div>

          <p className="text-white/80 text-sm leading-relaxed">
            Creating opportunities through education, empowerment, healthcare
            and sustainable community development.
          </p>

          {/* Buttons */}
          <div className="flex gap-3 mt-4">
            <a
              href="/donate"
              className="px-4 py-2 bg-yellow-400 text-rose-800 rounded-full font-semibold hover:scale-105 transition"
            >
              Donate
            </a>
            <a
              href="/contact"
              className="px-4 py-2 border border-white/40 rounded-full hover:bg-white/20 transition"
            >
              Contact
            </a>
          </div>
        </div>

        {/* QUICK LINKS (Based on Header NavLinks) */}
        <div>
          <h3 className="text-lg font-semibold mb-3 border-b border-white/40 pb-1">
            Quick Links
          </h3>
          <ul className="space-y-2 text-white/80 text-sm">
            {["Home", "Events", "Services", "Help"].map((item) => (
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

        {/* CONTACT */}
        <div>
          <h3 className="text-lg font-semibold mb-3 border-b border-white/40 pb-1">
            Contact Us
          </h3>

          <div className="space-y-4 text-white/90 text-sm">
            <div className="flex items-start gap-3">
              <MapPin className="text-yellow-300 mt-1" size={18} />
              <p>
                DAYAL MARKET, DAUD BIGHA <br />
                BHOOTHNATH ROAD, SBI BANK <br />
                Patna, Bihar, India – 800026
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="text-yellow-300" size={18} />
              <a
                href="tel:+919939383830"
                className="hover:text-yellow-300 transition"
              >
                +91 99393 83830
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="text-yellow-300" size={18} />
              <a
                href="mailto:kamlagauravfoundation@gmail.com"
                className="hover:text-yellow-300 transition"
              >
                kamlagauravfoundation@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* SMALL GOOGLE MAP INSIDE GRID */}
        <div>
          <h3 className="text-lg font-semibold mb-3 border-b border-white/40 pb-1">
            Location Map
          </h3>

          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=Bhoothnath+Road+Patna&output=embed"
            className="w-full h-40 rounded-lg shadow-md border border-white/20"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* BOTTOM AREA */}
      <div className="border-t border-white/20 mt-8 pt-6 px-6 flex flex-col md:flex-row justify-between items-center text-sm text-white/80">
        <p>© {currentYear} KG Foundation. All rights reserved.</p>

        <div className="flex gap-3 mt-3 md:mt-0">
          {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="p-2 bg-white/10 rounded-full hover:bg-yellow-400 hover:text-rose-700 transition transform hover:scale-110"
            >
              <Icon size={17} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
