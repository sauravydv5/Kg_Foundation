import React, { useState } from "react";
import {
  HelpCircle,
  Search,
  ChevronDown,
  Upload,
  Mail,
  Phone,
  MessageCircle,
} from "lucide-react";

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
    {
      question: "How do I contact support?",
      answer:
        "You can email us, call, or submit a support ticket directly through this page.",
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
              placeholder="Search for help, topics, or FAQs..."
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
                <div className="px-6 pb-4 text-gray-600 border-t border-gray-100 animate-fadeIn">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 🧾 Submit a Ticket Section */}
      <section className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 py-16 px-6">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">
            Submit a Support Ticket
          </h2>
          <p className="text-gray-600">
            Still need help? Fill out the form below and our support team will
            reach out to you shortly.
          </p>
        </div>

        <form className="max-w-3xl mx-auto bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg space-y-5 border border-gray-100">
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Full Name *
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none placeholder-gray-400"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Phone Number
              </label>
              <input
                type="text"
                placeholder="+91 98765 43210"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none placeholder-gray-400"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Email Address *
              </label>
              <input
                type="email"
                placeholder="john.doe@example.com"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none placeholder-gray-400"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Company Name
              </label>
              <input
                type="text"
                placeholder="ABC Pvt Ltd"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none placeholder-gray-400"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Message Subject *
            </label>
            <input
              type="text"
              placeholder="Regarding account access issue"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none placeholder-gray-400"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Ask Your Question *
            </label>
            <textarea
              placeholder="Describe your issue here..."
              rows="5"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none placeholder-gray-400"
              required
            ></textarea>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Attachment
            </label>
            <div className="flex items-center gap-3 flex-wrap">
              <input
                type="file"
                id="attachment"
                className="hidden"
                accept="image/*,.pdf,.docx,.txt"
                onChange={(e) =>
                  setFileName(e.target.files[0]?.name || "No file chosen")
                }
              />
              <label
                htmlFor="attachment"
                className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg cursor-pointer hover:bg-indigo-700 transition"
              >
                <Upload size={18} />
                Choose File
              </label>
              <span className="text-gray-600 text-sm truncate max-w-xs">
                {fileName}
              </span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition transform hover:scale-[1.02]"
          >
            Submit Ticket
          </button>
        </form>
      </section>

      {/* ☎️ Contact Section */}
      <section className="bg-white py-16 px-6 border-t border-gray-100">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 rounded-2xl shadow-md bg-gradient-to-br from-blue-50 to-indigo-100 hover:shadow-xl transition">
            <Mail
              size={36}
              className="mx-auto text-indigo-600 mb-3 animate-pulse"
            />
            <h3 className="text-lg font-semibold mb-2">Email Us</h3>
            <p className="text-sm text-gray-600 mb-2">
              Send us your queries anytime
            </p>
            <a
              href="mailto:support@helpdesk.com"
              className="text-indigo-600 font-medium hover:underline"
            >
              support@helpdesk.com
            </a>
          </div>

          <div className="p-6 rounded-2xl shadow-md bg-gradient-to-br from-purple-50 to-pink-100 hover:shadow-xl transition">
            <Phone
              size={36}
              className="mx-auto text-purple-600 mb-3 animate-pulse"
            />
            <h3 className="text-lg font-semibold mb-2">Call Us</h3>
            <p className="text-sm text-gray-600 mb-2">
              Mon–Sat, 9 AM – 8 PM IST
            </p>
            <a
              href="tel:+911234567890"
              className="text-purple-600 font-medium hover:underline"
            >
              +91 12345 67890
            </a>
          </div>

          <div className="p-6 rounded-2xl shadow-md bg-gradient-to-br from-pink-50 to-rose-100 hover:shadow-xl transition">
            <MessageCircle
              size={36}
              className="mx-auto text-pink-500 mb-3 animate-pulse"
            />
            <h3 className="text-lg font-semibold mb-2">Live Chat</h3>
            <p className="text-sm text-gray-600 mb-2">
              Talk to our support team
            </p>
            <button className="px-4 py-1.5 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition">
              Start Chat
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Help;
