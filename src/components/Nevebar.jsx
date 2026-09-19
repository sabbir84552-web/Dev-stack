import React, { useState } from "react";
import logoImg from "../assets/logo-text.png";

export default function Nevebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white border-b border-slate-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Left Section: Mobile Hamburger Icon / Desktop Brand Logo */}
        <div className="flex items-center">
          {/* Mobile Hamburger Menu Icon (Left on mobile) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-1.5 text-slate-600 hover:text-slate-900 focus:outline-none"
            aria-label="Toggle Menu"
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

          {/* Desktop Brand Logo (Left on desktop) */}
          <div className="hidden md:flex items-center gap-2">
            <img
              src={logoImg}
              alt="Dev Stack Logo"
              className="h-7 w-auto object-contain"
            />
          </div>
        </div>

        {/* Center Section: Mobile Brand Logo / Desktop Nav Links */}
        {/* Mobile Logo (Center on mobile) */}
        <div className="md:hidden flex items-center">
          <img
            src={logoImg}
            alt="Dev Stack Logo"
            className="h-6 w-auto object-contain"
          />
        </div>

        {/* Desktop Nav Links (Center on desktop) */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold text-slate-600">
          <a href="#" className="hover:text-pink-600 font-bold text-slate-900 transition-colors">
            Home
          </a>
          <a href="#technologies" className="hover:text-pink-600 transition-colors">
            Technologies
          </a>
          <a href="#" className="hover:text-pink-600 transition-colors">
            Projects
          </a>
          <a href="#" className="hover:text-pink-600 transition-colors">
            About
          </a>
          <a href="#" className="hover:text-pink-600 transition-colors">
            Contact
          </a>
        </nav>

        {/* Right Section: Auth Buttons (Sign In Text + Sign Up Pill) */}
        <div className="flex items-center gap-3 sm:gap-4 text-xs font-semibold">
          {/* Sign In: Text Button */}
          <a
            href="#"
            className="text-slate-700 hover:text-pink-600 transition-colors px-1.5 py-1"
          >
            Sign In
          </a>

          {/* Sign Up: Filled Pill Button */}
          <a
            href="#"
            className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 text-white px-4 py-2 rounded-full hover:opacity-90 transition-all shadow-xs"
          >
            Sign Up
          </a>
        </div>
      </div>

      {/* Mobile Nav Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-4 space-y-2 text-xs font-medium">
          <a href="#" className="block text-slate-900 font-semibold hover:text-pink-600 py-1">
            Home
          </a>
          <a href="#technologies" className="block text-slate-600 hover:text-pink-600 py-1">
            Technologies
          </a>
          <a href="#" className="block text-slate-600 hover:text-pink-600 py-1">
            Projects
          </a>
          <a href="#" className="block text-slate-600 hover:text-pink-600 py-1">
            About
          </a>
          <a href="#" className="block text-slate-600 hover:text-pink-600 py-1">
            Contact
          </a>
        </div>
      )}
    </header>
  );
}