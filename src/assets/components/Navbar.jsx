import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Paid Work", path: "/paidwork" },
    { name: "Reels", path: "/reels" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-zinc-900/90 backdrop-blur-sm shadow-xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 text-gray-50 hover:text-white transition">
          <img
            src="/logo.jpg"
            alt="SN Filmz logo"
            className="w-12 h-12 rounded-full object-cover border-2 border-amber-400 p-[2px]"
          />
          <div className="text-xl font-semibold tracking-wider font-serif">SN Filmz</div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-10 text-gray-300 font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative py-1 text-lg hover:text-amber-400 transition-all duration-300 group ${
                location.pathname === link.path ? "text-amber-400 font-bold" : "text-gray-300"
              }`}
            >
              {link.name}
              <span
                className={`absolute bottom-0 left-0 w-full h-[3px] bg-amber-400 transition-all duration-300 transform ${
                  location.pathname === link.path ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}
              ></span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-200 hover:text-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 rounded-md p-2 transition"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
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
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-zinc-900/95 backdrop-blur-sm shadow-inner">
          <ul className="flex flex-col gap-4 p-6 text-gray-200">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block text-lg hover:text-amber-400 transition ${
                    location.pathname === link.path ? "text-amber-400 font-bold" : ""
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
