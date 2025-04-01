import React from 'react'
import mainI from '../assets/image/home.jpeg'
import Ourservice from '../components/Home/Ourservice'
import Future from '../components/Home/Future'
import Work from '../components/Home/Work'
import subimage from '../assets/image/subimage.png'
import ContactForm from '../components/Home/Contactme'
import Hero from '../assets/image/home.jpeg'
import front from '../assets/image/front.png'
import bg from '../assets/image/bg.png'

const Home = () => {
  return (
    <div>
      {/* <section className='w-full p-6 mx-auto flex items-center justify-center h-screen '>        
            
         </section> */}
      <section className="relative w-full max-sm:hidden flex items-center justify-center">
        <div className="w-full">
          <div className="relative">
            {/* Background Image */}
            <img
              src={bg}
              alt="Background"
              className="w-full lg:min-h-screen h-[80vh] object-cover"
            />
            {/* Foreground Image Overlay */}
            <img
              src={front}
              alt="Foreground"
              className="absolute top-0 left-0 w-full lg:min-h-screen h-[80vh] object-cover"
            />
            {/* Content Section */}
            <div className="absolute w-11/12 top-0 left-1/2 -translate-x-1/2 flex flex-col gap-y-6 lg:min-h-screen h-[80vh] items-start justify-center">
              <h1 className="text-white font-semibold lg:text-7xl text-4xl max-w-4xl leading-snug">
                Reliable Infrastructure Solution for a Better Tomorrow
              </h1>
              <button className="text-white bg-[#78C448] py-3 px-6 rounded-2xl tracking-widest">
                Free Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full lg:hidden md:hidden sm:hidden flex items-center justify-center">
        <div className="w-full">
          <div className="relative">
            {/* Background Image */}
            <img
              src={Hero}
              alt="Background"
              className="w-full lg:min-h-screen h-[70vh] object-cover "
            />
            {/* Foreground Image Overlay */}
             <div className='absolute top-0 left-0 w-full lg:min-h-screen h-[70vh] object-cover bg-black/65'>

             </div>
            {/* Content Section */}
            <div className="absolute w-11/12 top-0 left-1/2 -translate-x-1/2 flex flex-col gap-y-6 lg:min-h-screen h-[70vh] items-start justify-center">
              <h1 className="text-white font-semibold lg:text-7xl text-4xl max-w-4xl leading-snug">
                Reliable Infrastructure Solution for a Better Tomorrow
              </h1>
              <button className="text-white bg-[#78C448] py-3 px-6 rounded-2xl tracking-widest">
                Free Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-10/12 mx-auto mt-5 flex flex-wrap lg:flex-nowrap items-center justify-center gap-10 mb-10">
        {/* Text Content */}
        <div className="lg:w-1/2 w-full text-center lg:text-left">
          <h2 className="lg:text-4xl text-2xl lg:leading-[3.5rem] max-w-sm font-bold text-gray-900">
            Providing all kinds of Construction Services
          </h2>
          <p className="mt-4 lg:text-xl  lg:max-w-xl max-sm:text-justify leading-8 text-gray-600 font-medium">
            Our construction company has been founded 10 years ago, at the very peak of the building frenzy in the US...
          </p>
          <p className="mt-4 text-gray-500 max-w-2xl max-sm:text-sm text-justify leading-relaxed">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet model.of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, or non-characteristic words etc.
          </p>
          <button className="mt-6 px-6 py-3 border border-[#78C448] tracking-wide text-gray-900 font-semibold rounded-lg hover:bg-gray-900 hover:text-white transition">
            Free Consultation
          </button>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 w-full flex justify-center">
          <img
            src={subimage}
            alt="Construction Work"
            className="w-full max-w-[824px] h-auto rounded-4xl shadow-lg"
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
