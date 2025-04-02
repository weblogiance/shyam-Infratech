import React from 'react'
import t1 from '../../assets/image/t1.png'
import t2 from '../../assets/image/t2.png'
import t3 from '../../assets/image/t3.png'
import t4 from '../../assets/image/t4.png'

const teaminfo = [
    {
        Photo:t1,
        position:"CEO",
        Name:"Sarah Johnson"
    },
    {
        Photo:t2,
        position:"Technical Director",
        Name:"Michael Chen"
    },
    {
        Photo:t3,
        position:"Sustainability Head",
        Name:"Emily Rodriguez"
    },
    {
        Photo:t4,
        position:"Operations Manager",
        Name:"James Wilson"
    }
]

const Team = () => {
    return (
        <div>
            <div className='my-20'>
                <h1 className=' text-6xl font-semibold flex justify-center items-center'>Our Leadership Team</h1>
                <div className="flex lg:flex-row flex-col justify-center items-center gap-x-10 w-full  gap-y-5  place-items-center  mx-auto mt-20 lg:grid-cols-4 ">
                    {teaminfo.map((card, index) => (
                        <div key={index} className="relative group ">

                            <div className=" w-[302px] max-sm:w-[340px]  h-[363px] rounded-2xl   overflow-hidden">
                                <img
                                    src={card.Photo}
                                    alt={card.Name}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute top-0 w-[302px] max-sm:w-[340px] h-[363px]  rounded-2xl bg-gradient-to-b to-[#011B24]/80 from-0%"></div>

                                <div className="absolute bottom-0 left-0 right-0 flex p-6 text-white">
                                    <div className='flex flex-col items-start  border-l-4 px-2'>

                                        <h3 className="text-2xl font-medium ">{card.Name}</h3>
                                        <span className='text-lg text-[#78C448]'>{card.position}</span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='mb-20 flex flex-col gap-y-5'>
                <h1 className='flex justify-center items-center text-6xl font-semibold'>Ready to Transform Your Energy Management ?</h1>
                <p className=' text-3xl font-medium text-center text-[#7A8D93]'>Join us in creating a more sustainable future for your business.</p>
                <button className='flex w-fit mx-auto bg-[#78C448] px-6 py-3 rounded-full text-white '>Contact Us Today</button>
            </div>
        </div>
    )
}

export default Team
