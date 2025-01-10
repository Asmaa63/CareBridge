import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className=" w-full z-50 bg-white shadow-sm py-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center px-4">
          <div className="bg-[#2c5899] text-white font-bold text-4xl px-2 py-1 rounded">
            CBR
          </div>
          <div className="ml-2">
            <h1 className="text-3xl font-bold text-[#2c5899]">CareBridge</h1>
            <p className="text-lg text-gray-500">Rehab</p>
          </div>
        </div>

        {/* Contact Info and Hamburger Menu */}
        <div className="flex items-center">
          {/* Contact Info Section (Visible on md and above) */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="bg-[#2c5899] text-white p-3 rounded-full">
                <FaEnvelope className="text-white text-2xl" />
              </div>
              <div className="leading-tight">
                <p className="text-lg text-gray-500">MAIL US</p>
                <p className="text-md text-[#2c5899] font-bold">
                  freepsdfreebies.com
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="bg-[#2c5899] text-white p-3 rounded-full">
                <FaPhone className="text-white text-2xl" />
              </div>
              <div className="leading-tight">
                <p className="text-lg text-gray-500">CALL US</p>
                <p className="text-md text-[#2c5899] font-bold">+123 4567 8900</p>
              </div>
            </div>
          </div>

          {/* Hamburger Menu Icon (Visible on small screens) */}
          <div className="md:hidden flex items-center px-4">
            <button
              onClick={toggleMenu}
              className="text-[#2c5899] text-2xl focus:outline-none ml-4"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation and Contact Info for Small Screens */}
      <nav
        className={`${
          menuOpen ? 'block' : 'hidden'
        } md:block bg-gray-100 mt-3`}
      >
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-8 py-3">
          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-[#2c5899] text-xl font-semibold hover:underline"
            >
              Home
            </Link>
            <Link
              to="/About"
              className="text-gray-700 text-xl font-semibold hover:text-[#2c5899] hover:underline"
            >
              About
            </Link>
            <Link
              to="/Services"
              className="text-gray-700 text-xl font-semibold hover:text-[#2c5899] hover:underline"
            >
              Services
            </Link>
            <Link
              to="/Contact"
              className="text-gray-700 text-xl font-semibold hover:text-[#2c5899] hover:underline"
            >
              Contact us
            </Link>
          </div>

          {/* Contact Info Section for Small Screens */}
          <div className="flex flex-col md:hidden space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-[#2c5899] text-white p-2 rounded-full">
                <FaEnvelope className="text-white text-2xl" />
              </div>
              <div>
                <p className="text-sm text-gray-500 leading-tight">MAIL US</p>
                <p className="text-sm text-[#2c5899] font-bold leading-tight">
                  freepsdfreebies.com
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="bg-[#2c5899] text-white p-2 rounded-full">
                <FaPhone className="text-white text-2xl" />
              </div>
              <div>
                <p className="text-sm text-gray-500 leading-tight">CALL US</p>
                <p className="text-sm text-[#2c5899] font-bold leading-tight">
                  +123 4567 8900
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
