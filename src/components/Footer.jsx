import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-14 pb-5 px-5 md:px-20">
      <div className="w-11/12 mx-auto flex flex-wrap justify-between gap-10">
        {/* Logo and Newsletter */}
        <div className="w-full md:w-auto">
          <div className="bg-gray-600 text-white text-center py-4 mb-4">Logo</div>
          <h3 className="text-lg font-semibold text-green-400">
            Sign up for Our Newsletter
          </h3>
          <div className="mt-3 flex flex-wrap">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full md:w-auto p-2 bg-gray-800 text-white border-none outline-none"
            />
            <button className="bg-white text-gray-900 px-4 py-2 w-full md:w-auto mt-2 md:mt-0">
              Subscribe
            </button>
          </div>
        </div>

        {/* Sections Container */}
        <div className="flex flex-wrap md:flex-nowrap gap-x-10 gap-y-8 w-full md:w-auto">
          {/* Department Section */}
          <div className="w-full md:w-auto">
            <h3 className="text-lg font-semibold text-green-400">Department</h3>
            <ul className="mt-3 space-y-2">
              <li>Water Drainage Solutions</li>
              <li>Gas Pipeline Services</li>
              <li>Construction Services</li>
              <li>Underground Solutions</li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="w-full md:w-auto">
            <h3 className="text-lg font-semibold text-green-400">Company</h3>
            <ul className="mt-3 space-y-2">
              <li>Privacy Policy</li>
              <li>Terms and Conditions</li>
              <li>Complaints Policy</li>
              <li>Contact and Support</li>
            </ul>
          </div>

          {/* Location Section */}
          <div className="w-full md:w-auto">
            <h3 className="text-lg font-semibold text-green-400">Our Location</h3>
            <p className="mt-3">
              B-14 Collins Street West <br /> Victoria 2386 <br /> Iorems Colerfes
              state
            </p>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="flex justify-center items-center w">
      <div className="mt-10 border-t    border-gray-700 pt-5 flex w-11/12 items-center mx-auto   gap-5">
        <p className="w-full ">
          careers@yourdomain.com
        </p>
        <p className="w-full">
          Copyright Up Construction All Rights Reserved Designed by
          <span className="text-green-400"> Civil Engineer</span>
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
