import React, { useState, useEffect } from "react";
import { Link, useLocation, Outlet, useNavigate } from "react-router-dom";
import UserSidebar from "./UserSidebar";
import Logo from "../../assets/logo.jpg";

const FoundationDashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  // LIVE CLOCK
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  // LOGOUT
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="h-screen w-full bg-[#dfe6ff] flex flex-col overflow-hidden">
      {/* ================= HEADER ================= */}
      <header
        className="
        w-full h-20 flex items-center justify-between
        px-6 bg-white/80 backdrop-blur-xl border-b
        shadow-[0_6px_18px_rgba(0,0,0,0.15)]
        sticky top-0 z-50
      "
      >
        {/* Mobile Menu */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* LOGO + NAME */}
        <div className="flex items-center gap-4 ml-4 md:ml-14">
          <img
            src={Logo}
            className="
            w-14 h-14 rounded-2xl border
            shadow-[6px_6px_14px_#bfc6d6,-6px_-6px_14px_#ffffff]
          "
            alt="logo"
          />
          <h2
            className="
            font-bold text-gray-800 
            text-lg md:text-xl tracking-wide
          "
          >
            SAURAV KUMAR
          </h2>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-6">
          {/* Date */}
          <div
            className="
            px-4 py-2 bg-white rounded-lg border 
            shadow-[4px_4px_10px_#c9d3e6,-4px_-4px_10px_#ffffff]
            text-gray-700
          "
          >
            {time.toLocaleDateString("en-IN")}
          </div>

          {/* Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => setProfileOpen(!profileOpen)}
              className="
                px-4 py-1 text-sm font-medium rounded-full 
                bg-gradient-to-r from-cyan-100 to-blue-100
                hover:shadow-lg shadow-md border
              "
            >
              👤 Profile
            </button>

            {profileOpen && (
              <div
                className="
                  absolute right-0 mt-2 w-48 bg-white 
                  rounded-xl shadow-2xl border z-50 animate-[fadeIn_.25s_ease]
                "
              >
                <Link
                  to="/foundation-dashboard/profile"
                  className="block px-4 py-2 hover:bg-gray-100 text-sm"
                  onClick={() => setProfileOpen(false)}
                >
                  My Profile
                </Link>

                <button
                  className="block w-full text-left px-4 py-2 hover:bg-red-50 text-sm text-red-600"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* ================ MAIN AREA ================= */}
      <div className="flex flex-1 overflow-hidden">
        {/* ================= SIDEBAR ================= */}
        <aside
          className={`
            w-64 backdrop-blur-xl bg-white/80
            shadow-[8px_0_20px_rgba(0,0,0,0.1)]
            border-r h-full fixed md:relative z-40 top-20 md:top-0
            transition-all duration-500
            ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
          `}
        >
          <div
            className="overflow-y-auto pt-4"
            style={{ height: "calc(100vh - 90px)" }}
          >
            {UserSidebar.map((menu, index) => {
              const active = location.pathname === menu.path;

              return (
                <Link
                  key={index}
                  to={menu.path}
                  onClick={() => setOpen(false)}
                  className={`
                  flex items-center gap-4 px-6 py-3 mb-2 text-sm font-medium
                  rounded-lg transition-all
                  ${
                    active
                      ? "text-white bg-gradient-to-r from-blue-600 to-cyan-500 shadow-lg scale-[1.03]"
                      : "text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 hover:shadow"
                  }
                `}
                >
                  <span className="text-lg">{menu.icon}</span>
                  {menu.name}
                </Link>
              );
            })}
          </div>
        </aside>

        {/* ================= CONTENT ================= */}
        <main className="flex-1 bg-[#eaf1ff] overflow-auto p-6 mt-20 md:mt-0">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default FoundationDashboard;
