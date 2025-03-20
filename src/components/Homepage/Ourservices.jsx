import React from 'react'
import { FaArrowRight } from "react-icons/fa";


const services = [
    {
        step:"A",
        energy:"City Gas Distribution Network Project.",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime amet reprehenderit voluptatem similique, aspernatur esse doloremque est quibusdam rerum repellendus cupiditate consequuntur nam nesciunt, obcaecati vel! Atque explicabo perferendis iusto libero dicta?"
    },
    {
        step:"B",
        energy:"Energy & Power Solutions",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime amet reprehenderit voluptatem similique, aspernatur esse doloremque est quibusdam rerum repellendus cupiditate consequuntur nam nesciunt, obcaecati vel! Atque explicabo perferendis iusto libero dicta?"
    },
    {
        step:"C",
        energy:"Sustainable Water Management & Treatment",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime amet reprehenderit voluptatem similique, aspernatur esse doloremque est quibusdam rerum repellendus cupiditate consequuntur nam nesciunt, obcaecati vel! Atque explicabo perferendis iusto libero dicta?"
    },
    {
        step:"D",
        energy:"Clean Energy Revolution",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime amet reprehenderit voluptatem similique, aspernatur esse doloremque est quibusdam rerum repellendus cupiditate consequuntur nam nesciunt, obcaecati vel! Atque explicabo perferendis iusto libero dicta?"
    }
]
const Ourservices = () => {
  return (
    <div className=' my-40'>
       <div className=' w-10/12 flex mx-auto'>
            <div className='flex justify-between items-center gap-20'>
                 <div className=' rounded-r-2xl overflow-hidden h-2/3'>
                      <img src="https://i.pinimg.com/736x/20/b3/e5/20b3e586b210342b9d210f66421a2af2.jpg" alt="" />
                 </div>
                 <div className=' flex flex-col gap-y-8'>
                       <span className='text-8xl font-bold text-gray-700 opacity-15'>A</span>
                       <h1 className='text-5xl font-bold tracking-wide max-w-4xl leading-14'>City Gas Distribution Network Project.</h1>
                       <p className=' max-w-xl text-gray-500 text-xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime amet reprehenderit voluptatem similique, aspernatur esse doloremque est quibusdam rerum repellendus cupiditate consequuntur nam nesciunt, obcaecati vel! Atque explicabo perferendis iusto libero dicta?</p>
                 <button className="flex items-center gap-2 px-5 py-3 w-fit bg-gradient-to-r from-blue-500 to-gray-500 text-white rounded-full shadow-lg transition-transform transform hover:scale-105">
                                <FaArrowRight />
                                Explore Project More
                </button>
                 </div>
            </div>
       </div>
    </div>
  )
}

export default Ourservices
