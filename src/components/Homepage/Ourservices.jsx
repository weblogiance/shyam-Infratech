import React from 'react'
import { FaArrowRight } from "react-icons/fa";


const services = [
    {
        step: "A",
        energy: "City Gas Distribution Network Project.",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime amet reprehenderit voluptatem similique, aspernatur esse doloremque est quibusdam rerum repellendus cupiditate consequuntur nam nesciunt, obcaecati vel! Atque explicabo perferendis iusto libero dicta?",
        image: "https://i.pinimg.com/736x/20/b3/e5/20b3e586b210342b9d210f66421a2af2.jpg"
    },
    {
        step: "B",
        energy: "Energy & Power Solutions",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime amet reprehenderit voluptatem similique, aspernatur esse doloremque est quibusdam rerum repellendus cupiditate consequuntur nam nesciunt, obcaecati vel! Atque explicabo perferendis iusto libero dicta?",
        image: "https://i.pinimg.com/736x/bc/54/e3/bc54e3321b11ee35caf997f7e19bcb44.jpg"
    },
    {
        step: "C",
        energy: "Sustainable Water Management & Treatment",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime amet reprehenderit voluptatem similique, aspernatur esse doloremque est quibusdam rerum repellendus cupiditate consequuntur nam nesciunt, obcaecati vel! Atque explicabo perferendis iusto libero dicta?",
        image: "https://i.pinimg.com/736x/d5/78/47/d57847be411dd7fd148386240f142275.jpg"
    },
    {
        step: "D",
        energy: "Clean Energy Revolution",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime amet reprehenderit voluptatem similique, aspernatur esse doloremque est quibusdam rerum repellendus cupiditate consequuntur nam nesciunt, obcaecati vel! Atque explicabo perferendis iusto libero dicta?",
        image: "https://i.pinimg.com/736x/18/5e/26/185e261abee1d561dd4388ccb1efe457.jpg"
    }
]
const Ourservices = () => {
    return (
        <div className="pt-[10rem] bg-gradient-to-r from-blue-50 to-gray-50">
  <div className="w-10/12 mx-auto flex flex-col max-sm:gap-16">
    {services.map((provide, index) => (
      <div
        key={index}
        className={`flex flex-col md:flex-row justify-between items-center max-sm:space-y-10 md:space-y-0 gap-10 
        ${index % 2 !== 0 ? "md:flex-row-reverse md:pl-10 bg-blue-500/20 rounded-s-2xl" : "bg-gray-500/20 rounded-r-2xl md:pr-5"}`}
      >
        <div className={`overflow-hidden w-full md:w-[740px] h-[400px] md:h-[670px] ${index % 2 !== 0 ? "rounded-s-2xl" : "rounded-r-2xl"}`}>
          <img src={provide.image} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col gap-y-6 text-center md:text-left">
          <span className="text-5xl md:text-6xl font-bold text-gray-700 opacity-15">{provide.step}</span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-wide leading-tight max-w-2xl md:max-w-4xl">
            {provide.energy}
          </h1>
          <p className="max-w-md md:max-w-xl text-gray-500 text-lg md:text-xl text-justify">
            {provide.description}
          </p>
          <button className="flex items-center gap-2 px-5 py-3 mx-auto md:mx-0 w-fit bg-gradient-to-r from-blue-500 to-gray-500 text-white rounded-full shadow-lg transition-transform transform hover:scale-105">
            <FaArrowRight />
            Explore Project More
          </button>
        </div>
      </div>
    ))}
  </div>
</div>

    )
}

export default Ourservices
