import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

const testimonials = [
    {
        name: "Mr. John Doe",
        role: "CLIENTS",
        feedback:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
        image: "https://img.freepik.com/free-photo/portrait-smiling-charming-young-man-grey-t-shirt-standing-against-plain-background_23-2148213406.jpg?t=st=1742805375~exp=1742808975~hmac=821192af26f934f4feb29e98892725de4ba191e17789c33a6b6d082ea72d979a&w=740",
    },
    {
        name: "Mr. John Doe",
        role: "CLIENTS",
        feedback:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
        image: "https://img.freepik.com/free-photo/portrait-smiling-charming-young-man-grey-t-shirt-standing-against-plain-background_23-2148213406.jpg?t=st=1742805375~exp=1742808975~hmac=821192af26f934f4feb29e98892725de4ba191e17789c33a6b6d082ea72d979a&w=740",
    },
    {
        name: "Mr. John Doe",
        role: "CLIENTS",
        feedback:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
        image: "https://img.freepik.com/free-photo/portrait-smiling-charming-young-man-grey-t-shirt-standing-against-plain-background_23-2148213406.jpg?t=st=1742805375~exp=1742808975~hmac=821192af26f934f4feb29e98892725de4ba191e17789c33a6b6d082ea72d979a&w=740",
    },
    {
        name: "Mr. John Doe",
        role: "CLIENTS",
        feedback:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
        image: "https://img.freepik.com/free-photo/portrait-smiling-charming-young-man-grey-t-shirt-standing-against-plain-background_23-2148213406.jpg?t=st=1742805375~exp=1742808975~hmac=821192af26f934f4feb29e98892725de4ba191e17789c33a6b6d082ea72d979a&w=740",
    },
];

const Testimonials = () => {
    return (
        <div className=" bg-blue-50">
            <div className="w-9/12 mx-auto py-20">
                <div className="flex flex-col lg:flex-row gap-10 items-center justify-between">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-lg"
                    >
                        <h2 className="text-3xl font-bold mb-4">Lets Know What Our Clients Say About Us.</h2>
                        <p className="text-gray-500 mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                        </p>
                      
                        <button className="border p-2 cursor-pointer bg-white  rounded-3xl px-5 ">
                        Lets Talk Now →
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="w-2/3 mt-10 lg:mt-0"
                    >
                        <Swiper
                            modules={[Autoplay]}
                            slidesPerView={3}
                            spaceBetween={20}

                            autoplay={{ delay: 3000 }}
                            loop
                            className="w-full"
                        >
                            {testimonials.map((testimonial, index) => (
                                <SwiperSlide key={index}>
                                    <div className="bg-white p-6 border rounded-lg shadow-lg">
                                        <p className="italic text-gray-700 mb-4">“{testimonial.feedback}”</p>
                                        <div className="flex items-center gap-4">
                                            <img
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                className="w-12 h-12 rounded-full border"
                                            />
                                            <div>
                                                <h4 className="font-bold text-lg">{testimonial.name}</h4>
                                                <p className="text-yellow-600 text-sm">{testimonial.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
