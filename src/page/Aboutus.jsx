import React from 'react'
import Community from '../assets/image/Community.png'
import Innovation from '../assets/image/Innovation.png'
import Environmental from '../assets/image/Environmental.png'
import about from '../assets/image/about img.png'
import Success from '../components/contact/Success'
import Valueofshyam from '../components/contact/Valueofshyam'
import Team from '../components/contact/Team'

const aboutInfo = [
  {
    title: "Environmental Stewardship",
    description: "Leading the transition to sustainable energy practices while preserving our planet's resources for future generations.",
    image: Environmental
  },
  {
    title: "Innovation Excellence",
    description: "Continuously pushing boundaries to develop cutting-edge energy solutions that define industry standards.",
    image: Innovation
  },
  {
    title: "Community Impact",
    description: "Creating positive change in communities through sustainable energy practices and education.",
    image: Community
  }
]

const Aboutus = () => {
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
                About InfraTech Energy
              </h1>
              <p className=' text-white text-lg max-w-lg'>
                Pioneering sustainable energy solutions for a brighter tomorrow. We're committed to transforming how businesses manage and optimize their energy consumption.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className=' mt-20 w-10/12 mx-auto'>
        <div className='flex lg:flex-row flex-col gap-y-5 justify-between'>
          {
            aboutInfo.map((list, index) => (
                <>
                       <div key={index} className='flex flex-col gap-y-2'>
                <div className=' w-20 h-20 rounded-full bg-[#78C448] flex items-center justify-center'>
                  <img src={list.image} alt="" />
                </div>
                <h1 className=' text-3xl font-medium '>{list.title}</h1>
                <p className=' text-[#7A8D93] font-normal max-w-sm'>{list.description}</p>
              </div>
              <div className={`flex border border-[#7A8D93] ${index == 2 && "hidden"}`}></div>
                </>
            ))
          }
        </div>
      </div>
      <Success/>
      <Valueofshyam/>
      <Team/>
    </div>
  )
}

export default Aboutus
