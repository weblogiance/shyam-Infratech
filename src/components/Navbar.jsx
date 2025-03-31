import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 w-full z-[99] transition-all duration-300 ${
        scroll ? "shadow-md bg-white text-gray-900" : "lg:text-white "
      }`}
    >
      <div className="w-11/12 mx-auto flex justify-between items-center py-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold">LOGO</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-x-8  font-medium">
          {["Home", "About Us", "Our Verticals", "Career", "Contact Us"].map(
            (item) => (
              <li key={item} className="cursor-pointer hover:text-blue-500">
                {item}
              </li>
            )
          )}
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex gap-x-5">
          <FaFacebook size={24} className="cursor-pointer hover:text-blue-500" />
          <FaTwitter size={24} className="cursor-pointer hover:text-blue-500" />
          <FaInstagram size={24} className="cursor-pointer hover:text-blue-500" />
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white shadow-lg p-6 transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <button onClick={() => setMenuOpen(false)} className="absolute top-5 right-5">
          <AiOutlineClose size={28} />
        </button>
        <ul className="flex flex-col gap-6 mt-14 text-xl font-medium">
          {["Home", "About Us", "Our Verticals", "Career", "Contact Us"].map(
            (item) => (
              <li key={item} className="cursor-pointer hover:text-blue-500">
                {item}
              </li>
            )
          )}
        </ul>
        <div className="mt-8 flex gap-x-6">
          <FaFacebook size={28} className="cursor-pointer hover:text-blue-500" />
          <FaTwitter size={28} className="cursor-pointer hover:text-blue-500" />
          <FaInstagram size={28} className="cursor-pointer hover:text-blue-500" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
