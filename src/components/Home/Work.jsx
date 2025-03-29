import { title } from 'framer-motion/client'
import React from 'react'
import water from '../../assets/image/Pipeline.png'
import gas from '../../assets/image/gasline.png'
import internet from '../../assets/image/cabal.png'
import way from '../../assets/image/underway.jpeg'

const suceess = [
    {
        id: 120,
        title: 'Years on the Market',

    },
    {
        id: 95,
        title: 'Operational Brigades',

    },
    {
        id: 120,
        title: 'Units Engineering',
    },
    {
        id: 120,
        title: 'employees on the Company',

    },
]

const serviceName = [
    {
        title: "Sewer line Underground",
        image: water
    },
    {
        title: "Water line Underground",
        image: way
    },
    {
        title: "Gas line Undergrounds",
        image: gas
    },
    {
        title: "internet cable underground",
        image: internet
    }
];

const Work = () => {
    return (
        <div className='my-20'>
            <div>
                <div className='w-8/12 flex justify-around bg-black gap-12 mx-auto px-10 rounded-2xl py-14'>
                    {
                        suceess.map((item, index) => (
                            <div key={index} className='flex flex-col tracking-wide capitalize items-center gap-3  justify-center'>
                                <h1 className='text-4xl font-bold text-[#78C448] '>{item.id}+</h1>
                                <p className='text-lg text-white font-semibold'>{item.title}</p>
                            </div>
                        ))
                    }
                </div>
                <div className='flex mx-auto gap-y-3 flex-col items-center justify-center mt-20'>
                    <h1 className=' text-6xl font-bold text-[#011B24]'>Our Creative Work</h1>
                    <p className=' text-2xl max-w-3xl text-center text-[#7A8D93]'>We Understand the importance of innovation and professionalism and work with the best people to achieve this.</p>
                </div>
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 w-10/12 my-10 mx-auto mt-10 lg:grid-cols-4 ">
                        {serviceName.map((card, index) => (
                            <div key={index} className="relative group ">

                                <div className=" w-[302px] h-[363px] rounded-2xl   overflow-hidden">
                                    <img
                                        src={card.image}
                                        alt={card.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute top-0 w-[302px] h-[363px] rounded-2xl bg-gradient-to-b to-[#011B24]/80 from-0%"></div>

                                    <div className="absolute bottom-0 left-0 right-0 flex p-6 text-white">
                                        <h3 className="text-3xl w-[60%] font-medium mb-2">{card.title}</h3>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work
