import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./index.css";

import Header from "./Header";
import Navbar from "./Navbar";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
    </BrowserRouter>
  );
}

export default App;
