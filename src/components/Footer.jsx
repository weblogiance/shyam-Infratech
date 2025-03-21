import { FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdCall } from "react-icons/md";

const Footer = () => {
    return (
        <footer className="bg-gray-100 text-gray-700  py-10  ">
            <div className=" w-10/12 mx-auto">
                <div className="mx-auto flex flex-col md:flex-row md:justify-between items-start">
                    <div className="text-center md:text-left">
                        <h2 className="text-xl font-bold">Shyam infratech</h2>
                        <p className="text-sm mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <div className="mt-3 flex gap-x-8">
                             <div className=" text-center space-y-1">
                                 <span className="flex items-center gap-x-2"><MdCall size={20}/> Contact To Team</span>
                                 <h1>+91 95445 88501</h1>
                             </div>
                             <div  className=" text-center space-y-1">
                                  <span className="flex items-center gap-x-2"><MdOutlineMailOutline size={20}/>Send To Email</span>
                                  <h1>weblogiance@gmail.com</h1>
                             </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-28 mt-6 md:mt-0">   
                        <div>
                            <h3 className="font-semibold text-xl ">Company</h3>
                            <ul className="text-base space-y-2 mt-3">
                                <li>About</li>
                                <li>Our Verticals</li>
                                <li>Clients</li>
                                <li>Career</li>
                                <li>Contact us</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold text-xl">Resources</h3>
                            <ul className="text-base space-y-2 mt-3">
                                <li>Documentation</li>
                                <li>FAQ</li>
                                <li>Support</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold text-xl">Social</h3>
                            <ul className="text-base space-y-2 mt-3 flex flex-col items-center cursor-pointer md:items-start">
                                <li className="flex items-center gap-2"><FaTwitter /> X (Twitter)</li>
                                <li className="flex items-center gap-2"><FaLinkedin /> LinkedIn</li>
                                <li className="flex items-center gap-2"><FaYoutube /> YouTube</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className=" mx-auto mt-10 flex flex-col md:flex-row justify-between items-center border-t pt-6 text-sm">
                    <p >&copy; {new Date().getFullYear()} Shyam infratech  All rights reserved</p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <p className="hover:underline cursor-pointer">Privacy Policy</p>
                        <p className="hover:underline cursor-pointer">Terms of Use</p>
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
