import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, Loader2, UserPlus } from "lucide-react";
import Logo from "../assets/logo.jpg";

export default function BestLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Login failed");
      } else {
        const token = data.token;
        if (remember) localStorage.setItem("kg_token", token);
        else sessionStorage.setItem("kg_token", token);

        // Redirect based on role
        if (data.user.role === "admin") navigate("/admin");
        else navigate("/user");
      }
    } catch (err) {
      setError("Server error. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 via-white to-indigo-50 p-6">
      <div className="w-full max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Left Section */}
        <div className="hidden md:flex flex-col justify-center items-center bg-rose-600 text-white p-8">
          <img
            src={Logo}
            alt="KG Foundation"
            className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
          />
          <h3 className="mt-4 text-2xl font-bold">KG FOUNDATION</h3>
          <p className="text-white/90 mt-2 text-center text-sm max-w-xs">
            Empowering Minds, Building Futures. Join our mission to uplift youth
            and communities.
          </p>
          <Link
            to="/signup"
            className="mt-5 inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full text-sm"
          >
            <UserPlus size={16} /> Create Account
          </Link>
        </div>

        {/* Right Section */}
        <div className="p-8 md:p-10 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-6">
            <img
              src={Logo}
              alt="logo"
              className="w-12 h-12 rounded-full object-cover border"
            />
            <div>
              <h2 className="text-2xl font-bold text-rose-700">Welcome Back</h2>
              <p className="text-sm text-gray-500">
                Sign in to your KG Foundation account
              </p>
            </div>
          </div>

          {error && (
            <div className="mb-4 text-sm text-red-700 bg-red-50 px-3 py-2 rounded">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder=" "
                className="peer w-full px-4 pt-5 pb-3 border rounded-xl border-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-200 bg-transparent transition"
                required
              />
              <label className="absolute left-4 top-3 text-sm text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm pointer-events-none">
                <Mail size={14} className="inline mr-1" /> Email
              </label>
            </div>

            {/* Password */}
            <div className="relative">
              <input
                type={showPass ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder=" "
                className="peer w-full px-4 pt-5 pb-3 border rounded-xl border-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-200 bg-transparent transition"
                required
              />
              <label className="absolute left-4 top-3 text-sm text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm pointer-events-none">
                <Lock size={14} className="inline mr-1" /> Password
              </label>
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-3 top-3 p-1 rounded hover:bg-gray-100"
              >
                {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>

            {/* Remember */}
            <div className="flex items-center justify-between text-sm">
              <label className="inline-flex items-center gap-2 text-gray-600">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="rounded"
                />
                Remember me
              </label>
              <Link
                to="/forgot-password"
                className="text-rose-600 hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-3 rounded-xl bg-rose-600 text-white px-4 py-2 font-semibold hover:shadow-lg transform transition active:scale-95 disabled:opacity-60"
            >
              {loading ? (
                <Loader2 className="animate-spin" size={16} />
              ) : (
                "Sign in"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
