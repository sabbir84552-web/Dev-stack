import { useState } from "react";
import logoImg from "../assets/logo-text.png";

export default function Nevebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white border-b border-slate-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Mobile Hamburger Menu Icon (Mobile View-e dekhabe) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-1.5 text-slate-600 hover:text-slate-900 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Brand Logo */}
        <div className="flex items-center">
          <img
            src={logoImg}
            alt="DevStack Logo"
            className="h-6 sm:h-7 w-auto object-contain"
          />
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold">
          <a href="#" className="hover:text-pink-500 font-bold">
            Home
          </a>
          <a href="#" className="hover:text-pink-500 transition">
            Technologies
          </a>
          <a href="#" className="hover:text-pink-500 transition">
            Projects
          </a>
          <a href="#" className="hover:text-pink-500 transition">
            About
          </a>
          <a href="#" className="hover:text-pink-500 transition">
            Contact
          </a>
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3 sm:gap-4 text-xs font-semibold ">
          <a
            href="#"
            className=" hover:bg-pink-500 px-4 py-2 rounded-full transition shadow-x hover:text-white"
          >
            Sign In
          </a>
          <a
            href="#"
            className=" hover:bg-pink-500 px-4 py-2 rounded-full transition shadow-xs hover:text-white"
          >
            Sign Up
          </a>
        </div>
      </div>

      {/* Mobile Nav Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-4 space-y-2 text-xs font-medium">
          <a href="#" className="block text-slate-600 hover:text-pink-500  py-1">
            Home
          </a>
          <a href="#" className="block text-slate-600 hover:text-pink-500 py-1">
            Technologies
          </a>
          <a href="#" className="block text-slate-600 hover:text-pink-500 py-1">
            Projects
          </a>
          <a href="#" className="block text-slate-600 hover:text-pink-500 py-1">
            About
          </a>
          <a href="#" className="block text-slate-600 hover:text-pink-500 py-1">
            Contact
          </a>
        </div>
      )}
    </header>
  );
}
