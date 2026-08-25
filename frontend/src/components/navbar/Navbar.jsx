import React from "react";

const Navbar = () => {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4">
        <div className="flex items-center gap-8">
          <a
            href=""
            className="font-bold text-3xl p-1.5 text-white bg-red-500 "
          >
            MN
          </a>
          <nav className="text-sm flex items-center space-x-4 font-semibold">
            <a href="">Home</a>
            <a href="">Movies</a>
            <a href="">Journey</a>
            <a href="">Characters</a>
          </nav>
        </div>

        <div className="flex items-center">
          <button className="bg-black text-sm text-white px-4 py-2 rounded-full">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
