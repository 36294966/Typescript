import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from "../Assests/logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="relative">
      <div className="bg-blue-950  flex items-center justify-between max-w-[1500px] mx-auto p-4">
        <div className="flex  px-8 items-center">
          <img
            src={logo}
            alt="Logo"
            className="h-12 w-30 bg-center inline-block mr-16 z-50"
          />
        </div>
        <ul className="hidden md:flex p-4 mr-32 flex-1 justify-end space-x-16">
          <li className="cursor-pointer flex items-center">
            <Link
              to="/Marketplace"
              className="text-white border-b border-white w-auto inline-block"
            >
              Marketplace
            </Link>
          </li>
          <li className="cursor-pointer flex items-center">
            <Link
              to="/MoreInfo"
              className="text-white border-b border-white w-auto inline-block"
            >
              More Info
            </Link>
          </li>
        </ul>
        <div onClick={handleNav} className="block md:hidden z-50">
          {nav ? (
            <AiOutlineClose size={24} className="text-white" />
          ) : (
            <AiOutlineMenu size={24} className="text-white" />
          )}
        </div>
      </div>

      <div
        className={
          nav
            ? "fixed top-0 left-0 h-screen w-screen bg-black opacity-80 z-40 backdrop-blur-lg"
            : "hidden"
        }
        onClick={handleNav}
      ></div>
      <div
        className={
          nav
            ? "fixed top-0 left-0 h-[90%] w-full border-b border-b-gray-900 bg-blue-950 ease-in-out duration-500 z-40 transform translate-y-0"
            : "fixed top-0 left-0 h-[90%] w-full border-b border-b-gray-900 bg-blue-950 ease-in-out duration-500 z-40 transform -translate-y-full"
        }
      >
        <ul
          className={
            nav
              ? "uppercase mt-28 p-4 space-y-20 text-center md:hidden"
              : "uppercase mt-28 p-4 space-y-20 text-center hidden md:flex"
          }
        >
          <li className="cursor-pointer">
            <Link
              to="/Marketplace"
              onClick={handleNav}
              className="text-white border-b border-white w-auto inline-block"
            >
              Marketplace
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link
              to="/MoreInfo"
              onClick={handleNav}
              className="text-white border-b border-white w-auto inline-block"
            >
              More Info
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link
              to="/Sign in to Mint"
              onClick={handleNav}
              className="text-white border-b border-white w-auto inline-block"
            >
              Sign in to Mint
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;