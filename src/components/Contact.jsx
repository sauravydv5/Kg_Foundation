// src/pages/Contact.jsx
import React from "react";
import { Mail, Phone, MessageCircle, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 flex flex-col items-center">
      {/* 🌈 Hero Section */}
      <section className="w-full text-center py-20 bg-gradient-to-r from-pink-600 via-rose-500 to-fuchsia-500 text-white shadow-md">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 drop-shadow-md">
            Get in Touch
          </h1>
          <p className="text-white/90 text-lg">
            We’d love to hear from you! Reach out through any of the options
            below or send us a message.
          </p>
        </div>
      </section>

      {/* 💬 Contact Options */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Email */}
        <div className="p-6 rounded-2xl shadow-lg bg-white/70 backdrop-blur-md hover:scale-[1.03] hover:shadow-xl transition-all text-center border border-white/40">
          <Mail
            size={40}
            className="mx-auto text-rose-600 mb-4 animate-pulse"
          />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Email Us</h3>
          <p className="text-sm text-gray-600 mb-3">We reply within 24 hours</p>
          <a
            href="mailto:support@helpdesk.com"
            className="text-rose-600 font-medium hover:underline"
          >
            support@helpdesk.com
          </a>
        </div>

        {/* Phone */}
        <div className="p-6 rounded-2xl shadow-lg bg-white/70 backdrop-blur-md hover:scale-[1.03] hover:shadow-xl transition-all text-center border border-white/40">
          <Phone
            size={40}
            className="mx-auto text-pink-600 mb-4 animate-pulse"
          />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Call Us</h3>
          <p className="text-sm text-gray-600 mb-3">Mon–Sat, 9 AM – 8 PM IST</p>
          <a
            href="tel:+911234567890"
            className="text-pink-600 font-medium hover:underline"
          >
            +91 12345 67890
          </a>
        </div>

        {/* Chat */}
        <div className="p-6 rounded-2xl shadow-lg bg-white/70 backdrop-blur-md hover:scale-[1.03] hover:shadow-xl transition-all text-center border border-white/40">
          <MessageCircle
            size={40}
            className="mx-auto text-fuchsia-600 mb-4 animate-pulse"
          />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Live Chat
          </h3>
          <p className="text-sm text-gray-600 mb-3">
            Chat with our team instantly
          </p>
          <button className="px-5 py-2 bg-gradient-to-r from-pink-600 to-fuchsia-600 text-white font-semibold rounded-full hover:scale-105 transition">
            Start Chat
          </button>
        </div>
      </section>

      {/* 🧾 Contact Form Section */}
      <section className="w-full bg-gradient-to-r from-white via-rose-50 to-pink-50 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">
            Send Us a Message
          </h2>
          <p className="text-gray-600">
            Have any questions or suggestions? Fill out the form below and we’ll
            get back to you shortly.
          </p>
        </div>

        <form className="max-w-4xl mx-auto bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-gray-100 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Full Name *
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500 outline-none placeholder-gray-400"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Email Address *
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500 outline-none placeholder-gray-400"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Subject
            </label>
            <input
              type="text"
              placeholder="Enter your subject"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500 outline-none placeholder-gray-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Message *
            </label>
            <textarea
              rows="5"
              placeholder="Write your message..."
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500 outline-none placeholder-gray-400"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-pink-600 to-fuchsia-600 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition hover:scale-[1.02]"
          >
            <Send size={18} /> Send Message
          </button>
        </form>
      </section>

      {/* 📍 Location or Footer Info */}
      <section className="text-center py-10">
        <div className="flex flex-col items-center text-gray-600">
          <MapPin size={24} className="mb-2 text-rose-500" />
          <p className="text-sm">
            KG Foundation, MG Road, Chennai, India – 600034
          </p>
          <p className="text-xs mt-2 text-gray-500">
            © {new Date().getFullYear()} KG Foundation. All rights reserved.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
