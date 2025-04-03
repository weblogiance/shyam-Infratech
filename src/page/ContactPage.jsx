import React from 'react'
import about from '../assets/image/contact.png'
import solar from '../assets/image/solarS.png'
import wind from '../assets/image/WindS.png'
import power from '../assets/image/powerS.png'
import Industrial from '../assets/image/industrialS.png'
import Contactform from '../components/About/Contactform'
import { GoDotFill } from "react-icons/go";

const service = [
  {
    icons: solar,
    header: "Solar Energy Solutions"
  },
  {
    icons:wind,
    header: "Wind Power Management"
  },
  {
    icons: power,
    header: "Energy Efficiency"
  },
  {
    icons: Industrial,
    header: "Industrial Solutions"
  }
]

const ContactPage = () => {
  return (
    <div>
      <section className="relative w-full flex items-center justify-center">
        <div className="w-full">
          <div className="relative">
            {/* Background Image */}
            <img
              src={about}
              alt="Background"
              className="w-full lg:min-h-[70vh] h-[80vh] object-cover"
            />
            {/* Content Section */}
            <div className="absolute w-11/12 top-0 left-1/2 -translate-x-1/2 flex flex-col gap-y-6 lg:min-h-screen h-[80vh] items-start justify-center">
              <h1 className="text-white font-semibold lg:text-7xl text-4xl max-w-4xl leading-snug">
                Get in Touch
              </h1>
              <p className=' text-white text-lg max-w-lg'>
                Transform your energy management with our expert solutions. Contact us today to discuss how we can help optimize your energy consumption and reduce costs.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='my-20'>
        <h1 className='flex justify-center items-center lg:text-6xl text-4xl font-semibold'>Our Services</h1>
        <div className='my-10'>
          <div className=' grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-8  w-10/12 mx-auto'>
            {
              service.map((step, index) => (
                <div className=' border flex flex-col gap-y-10 px-5 border-[#BFBFBE] justify-center  w-[284.45px] h-[300.17px] rounded-2xl mx-auto'>
                  <div className=' w-24 h-24 rounded-full bg-[#78C448] flex justify-center items-center'>
                    <img src={step.icons} alt="" />
                  </div>
                  <h1 className='text-3xl leading-10 font-medium w-[80%] '>{step.header}</h1>
                </div>
              ))
            }
          </div>
        </div>
      </section>
      <Contactform/>
      <div>
           <h1 className='flex justify-center lg:text-6xl font-semibold text-4xl items-center'>Business Hours</h1>
           <div className='flex lg:flex-row flex-col mx-auto items-center justify-center my-10 gap-x-20 gap-y-5'>
              <span className='flex items-center text-[#7A8D93] text-xl lg:text-3xl gap-x-3'><GoDotFill className='text-[#78C448]'/>Monday - Friday: 9:00 AM - 6:00 PM</span>
              <span className='flex items-center text-[#7A8D93] text-xl lg:text-3xl gap-x-3'><GoDotFill className='text-[#78C448]'/>Saturday: 10:00 AM - 4:00 PM</span>
              <span className='flex items-center text-[#7A8D93] text-xl lg:text-3xl gap-x-3'><GoDotFill className='text-[#78C448]'/>Sunday: Closed</span>
           </div>
      </div>
    </div>
  )
}

export default ContactPage
