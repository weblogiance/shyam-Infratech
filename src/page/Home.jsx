import React from 'react'
import mainI from '../assets/image/home.jpeg'
import Ourservice from '../components/Home/Ourservice'
import Future from '../components/Home/Future'
import Work from '../components/Home/Work'
import subimage from '../assets/image/subimage.png'
import ContactForm from '../components/Home/Contactme'
import Hero from '../assets/image/hero.png'
import front from '../assets/image/front.png'
import bg from '../assets/image/bg.png'

const Home = () => {
  return (
    <div>
      {/* <section className='w-full p-6 mx-auto flex items-center justify-center h-screen '>        
            
         </section> */}
      <section className="relative w-full  flex items-center justify-center">
          <div className={`w-full `}>
              <div>
              <img src={bg} alt="" className='w-full lg:h-screen h-[50vh] object-cover' />
            <img src={front} alt="" className='absolute top-0 left-0 w-full lg:h-screen h-[50vh] object-cover' />
            <div className='absolute w-11/12 top-0 left-[50%] -translate-x-[50%] mx-auto gap-y-10 lg:h-screen h-[50vh] flex items-start justify-center flex-col'>
                  <h1 className='text-7xl  max-sm:text-4xl max-w-5xl font-semibold text-white leading-snug '>Reliable Infrastructure Solution for a Better Tomorrow</h1>
                   <button className=' text-white bg-[#78C448] py-3 px-6 rounded-2xl tracking-widest'>Free Consultation </button>
            </div>
              </div>
          </div>
      </section>
      <section className="w-10/12  gap-x-30 gap-y-5 mx-auto flex lg:flex-row flex-col items-center justify-between mb-10">
        {/* Text Content */}
        <div className='lg:w-1/2 w-full'>
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
        <div className="lg:w-1/2 w-full ">
          <img
            src={subimage}
            alt="Construction Work"
            className="lg:w-[824px]  lg:h-[755px] w-full h-full rounded-4xl shadow-lg"
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
