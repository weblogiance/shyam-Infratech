import React, { useState } from 'react';
import { MdElectricalServices, MdEnergySavingsLeaf, MdOutlineDataSaverOff } from "react-icons/md";
import { PiSolarRoofBold } from "react-icons/pi";
import { RiCustomerService2Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from 'framer-motion';
import bgphoto from '../../assets/image/home2.jpg'
import { AiFillSun } from "react-icons/ai";

import power from '../../assets/image/electric.jpg'
import gas from '../../assets/image/gas-line.jpg'
import solar from '../../assets/image/solar.jpg'

import { LuCheck } from "react-icons/lu";

const Wework = [
    {
        type: 'electric',
        Photo:power,
        title: "Sustainable Electricity for a Better Tomorrow",
        description: "Contributing to electric energy for our planet means adopting sustainable solutions like renewable energy sources, energy-efficient technologies, and responsible consumption.",
        advance: [
            { icon: <RiCustomerService2Fill />, name: "24*7 service support" },
            { icon: <IoClose />, name: "No electric cut" },
            { icon: <MdOutlineDataSaverOff />, name: "Reduces cost" }
        ]
    },
    {
        type: 'solar',
        Photo: solar,
        title: "How We Can Support Clean Energy for Earth",
        description: "We can support clean energy by adopting renewable sources like solar and wind, reducing energy waste, and advocating for sustainable policies.",
        advance: [
            { icon: <RiCustomerService2Fill />, name: "Reliable energy source" },
            { icon: <IoClose />, name: "No pollution" },
            { icon: <MdOutlineDataSaverOff />, name: "Energy-efficient" }
        ]
    },
    {
        type: 'gas',
        Photo:gas,
        title: "Gas Pipeline Infrastructure Solutions",
        description: "Gas Pipeline Infrastructure Solutions ensure the safe, efficient, and reliable transportation of natural gas through advanced pipeline networks.",
        advance: [
            { icon: <RiCustomerService2Fill />, name: "Advanced safety measures" },
            { icon: <IoClose />, name: "No leakage risks" },
            { icon: <MdOutlineDataSaverOff />, name: "Cost-effective" }
        ]
    }
];

const stats = [
    { value: "3,859+", label: "Completed Projects" },
    { value: "685+", label: "Skilled Workers" },
    { value: "98%+", label: "Satisfaction Rate" },
    { value: "15Y+", label: "Years In Business" },
  ];

const FeaturedProjects = () => {
    const [work, setWork] = useState('electric');
    const selectedWork = Wework.find(item => item.type === work);

    return (
        <div>
            <div className='w-10/12 mx-auto my-20'>
                <div className='flex justify-around w-9/12 mx-auto items-center my-10'>
                    <div className='flex flex-col gap-y-5'>
                        <span className='border w-fit px-3 py-1 rounded-2xl tracking-wide'>Featured Projects</span>
                        <h1 className='text-4xl max-w-xl leading-10  tracking-wide font-bold'>
                            Featured Projects
                            Discover Our Proven Success in Every Build.
                        </h1>
                    </div>
                    <div className='flex gap-x-6'>
                        <button type='button' className={`border p-2 flex items-center gap-x-2 rounded-2xl px-5 bg-gradient-to-r cursor-pointer  text-white tracking-wide ${work === "electric" ? "bg-blue-800" : "to-blue-500 from-green-500"}`} onClick={() => setWork('electric')}> {work === "electric" ? <LuCheck size={15}/> : <MdElectricalServices size={25} />} Electric Power</button>
                        <button type='button' className={`border p-2 flex items-center gap-x-2 rounded-2xl px-5 bg-gradient-to-r cursor-pointer  text-white tracking-wide ${work === "solar" ? "bg-blue-800" : "to-blue-500 from-green-500"}`} onClick={() => setWork('solar')}>{work === "solar" ? <LuCheck size={15}/> : <MdElectricalServices size={25} />}Solar Project</button>
                        <button type='button' className={`border p-2 flex items-center gap-x-2 rounded-2xl px-5 bg-gradient-to-r cursor-pointer  text-white tracking-wide ${work === "gas" ? "bg-blue-800" : "to-blue-500 from-green-500"}`} onClick={() => setWork('gas')}>{work === "gas" ? <LuCheck size={15}/> : <MdElectricalServices size={25} />}Gas Project</button>
                    </div>
                </div>
                <AnimatePresence mode='wait'>
                    {selectedWork && (
                        <motion.div
                            key={selectedWork.type}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className='flex w-9/12 p-5  mb-5 shadow-2xl mx-auto justify-center gap-x-20 items-center bg-white rounded-2xl'
                        >
                            <div className='max-w-md h-[300px] overflow-hidden rounded-2xl'>
                                <img src={selectedWork.Photo} alt={selectedWork.title} className='w-full bg-contain' />
                            </div>
                            <div className='flex flex-col gap-y-3'>
                                <h1 className='text-4xl font-bold tracking-wide text-gray-800 max-w-xl leading-10 capitalize'>{selectedWork.title}</h1>
                                <p className='text-md max-w-md text-justify'>{selectedWork.description}</p>
                                <div className='flex gap-x-3 text-green-500 font-semibold tracking-wide text-lg'>
                                    {selectedWork.advance.map((adv, index) => (
                                        <span key={index} className='flex items-center gap-x-2 text-gray-500 capitalize text-base'>{adv.icon}{adv.name}</span>
                                    ))}
                                </div>
                                <button className='w-fit bg-gradient-to-r to-blue-500 from-green-500 text-white px-6 py-2 rounded-full font-medium inline-flex items-center transition-transform hover:translate-x-2'>Contact us</button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            <div className=' relative bg-green-50'>
                <div className=" relative top-24 w-9/12 mx-auto text-white  px-5 md:px-20">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center 
                      rounded-2xl py-10 px-5 md:px-10 bg-opacity-90 z-[2] bg-black">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="p-5 bg-opacity-20 rounded-xl"
                            >
                                <h2 className="text-3xl font-bold text-green-400">{stat.value}</h2>
                                <p className="text-lg font-semibold">{stat.label}</p>
                                <p className="text-sm text-gray-400">Lorem ipsum dolor</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
                <div >
                      <div className=' w-full'>
                            <img src={bgphoto} alt="" className='w-full'/>
                         
                      </div>
                      <div className=' absolute top-[65%] left-[50%] -translate-x-[50%] -translate-y-[65%] flex justify-center items-center flex-col gap-y-5'>
                            <span><AiFillSun size={64} color='yellow'/></span>
                           <h1 className=' text-5xl tracking-wide max-w-3xl leading-15 font-bold text-white text-center'>Transforming the Future with Clean Energy Innovation</h1>
                           <button className='w-fit bg-gradient-to-r to-blue-500 from-green-500 text-white text-center mx-auto px-6 py-2 rounded-full font-medium  items-center transition-transform hover:translate-x-2'>Contact us</button>
                      </div>
                </div>
            </div>
        </div>
    );
}

export default FeaturedProjects;
