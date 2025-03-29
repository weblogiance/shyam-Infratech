import React from 'react';
import { HiArrowUpRight } from 'react-icons/hi2';
import ser1 from '../../assets/image/Mask group (1).png'
import ser2 from '../../assets/image/Mask group (3).png'
import ser3 from '../../assets/image/Mask group (3).png'
import ser0 from '../../assets/image/Mask group.png'
import { GoArrowUpRight } from "react-icons/go";

const cards = [
    {
        title: "Water Management",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        image:ser0
    },
    {
        title: "Power Solutions",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        image:ser1
    },
    {
        title: "Gas Pipeline",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        image:ser2
    },
    {
        title: "Water Management",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        image:ser3
    }
];



function Future() {
    return (
        <div className="bg-[#EBF5FB] mt-10 py-12 px-4 sm:px-6 lg:px-8">
            <div className=" w-full mx-auto">
                <h1 className="text-4xl max-w-[800px] mx-auto leading-16 capitalize md:text-5xl font-bold text-center mb-4">
                    Empowering a Sustainable Future with Renewable Energy
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 mt-10 lg:grid-cols-4 gap-6">
                    {cards.map((card, index) => (
                        <div key={index} className="relative group overflow-hidden rounded-lg">
                            <div className=' absolute top-3 z-[2] right-0 bg-[#78C448] w-20 h-20 flex items-center justify-center rounded-full '>
                                 <button><GoArrowUpRight size={40} color='white'/></button>
                            </div>
                            <div className="relative  w-full overflow-hidden">
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className="w-full h-full object-cover transition-transform duration-300 "
                                />
                                {/* <div className="absolute inset-0 bg-black/50"></div> */}

                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                    <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
                                    <p className="text-sm text-gray-200">{card.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Future;