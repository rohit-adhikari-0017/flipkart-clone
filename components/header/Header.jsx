import React from "react";
import Image from "next/image";
import { IoMdContact } from "react-icons/io";
import { IoMdCart } from "react-icons/io";
import { PiStorefrontFill } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";

function Header() {
  return (
    <div className="header border-b border-gray-200">
      {/* Main container with responsive padding */}
      <div className="container  px-4 flex  justify-between items-center py-4">
        {/* Logo Section */}
        <div className="logo flex-shrink-0">
          <Image src="/images/logo.svg" width={150} height={100} alt="logo" />
        </div>

        {/* Search Bar Section */}
        <div className="search-bar w-full lg:w-1/2 xl:w-[55% ] mt-4 lg:mt-0">
          <input
            type="text"
            placeholder="Search for Products"
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* User Actions Section */}
        <ul className="user-login-wrapper gap-9 flex w-full lg:w-auto justify-around lg:justify-end mt-4 lg:mt-0 space-x-4">
          <li className="login">
            <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500">
              <IoMdContact className="text-xl" />
              <span>Login</span>
              <span>
                <IoIosArrowDown />
              </span>
            </button>
          </li>
          <li className="cart">
            <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500">
              <IoMdCart className="text-xl" />
              <span>Cart</span>
            </button>
          </li>
          <li className="seller">
            <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500">
              <PiStorefrontFill className="text-xl" />
              <span>Become a Seller</span>
            </button>
          </li>
          <li className="seller">
            <button className="flex items-center justify-center space-x-2 text-gray-600 hover:text-blue-500">
              <BsThreeDotsVertical />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
