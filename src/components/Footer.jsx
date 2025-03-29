import React from "react";
import { FaFacebook ,FaInstagram,FaTwitter} from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-14 pb-5 px-5 md:px-20">
      <div className="w-11/12 mx-auto flex justify-between gap-20">
        {/* Logo and Newsletter */}
        <div>
          <div className="bg-gray-600 text-white text-center py-4 mb-4">Logo</div>
          <h3 className="text-lg font-semibold text-green-400">Sign up Our Newsletter</h3>
          <div className="mt-3 flex">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full p-2 bg-gray-800 text-white border-none outline-none"
            />
            <button className="bg-white text-gray-900 px-4 py-2">Subscribe</button>
          </div>
        </div>

        {/* Department Section */}
        <div className="flex gap-x-32">
        <div>
          <h3 className="text-lg font-semibold text-green-400">Department</h3>
          <ul className="mt-3 space-y-2">
            <li>Water Drainage Solutions</li>
            <li>Gas Pipeline Services</li>
            <li>Construction Services</li>
            <li>Underground Solutions</li>
          </ul>
        </div>

        {/* Company Section */}
        <div>
          <h3 className="text-lg font-semibold text-green-400">Company</h3>
          <ul className="mt-3 space-y-2">
            <li>Privacy Policy</li>
            <li>Terms and Condition</li>
            <li>Complaints Policy</li>
            <li>Contact and support</li>
          </ul>
        </div>

        {/* Location Section */}
        <div>
          <h3 className="text-lg font-semibold text-green-400">Our Location</h3>
          <p className="mt-3">
            B-14 Collins Street West <br /> Victoria 2386 <br /> Iorems Colerfes state
          </p>
        </div>
        </div>
      </div>
      
      {/* Footer Bottom Section */}
      <div className="mt-10 border-t border-gray-700 pt-5 flex flex-col md:flex-row items-center justify-between">
        <p>careers@yourdomain.com</p>
        <p>
          Copyright Up Construction All Rights Reserved Designed by
          <span className="text-green-400"> Civil Engineer</span>
        </p>
        <div className="flex space-x-4 mt-3 md:mt-0">
          <span className="bg-gray-800 p-2 rounded-full"><FaFacebook size={25}/></span>
          <span className="bg-gray-800 p-2 rounded-full"><FaInstagram size={25}/></span>
          <span className="bg-gray-800 p-2 rounded-full"><FaTwitter size={25}/></span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
