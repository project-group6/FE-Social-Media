import React, { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaYoutube } from "react-icons/fa";
import logoNav from "../assets/logoNav.svg";
import NavSearch from "./NavSearch";
import Avatar from "./Avatar";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo);
  };
  return (
    <div className="bg-black flex w-full justify-between items-center h-16 px-4 z-10">
      <div>
        <img src={logoNav} alt="logo" />
      </div>
      <NavSearch />

      <div className="hidden md:flex">
        <Avatar />
      </div>

      {/* Hamburger */}
      <div onClick={handleNav} className="md:hidden z-10 text-white">
        {nav ? <AiOutlineClose className="text-black" size={20} /> : <HiOutlineMenuAlt4 size={20} />}
      </div>

      {/* Mobile menu dropdown */}
      <div onClick={handleNav} className={nav ? "absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col" : "absolute left-[-100%]"}>
        <ul>
          <li className="border-b">Setting</li>
          <li className="border-b">Profile</li>
          <li className="border-b">Theme</li>
          <li className="border-b">Logout</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
