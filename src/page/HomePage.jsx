import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { FaArrowRightLong } from 'react-icons/fa6';
import { HiArrowNarrowRight } from "react-icons/hi";
import { FaArrowRight, FaBuilding } from "react-icons/fa";


import wind from '../assets/gifs/wind.gif'
import Ourservices from '../components/Homepage/Ourservices';
import CounterSection from '../components/Homepage/Oursuccess';

import Timelines from '../components/Homepage/Workflow.jsx';

import gas from '../assets/image/cng-gas.jpg'
import water from '../assets/image/waterbanner.jpg'
const HomePage = () => {
  return (
    <div >
      <section>
        <Swiper navigation={
          {
            prevEl: '.prev',
            nextEl: '.next',
          }
        } modules={[Navigation]}>
          <SwiperSlide>
            <div className="relative w-full h-screen flex items-center  justify-center text-center text-black">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${water})` }}
              >
                <div className="absolute  bg-black/50"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 bg-white/50 rounded-md leading-14 p-10 px-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-wide text-gray-950  font-bold">
                  Leading Excellence <br /> in Multi-Industry Solutions
                </h1>
                <p className="mt-4 text-lg md:text-xl font-bold tracking-wide text-blue-950">
                  We go beyond ideas, we're passionate about turning bold concepts into real-world solutions.
                </p>

                {/* CTA Button */}
                <button className="mt-6 px-6 cursor-pointer py-3 mx-auto bg-gradient-to-r from-blue-500 to-gray-500 rounded-full text-lg font-semibold shadow-lg flex items-center gap-2">
                  Get started now
                  <span className="ml-2"><HiArrowNarrowRight size={20} /></span>
                </button>
              </div>
            </div>
          </SwiperSlide>

          <div className='flex w-11/12 left-[50%] max-sm:top-20 -translate-x-[50%] -translate-y-[50%]  justify-between  absolute z-[2] lg:top-[50%] '>
            <div className="prev text-white cursor-pointer  rounded-full bg-blue-500 p-3"><FaArrowRightLong size={35} className=' rotate-[180deg]' /></div>
            <div className=" next  text-white cursor-pointer rounded-full bg-blue-500 p-3"><FaArrowRightLong size={35} /></div>
          </div>
        </Swiper>
      </section>
      {/* about company  */}
      <div className=' w-10/12 mx-auto my-20'>
        <div className="relative w-full py-16 px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row items-center gap-20">
          {/* Image Section */}
          <div className="relative w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-2xl">
              <img
                src={gas}
                alt="Worker 1"
                className=" rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <p className="text-orange-500 font-semibold tracking-wider">ABOUT US</p>
            <h2 className="text-3xl max-w-xl md:text-4xl font-bold mt-2 leading-tight">
              We build structures, yes, but more importantly, we build a better future.
            </h2>
            <p className="mt-4 text-gray-600 max-w-xl text-justify">
              We're not just engineers, we're dream weavers. Desco Infratech, headquartered in the Diamond City of India, Surat, transforms bold ideas into groundbreaking solutions across City Gas, Renewables, Water, and Power sectors.
            </p>
            <p className="mt-3 text-gray-600 max-w-xl text-justify">
              From pipelines to power cables, our expertise runs deep. We've built a presence in over 55 cities, spanning 14 states.
            </p>
            <p className='mt-3 text-gray-600 max-w-xl text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis deleniti nam nemo quasi earum voluptatem aut iste. Perspiciatis, dicta sunt accusamus id tempore iure a officiis placeat ipsam ex delectus earum cumque!</p>
             <div className=' absolute right-0 '>
                   <img src={wind} alt="" />
             </div>
            {/* Buttons */}
            <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center lg:justify-start">
                <button className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-blue-500 to-gray-500 text-white rounded-full shadow-lg transition-transform transform hover:scale-105">
                  <FaArrowRight />
                  Explore More
                </button>
              <button className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-blue-500 to-gray-500 text-white rounded-full shadow-lg transition-transform transform hover:scale-105">
                <FaBuilding />
                Our Verticals
              </button>
            </div>
          </div>
        </div>
      </div>
      <Ourservices/>
      <CounterSection />
      <Timelines/>
    </div>
  )
}

export default HomePage
