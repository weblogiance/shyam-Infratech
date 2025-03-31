import React from 'react'
import service from '../../assets/image/homeg.png'
import { MdArrowOutward } from "react-icons/md";

const services = [
    {
        title: "Water Drainage Solutions",
        points: [
            "Stormwater Management",
            "Yard & Landscape Drainage",
            "French Drains Installation",
            "Foundation Waterproofing"
        ]
    },
    {
        title: "Gas Pipeline Services",
        points: [
            "Leak Detection & Safety Checks",
            "Gas Pipeline Installation & Maintenance",
            "Underground Gas Pipeline Solutions"
        ]
    },
    {
        title: "Construction Services",
        points: [
            "Residential & Commercial Construction",
            "Road & Highway Development",
            "Foundation Waterproofing"
        ]
    },
    {
        title: "Underground Solutions",
        points: [
            "Utility Infrastructure Development",
            "Boring & Trenching Services",
            "Sewer & Drain Line Installation"
        ]
    }
];

const Ourservice = () => {
    return (
        <div>
            <div className=" mx-auto ">
               <div className=' relative flex items-center justify-center overflow-hidden'>  
                    <h2 className="text-center mx-auto absolute bottom-0 max-sm:-bottom-5 max-sm:text-3xl text-7xl font-semibold mb-10">Over Services </h2>
                    <img src={service} alt="" className=' w-full grayscale' />
               </div>
                <div className="grid grid-cols-1 md:grid-cols-2 place-content-center lg:w-8/12 w-full  mt-10  mx-auto overflow-hidden">
                    {services.map((service, index) => (
                        <div key={index} className={` text-center p-6 border-[#D2D2D2] border lg:border-t-0 lg:border-l-0  relative ${index == 2 && "border-b-0"} ${index == 1 && "border-r-0"} ${index == 3 && "border-b-0 border-r-0"}`}>
                            <h3 className="text-4xl  mb-4">{service.title}</h3>
                            <ul className={`${index == 0 ? " grid grid-cols-2 leading-0 ":"flex flex-col gap-y-2"} gap-4 mx-auto`}>
                                {service.points.map((point, i) => (
                                    <li key={i} className=" text-sm list-disc w-fit mx-auto text-[#7A8D93] ">{point}</li>
                                ))}
                            </ul>
                            <button className="mt-4 mx-auto text-lg bg-[#78C448] text-white px-5 py-3 rounded-lg flex items-center">
                                Read More <span className="ml-2"><MdArrowOutward size={30}/></span>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Ourservice
