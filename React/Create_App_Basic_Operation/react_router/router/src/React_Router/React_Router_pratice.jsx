import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Navbar from "./Navbar/Navbar";
import Login from "./Components/Login";
import Error from "./Components/Error";

const react_router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/Login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default react_router;
