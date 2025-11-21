import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./index.css";

import Login from "./components/Login";
import Signup from "./components/SignUp";
import Help from "./page/Home/Help/Help";
import UserDashboard from "./page/User/UserDashboard";

import Events from "./page/Home/Events/Events";

import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Dashboard from "./page/Home/Dashboard/Dashboard";

function AppContent() {
  const location = useLocation();

  // ✅ Pages where Header/Footer should NOT appear
  const hideLayoutPaths = ["/login", "/signup"];

  const shouldHideLayout = hideLayoutPaths.includes(location.pathname);

  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/user" element={<UserDashboard />} />

        <Route path="/events" element={<Events />} />

        <Route path="/help" element={<Help />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* ✅ Conditionally show footer */}
      {!shouldHideLayout && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
