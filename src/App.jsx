import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./index.css";

import Header from "./context/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
}

export default App;
