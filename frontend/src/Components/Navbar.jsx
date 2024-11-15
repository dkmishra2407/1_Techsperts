import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"
const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-teal-500 to-teal-700 p-4 shadow-lg z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">
          <Link to="/">FinanceCo</Link>
        </h1>
        <div className="hidden md:flex space-x-6">
          <Link className="text-white hover:text-gray-300 transition-colors duration-300" to="/">Home</Link>
          <Link className="text-white hover:text-gray-300 transition-colors duration-300" to="/application">Loan Application</Link>
          <Link className="text-white hover:text-gray-300 transition-colors duration-300" to="/loan-products">Loan Products</Link>
          <Link className="text-white hover:text-gray-300 transition-colors duration-300" to="/dashboard">Dashboard</Link>
          <Link className="text-white hover:text-gray-300 transition-colors duration-300" to="/consultancy">Consultancy</Link>
        </div>
        <div className="md:hidden">
          <button type="button" className="text-white focus:outline-none focus:ring-2 focus:ring-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </nav>

  );
};

export default Navbar;
