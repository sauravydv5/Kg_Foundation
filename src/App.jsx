import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Header from "./context/Header/Header";
import Dashboard from "./page/Dashboard/Dashboard";
import Login from "./components/Login";
import Signup from "./components/SignUp";
import Shop from "./page/Shop/Shop";
import Appointment from "./page/Appointment/Appointment";
import Events from "./page/Events/Events";
import Company from "./page/Company/Company";
import Help from "./page/Help/Help";
import Pricing from "./page/Pricing/Pricing";
import Services from "./page/Services/Services";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Dashboard route */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/events" element={<Events />} />
        <Route path="/company" element={<Company />} />
        <Route path="/help" element={<Help />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/services" element={<Services />} />
        {/* <Route path="/profile" element={<Profile />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
