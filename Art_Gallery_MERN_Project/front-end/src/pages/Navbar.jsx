import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <nav className="sticky top-0 z-10 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <span className="text-2xl text-gray-900 font-semibold">
              My Logo
            </span>
            <div className="flex space-x-4 text-gray-900">
              <Link to={"/"}>Home</Link>
              <Link to={"/about"}>About</Link>
              <Link to={"/contact"}>Contact</Link>
              <Link to={"/addDigitalArts"}>Add Your Digital Arts</Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
