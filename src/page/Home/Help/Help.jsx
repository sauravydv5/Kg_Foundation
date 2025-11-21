// src/pages/Help.jsx
import React, { useState } from "react";
import { HelpCircle, Search, ChevronDown, Upload } from "lucide-react";

const Help = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [fileName, setFileName] = useState("No file chosen");

  const faqs = [
    {
      question: "How do I create an account?",
      answer:
        "Click the 'Sign Up' button on the top right, fill out your details, and verify your email to get started.",
    },
    {
      question: "How can I cancel or reschedule my appointment?",
      answer:
        "You can cancel or reschedule appointments from your dashboard at least 24 hours before your scheduled time.",
    },
    {
      question: "Is customer support available 24/7?",
      answer:
        "Our support team is available from 9 AM – 8 PM IST, Monday through Saturday.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white text-gray-800">
      {/* 🌈 Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white py-20 px-6 text-center shadow-lg">
        <div className="max-w-3xl mx-auto">
          <HelpCircle size={60} className="mx-auto mb-4 text-yellow-300" />
          <h1 className="text-4xl md:text-5xl font-bold mb-3 drop-shadow-md">
            Need Assistance?
          </h1>
          <p className="text-white/90 mb-8 text-lg">
            We’re here to help you with any questions or issues you may have.
          </p>

          {/* 🔍 Search Bar */}
          <div className="flex items-center max-w-lg mx-auto bg-white rounded-full overflow-hidden shadow-md focus-within:ring-2 focus-within:ring-pink-400 transition">
            <Search className="text-gray-400 ml-3" size={20} />
            <input
              type="text"
              placeholder="Search for help or FAQs..."
              className="flex-1 px-3 py-2 outline-none text-gray-700"
            />
          </div>
        </div>
      </section>

      {/* 💬 FAQ Section */}
      <section className="max-w-5xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left font-medium hover:bg-gray-50 transition"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180 text-indigo-600" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600 border-t border-gray-100">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 🧾 Ticket Form */}
      <section className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 py-16 px-6">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">
            Submit a Support Ticket
          </h2>
          <p className="text-gray-600">
            Still need help? Fill out the form below and our support team will
            reach out shortly.
          </p>
        </div>

        <form className="max-w-3xl mx-auto bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg space-y-5 border border-gray-100">
          <input
            type="text"
            placeholder="Full Name"
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
          />
          <input
            type="email"
            placeholder="Email Address"
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
          />
          <textarea
            rows="4"
            placeholder="Describe your issue..."
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
          ></textarea>

          <div className="flex items-center gap-3">
            <input
              type="file"
              id="file"
              className="hidden"
              onChange={(e) =>
                setFileName(e.target.files[0]?.name || "No file chosen")
              }
            />
            <label
              htmlFor="file"
              className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg cursor-pointer hover:bg-indigo-700"
            >
              <Upload size={18} />
              Choose File
            </label>
            <span className="text-sm text-gray-600">{fileName}</span>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:scale-[1.02] transition"
          >
            Submit Ticket
          </button>
        </form>
      </section>
    </div>
  );
};

export default Help;
