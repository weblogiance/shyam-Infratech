import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#011B24] text-white pt-14 pb-5 px-5 md:px-20">
      <div className="w-11/12 mx-auto flex flex-wrap justify-between gap-10">
        {/* Logo and Newsletter */}
        <div className="w-full md:w-auto">
          <div className="bg-gray-600 text-white text-center py-4 mb-4">Logo</div>
          <h3 className="text-3xl my-8 font-semibold text-[#78C448]">
            Sign up for Our Newsletter
          </h3>
          <div className="mt-3 flex gap-2 flex-wrap">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full md:w-auto p-3 px-6 rounded-xl bg-[#092E3A] text-white border-none outline-none"
            />
            <button className="bg-white text-gray-900 rounded-xl px-4 py-2 w-full md:w-auto mt-2 md:mt-0">
              Subscribe
            </button>
          </div>
        </div>

        {/* Sections Container */}
        <div className="flex flex-wrap md:flex-nowrap lg:gap-x-40 gap-y-8 w-full md:w-auto">
          {/* Department Section */}
          <div className="w-full md:w-auto">
            <h3 className="text-2xl font-semibold text-[#78C448]">Department</h3>
            <ul className="mt-3 text-lg space-y-2">
              <li>Water Drainage Solutions</li>
              <li>Gas Pipeline Services</li>
              <li>Construction Services</li>
              <li>Underground Solutions</li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="w-full md:w-auto">
            <h3 className="text-2xl font-semibold text-[#78C448]">Company</h3>
            <ul className="mt-3 text-lg space-y-2">
              <li>Privacy Policy</li>
              <li>Terms and Conditions</li>
              <li>Complaints Policy</li>
              <li>Contact and Support</li>
            </ul>
          </div>

          {/* Location Section */}
          <div className="w-full md:w-auto">
            <h3 className="text-2xl font-semibold text-[#78C448]">Our Location</h3>
            <p className="mt-3 text-lg">
              B-14 Collins Street West <br /> Victoria 2386 <br /> Iorems Colerfes
              state
            </p>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="flex lg:flex-row flex-col  justify-center items-center w">
      <div className="mt-10 border-t  max-sm:text-center  border-gray-700 pt-5 flex lg:flex-row flex-col w-11/12 items-center mx-auto   gap-5">
        <p className="w-full text-lg">
          careers@yourdomain.com
        </p>
        <p className="w-full text-lg">
          Copyright Up Construction All Rights Reserved Designed by
          <span className="text-[#78C448]"> Civil Engineer</span>
        </p>
        
        <div className="flex gap-x-3">
          <span className="bg-gray-800 p-2 rounded-full">
            <FaFacebook size={25} />
          </span>
          <span className="bg-gray-800 p-2 rounded-full">
            <FaInstagram size={25} />
          </span>
          <span className="bg-gray-800 p-2 rounded-full">
            <FaTwitter size={25} />
          </span>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
