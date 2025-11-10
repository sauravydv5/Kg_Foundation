// src/pages/BestLogin.jsx
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

  const emailValid = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(e.trim());

  const validate = () => {
    if (!email.trim() || !password) {
      setError("Please enter both email and password.");
      return false;
    }
    if (!emailValid(email)) {
      setError("Enter a valid email address.");
      return false;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setError("");

    // Mock authentication (replace with backend call if needed)
    setTimeout(() => {
      if (email === "user@gmail.com" && password === "password123") {
        const token = "mock_token_abc123";
        if (remember) localStorage.setItem("kg_token", token);
        else sessionStorage.setItem("kg_token", token);
        navigate("/");
      } else {
        setError("Invalid credentials. Try user@gmail.com / password123");
      }
      setLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 via-white to-indigo-50 p-6">
      <div className="w-full max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Left Section - Brand / Info */}
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

        {/* Right Section - Form */}
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
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder=" "
                className="peer w-full px-4 pt-5 pb-3 border rounded-xl border-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-200 bg-transparent transition"
                required
              />
              <label
                htmlFor="email"
                className="absolute left-4 top-3 text-sm text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm pointer-events-none"
              >
                <Mail size={14} className="inline mr-1" /> Email
              </label>
            </div>

            {/* Password */}
            <div className="relative">
              <input
                id="password"
                type={showPass ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder=" "
                className="peer w-full px-4 pt-5 pb-3 border rounded-xl border-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-200 bg-transparent transition"
                required
                minLength={6}
              />
              <label
                htmlFor="password"
                className="absolute left-4 top-3 text-sm text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm pointer-events-none"
              >
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

            {/* Remember + Forgot */}
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

            {/* Submit */}
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

          {/* Social Login */}
          <div className="mt-6">
            <div className="flex items-center gap-3">
              <div className="flex-1 h-px bg-gray-200" />
              <div className="text-xs text-gray-400">or continue with</div>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            <div className="mt-3 grid grid-cols-2 gap-3">
              <button
                onClick={() => alert("Google OAuth placeholder")}
                className="flex items-center justify-center gap-2 rounded-xl border px-3 py-2 bg-white"
              >
                <img
                  src="https://www.svgrepo.com/show/355037/google.svg"
                  alt="google"
                  className="w-4 h-4"
                />
                Google
              </button>
              <button
                onClick={() => alert("Facebook OAuth placeholder")}
                className="flex items-center justify-center gap-2 rounded-xl border px-3 py-2 bg-white"
              >
                <img
                  src="https://www.svgrepo.com/show/452196/facebook-1.svg"
                  alt="facebook"
                  className="w-4 h-4"
                />
                Facebook
              </button>
            </div>
          </div>

          {/* Signup Redirect */}
          <div className="mt-6 text-center text-sm text-gray-600">
            New here?{" "}
            <Link to="/signup" className="text-rose-600 font-medium">
              Create account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
