import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, EffectFade } from 'swiper/modules';
import { RiPushpinLine } from "react-icons/ri";
import { BiSolidStar } from "react-icons/bi";
import { PiPhoneCall } from "react-icons/pi";

import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import gas from '../assets/image/cng-gas.jpg'
import { MdOutlineSolarPower } from "react-icons/md";
import InfratechSteps from '../components/Homepage1/Worksection';
import Service from '../components/Homepage1/Service';
import FeaturedProjects from '../components/Homepage1/FeaturedProjects';
import Testimonials from '../components/Homepage1/Review';
import main from '../assets/image/waterbanner.jpg'

const Homepage1 = () => {
  return (
    <div >
      <section>
        <Swiper modules={[EffectFade, Autoplay]} effect='fade' speed={150} loop autoplay>
     
          <SwiperSlide>
            <div className="relative w-full h-screen flex items-center text-center text-black">
              {/* Background Image with Overlay */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(https://img.freepik.com/free-vector/green-energy-generated-by-wind-turbine-solar-panel_1308-71824.jpg?t=st=1742626985~exp=1742630585~hmac=38ece25b4715ec25093223e9e013c2b290687099f3ab7b0c873f2de64ed2b536&w=1380)`,
                }}
              >
                <div className="absolute inset-0 bg-white/80"></div> {/* Dark Overlay */}
              </div>

              {/* Content */}
              <div className="relative flex flex-col gap-y-5 items-center w-11/12 mx-auto z-10   p-10 px-6 ">

                <div className='flex items-center gap-x-3'>
                  <span className="flex items-center gap-x-2 px-4 py-2 rounded-xl border ">
                    <RiPushpinLine size={20} /> Plan Management
                  </span>
                  <span className="text-xl text-black px-2 py-2 rounded-md tracking-wide">
                    98% + Client Satisfaction Rate
                  </span>
                </div>
                <div>
                  <h1 className="text-6xl font-bold max-w-5xl text-center leading-16">
                    Trusted contractors delivering
                    <span className="text-gray-700"> high-quality</span> construction Service.
                  </h1>
                </div>
                <div className="flex items-center px-2 justify-center">
                  <p className="max-w-5xl text-start text-xl text-gray-800 tracking-wide ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, modi doloribus!
                  </p>

                </div>
                <div className="flex items-center gap-x-10">
                  <button className="border p-2 cursor-pointer rounded-3xl px-5 bg-gradient-to-r to-blue-500 from-green-500  text-white">
                    Our Services
                  </button>
                  <span className="flex gap-x-3">
                    <PiPhoneCall size={20} /> +91 63898 50425
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>

        </Swiper>
      </section>
      <div className="relative bg-[url('/path-to-background-image.jpg')] bg-cover bg-center p-8 md:p-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-lg overflow-hidden shadow-lg"
          >
            <img src={gas} alt="Construction Workers" className="w-full rounded-lg" />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-gray-900 bg-white/80 p-6 rounded-lg "
          >
            <p className="flex border w-fit px-3 rounded-3xl py-0.5 items-center gap-x-2  font-semibold text-blue-500 mb-2"> <MdOutlineSolarPower size={20} /> WHO WE ARE</p>
            <h2 className="text-4xl leading-10 font-bold mb-4">We build structures, yes, but more importantly, we build a better future.</h2>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>

            <div className="flex items-start gap-4 mb-4">
              <img src="https://img.freepik.com/free-photo/cylinder-metal-tanks-petrochemical-industry_60438-3760.jpg?t=st=1742622415~exp=1742626015~hmac=5a7b20f50969a0fb918775ada55ac1adfdb14a1edd994dba01bd56f1531b1076&w=1380" alt="Construction" className="w-30 h-30 rounded-lg shadow-md" />
              <div>
                <h4 className="text-xl tracking-wide font-semibold">Certified & Insured</h4>
                <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <ul className="mt-3">
                  <li className="flex items-center gap-2  text-gray-800">
                    <FaCheckCircle className="text-blue-500" /> Over 15 Years of Experience
                  </li>
                  <li className="flex items-center gap-2  text-gray-800">
                    <FaCheckCircle className="text-blue-500" /> On-Time & On-Budget Delivery
                  </li>
                </ul>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 px-6 py-3 bg-gradient-to-r to-blue-500 from-green-500  rounded-3xl text-white font-semibold  shadow-md hover:bg-yellow-600 transition"
            >
              Learn More →
            </motion.button>
          </motion.div>
        </div>
      </div>
      <InfratechSteps />
      <Service />
      <FeaturedProjects />
      <Testimonials />
    </div>
  )
}

export default Homepage1
