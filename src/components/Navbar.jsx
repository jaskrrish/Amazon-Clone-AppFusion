import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { BsCartPlus } from "react-icons/bs";
import { IconContext } from "react-icons";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="p-5 bg-amazon_blue flex items-center justify-between">
      <img
        className=""
        width={100}
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="Amazon Logo"
      />
      <div className="flex">
        <div>
          <IconContext.Provider value={{ color: "white", size: "2em" }}>
            <IoLocationOutline />
          </IconContext.Provider>
        </div>
        <div>
          <p className="text-gray-300 text-sm">
            Delivering to Chennai- 600 XXX
          </p>
          <p className="text-white font-semibold">Update Location</p>
        </div>
      </div>
      <div className="flex items-center m-2 rounded-full bg-yellow-400 hover:bg-yellow-500">
        <input
          className="p-4 h-8 w-64 rounded-l-full"
          type="text"
          placeholder="Search"
        />
        <button className="p-2 rounded-r-full bg-yellow-500 hover:bg-yellow-600">
          <FaSearch />
        </button>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative text-white group">
          <p className="font-semibold">Hello, SignIn</p>
          <div className="flex items-center cursor-pointer">
            <p className="font-bold text-lg">Account & Lists</p>
            <div className="m-1">
              <IoIosArrowDropdownCircle />
            </div>
          </div>

          <div className="absolute right-auto left-0 mt-2 w-[300px] rounded-md shadow-lg bg-white ring-1 ring-black z-10 ring-opacity-5 group-hover:block hidden">
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <div className="flex gap-5">
                <div
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  <p className="font-bold text-xl mb-2">Your Account</p>
                  <p className="mt-1.5 mb-1">Your Account</p>
                  <p className="mt-1.5 mb-1">Your Orders</p>
                  <p className="mt-1.5 mb-1">Your Wish Lists</p>
                  <p className="mt-1.5 mb-1">Your Recommendation</p>
                </div>
                <div
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  <p className="font-bold text-xl mb-2">Your Lists</p>
                  <p className="mt-1.5 mb-1">Create a Wish List</p>
                  <p className="mt-1.5 mb-1">Wish from Any Website</p>
                  <p className="mt-1.5 mb-1">Baby Wishlists</p>
                  <p className="mt-1.5 mb-1">Discover Your Style</p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  <button className="bg-[#ff9900] w-[100px] text-center rounded-3xl px-3 font-bold">
                    Sign In
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="hover:text-white font-semibold mx-3 text-gray-300">
          <p>Returns</p>
          <p>& Orders</p>
        </div>
        <IconContext.Provider value={{ color: "white", size: "2em" }}>
          <BsCartPlus />
        </IconContext.Provider>
      </div>
    </header>
  );
};

export default Navbar;
