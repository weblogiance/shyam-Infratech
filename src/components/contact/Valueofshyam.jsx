import React from 'react'
import value1 from '../../assets/image/about1.png'
import value2 from '../../assets/image/about2.png'
import value3 from '../../assets/image/about3.png'
import value4 from '../../assets/image/about4.png'


const ourvalue = [
    {
        title: "Reliability",
        image: value1,
        dec: "Consistent and dependable energy solutions you can count on."
    },
    {
        title: "Sustainability",
        image: value2,
        dec: "Committed to environmental responsibility and green practices."
    },
    {
        title: "Innovation",
        image: value3,
        dec: "Cutting-edge solutions for modern energy challenges."
    },
    {
        title: "Partnership",
        image: value4,
        dec: "Building lasting relationships with our clients and communities."
    }
];

const Achievements = [
    {
        year: "2023",
        Name: "Industry Leadership Award",
        dec: "Recognized for pioneering sustainable energy solutions"
    },
    {
        year: "2024",
        Name: "Green Innovation Excellence",
        dec: "Awarded for breakthrough energy optimization technology"
    },
    {
        year: "2025",
        Name: "Customer Satisfaction Award",
        dec: "Highest rated energy management service provider"
    }
]

const Valueofshyam = () => {
    return (
        <div>

            <div>
                <h1 className=' text-6xl font-semibold mx-auto flex items-center justify-center mb-20'>Our Values</h1>
                <div className="flex lg:flex-row flex-col justify-center items-center gap-x-10 w-full  gap-y-5 my-10 place-items-center  mx-auto mt-10 lg:grid-cols-4 ">
                    {ourvalue.map((card, index) => (
                        <div key={index} className="relative group ">

                            <div className=" w-[330px] max-sm:w-[340px]  h-[393px] rounded-2xl   overflow-hidden">
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className="w-full h-full object-cover"
                                />


                                <div className="absolute flex flex-col bottom-0 left-0 right-0  p-6 text-white">
                                    <h3 className="text-2xl w-[60%] font-medium mb-2">{card.title}</h3>
                                    <p className='  '>{card.dec}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h1 className='flex justify-center items-center text-6xl font-semibold my-20'>Our Achievements</h1>
               <div className=' flex justify-between w-9/12 mx-auto '>
               {
                    Achievements.map((reward, index) => (
                        <>
                            <div key={index} className='flex flex-col gap-y-2'>
                                <h1 className='text-6xl font-semibold text-[#78C448]'>{reward.year}</h1>
                                <h3 className=' text-2xl font-medium'>{reward.Name}</h3>
                                <p className=' text-lg text-[#7A8D93] max-w-xs'>{reward.dec}</p>
                            </div>
                            <div className={`flex border border-[#7A8D93] ${index == 2 && "hidden"}`}></div>

                        </>
                    ))
                }
               </div>
            </div>
        </div>
    )
}

export default Valueofshyam
