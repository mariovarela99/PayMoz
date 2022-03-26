import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/home";

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<h1> Page Not Found </h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
