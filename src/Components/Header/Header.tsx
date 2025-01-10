import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="w-full z-50 bg-white shadow-sm py-3">
  <div className="container mx-auto flex items-center justify-between px-4 xs:px-2">
    <div className="flex items-center space-x-4 xs:space-x-2">
      <div className="bg-[#2c5899] text-white font-bold text-4xl px-2 py-1 rounded xs:text-3xl">
        CBR
      </div>
      <div>
        <h1 className="text-3xl font-bold text-[#2c5899] xs:text-2xl">CareBridge</h1>
        <p className="text-lg text-gray-500 xs:text-md">Rehab</p>
      </div>
    </div>

    <div className="flex items-center">
      <div className="hidden md:flex items-center space-x-6 xs:space-x-4">
        <div className="flex items-center space-x-3 xs:space-x-2">
          <div className="bg-[#2c5899] text-white p-3 rounded-full">
            <FaEnvelope className="text-white text-2xl xs:text-xl" />
          </div>
          <div className="leading-tight">
            <p className="text-md text-gray-500 xs:text-sm">MAIL US</p>
            <p className="text-lg text-[#2c5899] font-bold xs:text-md">
              freepsdfreebies.com
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-3 xs:space-x-2">
          <div className="bg-[#2c5899] text-white p-3 rounded-full">
            <FaPhone className="text-white text-2xl xs:text-xl" />
          </div>
          <div className="leading-tight">
            <p className="text-md text-gray-500 xs:text-sm">CALL US</p>
            <p className="text-lg text-[#2c5899] font-bold xs:text-md">
              +123 4567 8900
            </p>
          </div>
        </div>
      </div>

      <div className="md:hidden flex items-center">
        <button
          onClick={toggleMenu}
          className="text-[#2c5899] text-3xl focus:outline-none ml-2"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </div>
  </div>

  <nav
    className={`${
      menuOpen ? 'block' : 'hidden'
    } md:block bg-gray-100 mt-3 xs:mt-2 animate-slideUp`}
  >
    <div className="container mx-auto px-4 xs:px-2 flex flex-col md:flex-row justify-center space-y-3 md:space-y-0 md:space-x-6 py-3">
      <Link
        to="/"
        className="text-gray-700 hover:text-[#2c5899] text-xl font-semibold xs:text-lg"
      >
        Home
      </Link>
      <Link
        to="/About"
        className="text-gray-700 text-xl font-semibold hover:text-[#2c5899] xs:text-lg"
      >
        About
      </Link>
      <Link
        to="/Services"
        className="text-gray-700 text-xl font-semibold hover:text-[#2c5899] xs:text-lg"
      >
        Services
      </Link>
      <Link
        to="/Contact"
        className="text-gray-700 text-xl font-semibold hover:text-[#2c5899] xs:text-lg"
      >
        Contact us
      </Link>
    </div>
  </nav>
</header>


  );
};

export default Header;
