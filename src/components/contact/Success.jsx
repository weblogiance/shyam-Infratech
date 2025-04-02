import React from 'react'
import f1 from '../../assets/image/Frame (1).png'
import f2 from '../../assets/image/Frame (2).png'
import f3 from '../../assets/image/Frame (3).png'
import f4 from '../../assets/image/Frame (4).png'
import f5 from '../../assets/image/Frame (5).png'
import f6 from '../../assets/image/Frame (6).png'
import { div } from 'framer-motion/client'

const suceess = [
    {
        id: "500+",
        title: 'Clients Served',

    },
    {
        id: "30%",
        title: 'Average Energy Savings',

    },
    {
        id: "24/7",
        title: 'Support Available',
    },
    {
        id: "15+",
        title: 'Years Experience',

    },
]

const Success = () => {
    return (
        <div>
            <div className='flex flex-col mx-auto items-center gap-y-4 mt-20'>
                <h1 className=' text-6xl font-semibold'>Our Journey</h1>
                <p className=' max-w-xl text-center text-[#7A8D93]'>Since our founding in 2008, InfraTech Energy has been at the forefront of the energy management revolution. We've grown from a small team of passionate engineers to a global leader in sustainable energy solutions.</p>
            </div>
            <div className='my-20 relative overflow-hidden'>
                <img src={f1} alt="" className=' absolute top-0 left-20' />
                <img src={f6} alt="" className=' absolute top-50' />
                <img src={f5} alt="" className=' absolute left-[345px] top-[200px]' />


                <img src={f3} alt="" className=' absolute -top-3 right-[45px]' />
                <img src={f2} alt="" className=' absolute right-[50px] top-[200px]' />
                <img src={f4} alt="" className=' absolute right-[355px] top-[145px]' />
                <div className='relative h-[45vh]'>

                    <div className='w-8/12 max-sm:w-11/12 flex lg:flex-row flex-col gap-y-10 justify-around bg-black max-sm:bg-black/90   mx-auto px-10 rounded-2xl py-14'>
                        {
                            suceess.map((item, index) => (
                                <>
                                    <div key={index} className='flex  w-full flex-col tracking-wide capitalize items-center gap-3  justify-center text-center'>
                                        <h1 className='text-4xl font-bold text-[#78C448] '>{item.id}</h1>
                                        <p className='text-md text-white font-semibold '>{item.title}</p>
                                    </div>
                                    <hr className={` border-white ${index == 3 && "hidden"}`} />
                                </>

                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Success
