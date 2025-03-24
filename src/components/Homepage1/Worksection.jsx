import { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";

import step from '../../assets/image/water.jpg'
const steps = [
    {
        title: "Consultation & Planning",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
        benefits: [
            "Schedule a free consultation",
            "Get expert recommendations",
            "On-time execution",
        ],
    },
    {
        title: "Construction & Execution",
        content: "Our team ensures seamless construction with high-quality materials and skilled labor.",
        benefits: [],
    },
    {
        title: "Project Completion & Handover",
        content: "Final inspections and project handover with full client satisfaction.",
        benefits: [],
    },
];

const InfratechSteps = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <div className="bg-blue-500/5">
            <div className="relative flex w-11/12 mx-auto flex-col gap-x-10 md:flex-row  items-center justify-center   bg-cover bg-center  md:p-16">

                {/* Steps Section */}
                <div className="w-full md:w-1/2 ">
                    <p className=" font-semibold  border w-fit px-3 py-0.5 rounded-2xl bg-blue-500 text-white mb-2">HOW IT WORKS</p>
                    <h2 className="text-5xl font-bold mb-6 max-w-2xl leading-14">Step Work For Infratech Projects With Precision.</h2>
                    <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                    {steps.map((step, index) => (
                        <div key={index} className="mb-4">
                            <div
                                className="flex justify-between my-2 items-center bg-gray-200 p-4 rounded-lg cursor-pointer"
                                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                            >
                                <h4 className="text-lg font-semibold">{index + 1}. {step.title}</h4>
                                {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                            </div>
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: openIndex === index ? "auto" : 0, opacity: openIndex === index ? 1 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                            >
                                <div className="bg-blue-400 text-white p-6 rounded-2xl flex flex-col md:flex-row items-center md:items-start gap-6 max-w-4xl mx-auto">
                                    {/* Video Thumbnail */}
                                    <div className="w-42  h-42 flex-shrink-0 relative">
                                        <img
                                            src="https://img.freepik.com/free-vector/renewable-energy-flat-illustration-design_23-2149126629.jpg?t=st=1742630270~exp=1742633870~hmac=faf913f71002f2a33b8850ec464dd4b2ba6f8a853a7bc67b05912039cb30523b&w=740"
                                            alt="Video Thumbnail"
                                            className="w-full h-full rounded-lg object-cover"
                                        />
                                        <button className="absolute inset-0 flex items-center justify-center   rounded-lg">
                                            <span className="text-white text-2xl">▶</span>
                                        </button>
                                    </div>

                                    {/* Text Content */}
                                    <div className="flex flex-col">
                                        <p className="text-sm md:text-base leading-relaxed mb-4">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                                            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                        </p>
                                        <ul className="space-y-2">
                                            <li className="flex items-center gap-2">
                                                <FaCheck/> Schedule a free consultation
                                            </li>
                                            <li className="flex items-center gap-2">
                                            <FaCheck/> Get expert recommendations
                                            </li>
                                            <li className="flex items-center gap-2"> <FaCheck/> On-time execution</li>
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
                <div className="w-full md:w-1/2 md:h-[640px] overflow-hidden rounded-2xl">
                    <img src={step} alt="" className=" w-full h-full" />
                </div>
            </div>
        </div>
    );
};

export default InfratechSteps;
