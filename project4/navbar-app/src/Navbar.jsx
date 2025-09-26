import React, { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("Home");

  const links = ["Home", "About", "Services", "Contact"];

  return (
    <nav className="bg-pink-200 shadow-md">
      <div className="container mx-auto flex justify-center p-5 space-x-10">
        {links.map((link) => (
          <button
            key={link}
            onClick={() => setActive(link)}
            className={`relative text-xl font-semibold transition-all duration-300 transform 
              hover:scale-110 hover:text-pink-600 ${
                active === link ? "text-pink-700 font-bold" : "text-gray-700"
              }`}
          >
            {link}
            {/* underline animation for active link */}
            <span
              className={`absolute left-0 -bottom-1 h-[3px] bg-pink-600 transition-all duration-300 ${
                active === link ? "w-full" : "w-0"
              }`}
            ></span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
