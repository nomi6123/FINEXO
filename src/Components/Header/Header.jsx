"use client";

import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoIosPerson } from "react-icons/io";
import { FiMenu } from "react-icons/fi"; // Hamburger Icon
import { AiOutlineClose } from "react-icons/ai"; // Close Icon

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false); // State for Search Popup

  // Toggle Menu Handler
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close Menu Handler
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Toggle Login Popup
  const toggleLoginPopup = () => {
    setIsLoginOpen(!isLoginOpen);
  };

  // Toggle Search Popup
  const toggleSearchPopup = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  // Handle Search Submission
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    alert("Search submitted!"); // You can replace this with your own logic
    setIsSearchOpen(false); // Close the popup
  };

  // Handle Login Submission
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    alert("Login successful!");
    setIsLoginOpen(false);
  };

  return (
    <div className="w-full bg-[#07014C]   shadow-sm shadow-black text-black sticky top-0 z-50">
      {/* Main Header Container */}
      <div className="max-w-[1300px] mx-auto p-4 lg:p-5 flex justify-between items-center px-2 lg:px-3">
        {/* Logo */}
        <a href="#home">
          <h2 className="text-white font-bold text-2xl transition-colors hover:text-[#31C2E8]">
            Finexo
          </h2>
        </a>

        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden block">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isMenuOpen ? (
              <AiOutlineClose className="text-3xl text-[#31C2E8]" />
            ) : (
              <FiMenu className="text-3xl text-[#31C2E8]" />
            )}
          </button>
        </div>

        {/* Navigation */}
        <nav
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } lg:flex lg:flex-row flex-col 
           justify-center items-center absolute
            lg:static top-[68px] left-0 w-full lg:w-auto
             bg-[#07014C] lg:bg-transparent z-40 lg:z-auto lg:gap-3`}
        >
          {/* Links */}
          {[
            { href: "#home", label: "HOME" },
            { href: "#about", label: "ABOUT" },
            { href: "#services", label: "SERVICES" },
            { href: "#why", label: "WHY US" },
            { href: "#team", label: "TEAM" },
          ].map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={closeMenu}
              className="flex items-center gap-2 px-4 py-2 lg:py-0 hover:text-[#31C2E8] transition-colors"
            >
              {/* <div className="w-2 h-2 rounded-full bg-[#31C2E8]"></div> */}
              <span className="text-[17px] text-white hover:text-[#31C2E8] transition-colors">{link.label}</span>
            </a>
          ))}

          {/* Icons */}
          <div className="flex gap-4 mt-4 lg:mt-0 px-4 lg:px-0 justify-center items-center">
            <div className="flex justify-center items-center gap-1">
              <IoIosPerson
                className="text-[20px] text-white cursor-pointer hover:text-[#31C2E8] transition-colors"
                onClick={toggleLoginPopup}
              />
              <h2
                className="text-[17px] text-white hover:text-[#31C2E8] cursor-pointer transition-colors"
                onClick={toggleLoginPopup}
              >
                LOGIN
              </h2>
            </div>
            <FaSearch
              className="text-[18px] text-white cursor-pointer hover:text-[#31C2E8] transition-colors"
              onClick={toggleSearchPopup}
            />
          </div>
        </nav>
      </div>

      {/* Login Popup */}
      {isLoginOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 shadow-lg w-96">
            <h2 className="text-2xl font-bold mb-4  text-center">Login</h2>
            <form onSubmit={handleLoginSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#31C2E8]"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#31C2E8]"
                />
              </div>
              <div className="flex justify-between items-center">
                <button
                  type="button"
                  onClick={toggleLoginPopup}
                  className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#31C2E8] text-white rounded-lg hover:bg-[#259fc2] transition-colors"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Search Popup */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 shadow-lg w-96">
            <h2 className="text-2xl font-bold mb-4 text-center">Search</h2>
            <form onSubmit={handleSearchSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Type to search..."
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#31C2E8]"
                />
              </div>
              <div className="flex justify-between items-center">
                <button
                  type="button"
                  onClick={toggleSearchPopup}
                  className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#31C2E8] text-white rounded-lg hover:bg-[#259fc2] transition-colors"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
