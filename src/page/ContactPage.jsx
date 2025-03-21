import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GiSolarPower } from "react-icons/gi";
import { PiWindmillFill } from "react-icons/pi";
import { FaWater } from "react-icons/fa6";
import { GiGasStove } from "react-icons/gi";
import { FaMapPin } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { IoIosClock } from "react-icons/io";
import { CiCircleCheck } from "react-icons/ci";
import { IoIosSend } from "react-icons/io";
import { FaArrowDown } from "react-icons/fa6";

const officeLocations = [
  {
    city: "New York",
    address: "123 Energy Plaza, Manhattan, NY 10001",
    phone: "+1 (212) 555-0123",
    email: "weblogiance@energymanagement.com"
  },
  {
    city: "Los Angeles",
    address: "456 Solar Drive, Los Angeles, CA 90001",
    phone: "+1 (310) 555-0456",
    email: "weblogiance@energymanagement.com"
  },
  {
    city: "India",
    address: "789 Wind Street, surat",
    phone: "+91 88022 75252",
    email: "weblogiance@energymanagement.com"
  }
];

const services = [
  {
    icon: <GiSolarPower className="w-6 h-6" />,
    name: "Solar Energy Solutions"
  },
  {
    icon: <PiWindmillFill className="w-6 h-6" />,
    name: "Wind Power Management"
  },
  {
    icon: <FaWater className="w-6 h-6" />,
    name: "Energy Efficiency"
  },
  {
    icon: <GiGasStove className="w-6 h-6" />,
    name: "Industrial Solutions"
  }
];


const ContactPage = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };
  return (
    <div>
         <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <section className="relative py-42 px-4 sm:px-6 lg:px-8 bg-white bg-[url(https://i.pinimg.com/736x/6d/99/fc/6d99fc2025984b787e57b69664dab658.jpg)] bg-cover">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl"
            >
              Get in Touch
            </motion.h1>
            <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
              Transform your energy management with our expert solutions. Contact us today to discuss how we can help optimize your energy consumption and reduce costs.
            </p>
            <div className='mt-10 mx-auto w-full  flex items-center justify-center'>
                 <FaArrowDown size={50} color='white' className=' animate-bounce'/>
            </div>
          </div>
          
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold">{service.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md p-2 border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md p-2 border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      className="mt-1 block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formState.company}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md p-2 border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formState.service}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md p-2 border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service.name}>
                        {service.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formState.message}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    required
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-gradient-to-r from-blue-500 to-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    {isSubmitted ? (
                      <>
                        <CiCircleCheck className="w-5 h-5 mr-2" />
                        Message Sent
                      </>
                    ) : (
                      <>
                        <IoIosSend className="w-5 h-5 mr-2 " />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>

            <div className="lg:pl-12">
              <h2 className="text-3xl font-bold mb-6">Our Offices</h2>
              <div className="space-y-8">
                {officeLocations.map((location, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white p-6 rounded-lg shadow-sm"
                  >
                    <h3 className="text-xl font-semibold mb-4">{location.city}</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <FaMapPin className="w-5 h-5 text-blue-600 mt-1" />
                        <p className="ml-3 text-gray-600">{location.address}</p>
                      </div>
                      <div className="flex items-center">
                        <FaPhone className="w-5 h-5 text-blue-600" />
                        <p className="ml-3 text-gray-600">{location.phone}</p>
                      </div>
                      <div className="flex items-center">
                        <CiMail className="w-5 h-5 text-blue-600" />
                        <p className="ml-3 text-gray-600">{location.email}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 bg-gradient-to-r from-blue-500/50 to-gray-500/50 p-6 rounded-lg">
                <div className="flex items-center">
                  <IoIosClock className="w-6 h-6 text-blue-600" />
                  <h3 className="ml-3 text-lg font-semibold">Business Hours</h3>
                </div>
                <div className="mt-4 space-y-2 text-gray-600">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
  )
}

export default ContactPage



