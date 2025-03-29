import React from 'react'
import mainI from '../assets/image/home.jpeg'
import Ourservice from '../components/Home/Ourservice'
import Future from '../components/Home/Future'
import Work from '../components/Home/Work'
import subimage from '../assets/image/subimage.png'
import ContactForm from '../components/Home/Contactme'
import Hero from '../assets/image/hero.png'
import { main } from 'framer-motion/client'

const Home = () => {
  return (
    <div>
      {/* <section className='w-full p-6 mx-auto flex items-center justify-center h-screen '>        
            
         </section> */}
      <section className="relative w-full  flex items-center justify-center">
          <div>
                <img src={mainI} alt="" className='brightness-50' />
          </div>
      </section>
      <section className="w-10/12  gap-x-30 mx-auto flex items-center justify-between mb-10">
        {/* Text Content */}
        <div className=' w-1/2'>
          <h2 className="text-4xl leading-13 max-w-sm font-bold text-gray-900">
            Providing all kinds of Construction Services
          </h2>
          <p className="mt-4 text-xl max-w-xl leading-8 text-gray-600 font-medium">
            Our construction company has been founded 10 years ago, at the very peak of the building frenzy in the US...
          </p>
          <p className="mt-4 text-gray-500 max-w-2xl text-justify leading-relaxed">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet model.of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, or non-characteristic words etc.
          </p>
          <button className="mt-6 px-6 py-3 border border-[#78C448] tracking-wide text-gray-900 font-semibold rounded-lg hover:bg-gray-900 hover:text-white transition">
            Free Consultation
          </button>
        </div>

        {/* Image Section */}
        <div className="relative ">
          <img
            src={subimage}
            alt="Construction Work"
            className="w-[624px] h-[555px] rounded-4xl shadow-lg"
          />
        </div>
      </section>
      <Ourservice />
      <Future />
      <Work />
      <ContactForm />
    </div>
  )
}

export default Home
