import React from 'react';
import { motion } from 'framer-motion';
import { IoWaterSharp } from "react-icons/io5";
import { ImPower } from "react-icons/im";
import { MdOutlineSolarPower } from "react-icons/md";
import { GiGasStove } from "react-icons/gi";
import { BsWind } from "react-icons/bs";
import { MdAutorenew } from "react-icons/md";

const services = [
  {
    icon: <IoWaterSharp className="w-12 h-12 text-blue-500" />,
    title: "Water Management",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    bgColor: "bg-white",
    buttonColor: " bg-gradient-to-r to-blue-500 from-green-500 text-white",
    textColor: "text-black"
  },
  {
    icon: <ImPower className="w-12 h-12 text-white" />,
    title: "Power Solutions",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    bgImage: "https://img.freepik.com/free-photo/picture-tree-tv-antenna-silhouettes-roof-sunset-zagreb-croatia_181624-12524.jpg?t=st=1742634529~exp=1742638129~hmac=1a7ad8375018908824a21a8032617e0b02c2f8662bbcebf01878bd14aa5c669f&w=996",
    buttonColor: "bg-white",
    textColor: "text-white"
  },
  {
    icon: <GiGasStove className="w-12 h-12 text-blue-500 " />,
    title: "Gas Pipline",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    bgColor: "bg-white",
    buttonColor: "bg-gradient-to-r to-blue-500 from-green-500 text-white",
    textColor: "text-black"
  },
  {
    icon: <MdOutlineSolarPower className="w-12 h-12 text-white" />,
    title: "solar Energy",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    bgImage: "https://img.freepik.com/free-photo/beautiful-alternative-energy-plant-with-solar-panels_23-2149192692.jpg?t=st=1742634571~exp=1742638171~hmac=52b52787b4bca9d9e7f81cd5528c6c86a27188599839569795b929335512cac2&w=996",
    buttonColor: "bg-white",
    textColor: "text-white"
  },
  {
    icon: <BsWind className="w-12 h-12 text-blue-500" />,
    title: "wind Energy",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    bgColor: "bg-white",
    buttonColor: " bg-gradient-to-r to-blue-500 from-green-500 text-white",
    textColor: "text-black"
  },
  {
    icon: <MdAutorenew className="w-12 h-12 text-white" />,
    title: "Renewables Energy",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    bgImage: "https://img.freepik.com/free-vector/electrical-windmill-generators-sunset_1182-1351.jpg?t=st=1742634668~exp=1742638268~hmac=c43275559a3355bec2b0958784f012b4f135291d75371a536502b2977cef2b9f&w=740",
    buttonColor: "bg-white",
    textColor: "text-white"
  }
];

function Service() {
  return (
    <div className="min-h-screen bg-[#0f1c2f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-[#3A3D1C] text-white mb-8">
            🏗️ WHAT WE DO
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            " Empowering a Sustainable Future 
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
          with Renewable Energy "
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-3xl overflow-hidden relative ${service.bgColor || ''}`}
              style={service.bgImage ? {
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${service.bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              } : {}}
            >
              <div className="p-8 h-full flex flex-col">
                <div className="mb-6">
                  {service.icon}
                </div>
                <h3 className={`text-xl font-bold mb-4 ${service.textColor}`}>
                  {service.title}
                </h3>
                <p className={`mb-8 ${service.textColor}`}>
                  {service.description}
                </p>
                <div className="mt-auto">
                  <button
                    className={`${service.buttonColor} px-6 py-2 rounded-full font-medium inline-flex items-center transition-transform hover:translate-x-2`}
                  >
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Service;