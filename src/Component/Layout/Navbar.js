import React from "react";
import "./Navbar.module.css";
import classes from "./Navbar.module.css";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="container mx-auto flex items-center justify-between p-2">
        <div className="text-white font-bold text-xl flex items-center">
          <a className={`navbar-brand text-danger`} href="#homeSection">
            <p className={classes.logoStyle}>Shakti</p>
          </a>
        </div>

        {/* Menu for larger screens */}
        <div className="hidden font-bold text-sm lg:flex space-x-4">
          <a href="#homeSection" className="block text-black no-underline py-2">
            Home
          </a>
          <a
            href="#aboutSection"
            className="block text-black no-underline py-2">
            Who am I
          </a>
          <a href="#portfolio" className="block text-black no-underline py-2">
            portfolio
          </a>
          <a href="#catchUp" className="block text-black no-underline py-2">
            Let's catch up
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className="lg:hidden text-black focus:outline-none"
          onClick={toggleMenu}>
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="lg:hidden mt-2 text-md lg:flex space-x-4">
          <a href="#homeSection" className="block text-black no-underline py-2">
            Home
          </a>
          <a
            href="#aboutSection"
            className="block text-black no-underline py-2">
            Who am I
          </a>
          <a href="#portfolio" className="block text-black no-underline py-2">
            portfolio
          </a>
          <a href="#catchUp" className="block text-black no-underline py-2">
            Let's catch up
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
