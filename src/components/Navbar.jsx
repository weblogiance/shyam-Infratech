import React, { useState } from "react";
import { BiMailSend } from "react-icons/bi";
import { MdCallMissedOutgoing } from "react-icons/md";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  window.onscroll = () => {
    setScroll(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div
      className={` fixed top-0 w-full ${scroll ? "shadow-md bg-white text-gray-500" : "text-black"} transition-all duration-400 ease-linear z-[99]`}
    >
      <div className="w-10/12 flex mx-auto p-5 bg-transparent transition-all duration-500 ease-in-out">
        <nav className="flex justify-between items-center w-full">
          {/* Logo */}
          <div>
            <h1>LOGO</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-x-8">
            <ul className="flex items-center gap-x-5 tracking-wide text-xl">
              <li className="cursor-pointer hover:text-blue-500">Home</li>
              <li className="cursor-pointer hover:text-blue-500">About Us</li>
              <li className="cursor-pointer hover:text-blue-500">Our Verticals</li>
              <li className="cursor-pointer hover:text-blue-500">Career</li>
              <li className="cursor-pointer hover:text-blue-500">Contact Us</li>
            </ul>
            <div className="flex gap-x-3">
              <button className="flex items-center gap-x-2 border p-2 rounded-xl">
                <BiMailSend size={25} className="animate-pulse" /> Send To Mail
              </button>
              <button className="flex items-center gap-x-2 border p-2 rounded-xl bg-gradient-to-r to-blue-500 from-green-500 text-white capitalize">
                <MdCallMissedOutgoing size={25} className="animate-pulse" /> Contact to team
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full bg-white w-3/4 shadow-md p-5 transform ${menuOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-500 ease-in-out md:hidden`}
      >
        <button onClick={() => setMenuOpen(false)} className="absolute top-5 right-5">
          <AiOutlineClose size={30} />
        </button>
        <ul className="flex flex-col items-start gap-y-5 mt-10 text-lg">
          <li className="cursor-pointer hover:text-blue-500">Home</li>
          <li className="cursor-pointer hover:text-blue-500">About Us</li>
          <li className="cursor-pointer hover:text-blue-500">Our Verticals</li>
          <li className="cursor-pointer hover:text-blue-500">Career</li>
          <li className="cursor-pointer hover:text-blue-500">Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
