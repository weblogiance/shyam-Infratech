import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#011B24] text-white pt-14 pb-5 px-5 md:px-20">
      <div className="w-11/12 mx-auto flex flex-wrap md:flex-nowrap justify-between gap-10 lg:gap-x-30">
        {/* Logo and Newsletter */}
        <div className="w-full md:w-1/3">
          <div className="bg-gray-600 text-white text-center py-4 mb-4 rounded-lg">
            Logo
          </div>
          <h3 className="text-3xl my-6 font-semibold text-[#78C448]">
            Sign up for Our Newsletter
          </h3>
          <div className="mt-3 flex flex-wrap gap-2">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full md:w-auto flex-grow p-3 px-6 rounded-xl bg-[#092E3A] text-white border-none outline-none"
            />
            <button className="bg-white text-gray-900 rounded-xl px-4 py-2 w-full md:w-auto">
              Subscribe
            </button>
          </div>
        </div>

        {/* Sections */}
        <div className="flex flex-wrap justify-between w-full md:w-2/3 gap-y-8">
          {/* Department */}
          <div className="w-full sm:w-1/3">
            <h3 className="text-2xl font-semibold text-[#78C448]">Department</h3>
            <ul className="mt-3 text-lg space-y-2">
              <li>Water Drainage Solutions</li>
              <li>Gas Pipeline Services</li>
              <li>Construction Services</li>
              <li>Underground Solutions</li>
            </ul>
          </div>

          {/* Company */}
          <div className="w-full sm:w-1/3">
            <h3 className="text-2xl font-semibold text-[#78C448]">Company</h3>
            <ul className="mt-3 text-lg space-y-2">
              <li>Privacy Policy</li>
              <li>Terms and Conditions</li>
              <li>Complaints Policy</li>
              <li>Contact and Support</li>
            </ul>
          </div>

          {/* Location */}
          <div className="w-full sm:w-1/3">
            <h3 className="text-2xl font-semibold text-[#78C448]">Our Location</h3>
            <p className="mt-3">
              B-14 Collins Street West <br /> Victoria 2386 <br /> Iorems Colerfes state
            </p>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="w-11/12 mx-auto mt-10 border-t border-gray-700 pt-5 flex flex-wrap justify-between  items-center gap-5 text-center md:text-left">
        <p className="lg:text-lg max-sm:text-center flex max-sm:justify-center max-sm:items-center max-sm:w-full">careers@yourdomain.com</p>
        <p>
          Copyright Up Construction All Rights Reserved | Designed by
          <span className="text-[#78C448]"> Civil Engineer</span>
        </p>
        <div className="flex max-sm:items-center max-sm:justify-center max-sm:w-full gap-3">
          {[FaFacebook, FaInstagram, FaTwitter].map((Icon, index) => (
            <span key={index} className="bg-gray-800 p-2 rounded-full">
              <Icon size={25} />
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
