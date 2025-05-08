import React from "react";
import { BsSearch } from "react-icons/bs";
import { FiHeart, FiUser, FiShoppingCart, FiHome } from "react-icons/fi";

const HeaderTop = () => {
  return (
    <div className="font-sans">
      <header className="bg-white shadow px-4 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="text-2xl font-bold mx-auto sm:ml-12 sm:mr-0">Logo</div>

        <div className="w-full sm:w-auto flex-1 relative max-w-md">
          <input
            type="text"
            placeholder="Search"
            className="w-full h-10 pl-10 pr-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <BsSearch
            className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500"
            size={18}
          />
        </div>
        <nav className="hidden md:flex space-x-10 text-sm">
          <a href="#" className="text-gray-700 hover:text-black font-medium">
            Home
          </a>
          <a href="#" className="text-gray-500 hover:text-black font-medium">
            About
          </a>
          <a href="#" className="text-gray-500 hover:text-black font-medium">
            Categories
          </a>
          <a href="#" className="text-gray-500 hover:text-black font-medium">
            Contact Us
          </a>
        </nav>
        <div className="hidden sm:flex items-center space-x-4 text-xl mr-6 sm:mr-16">
          <button title="Favorites">
            <FiHeart />
          </button>
          <button title="Cart">
            <FiShoppingCart />
          </button>
          <button title="Profile">
            <FiUser />
          </button>
        </div>
      </header>
      <div className="sm:hidden fixed bottom-0 left-0 right-0 bg-white shadow-inner border-t border-gray-200 flex justify-around items-center py-2 z-50 text-xl">
        <button title="Home">
          <FiHome />
        </button>
        <button title="Favorites">
          <FiHeart />
        </button>
        <button title="Cart">
          <FiShoppingCart />
        </button>
        <button title="Profile">
          <FiUser />
        </button>
      </div>
    </div>
  );
};

export default HeaderTop;
